import React, { useState, useEffect, useRef } from 'react';
import { Button, Tooltip } from 'antd';
import {
  isAnyInputInvalid,
  shouldSubmitInputs,
} from './TriangleControlView.helper';
import { EMPTY_INPUT_TEXT, TControlState } from './TriangleControlView.types';

interface ITriangleCheckProps {
  sideLenghts: TControlState;
  updateTriangleStatus: (sides: TControlState) => void;
}

const TriangleCheckView: React.FC<ITriangleCheckProps> = ({
  sideLenghts,
  updateTriangleStatus,
}) => {
  const lastSubmittedLenghts = useRef<TControlState>(sideLenghts);
  const [hasInvalidInput, setHasInvalidInput] = useState<boolean>(true);

  useEffect(() => {
    setHasInvalidInput(isAnyInputInvalid(sideLenghts));
  }, [sideLenghts]);

  const submitTriangleInputs = () => {
    if (!shouldSubmitInputs(sideLenghts, lastSubmittedLenghts.current)) return;

    updateTriangleStatus(sideLenghts);
    lastSubmittedLenghts.current = sideLenghts;
  };

  return (
    <Tooltip placement="right" title={hasInvalidInput && EMPTY_INPUT_TEXT}>
      <Button
        type="primary"
        disabled={hasInvalidInput}
        onClick={submitTriangleInputs}
      >
        Check
      </Button>
    </Tooltip>
  );
};

export default TriangleCheckView;
