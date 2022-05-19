import React, { useState, useCallback, useEffect } from 'react';
import { Button, Tooltip } from 'antd';
import { InputGroup } from './TriangleControlView.styled';
import TriangleInputView from '../triangle-input/TriangleInputView';
import { CenteredContainerDiv } from 'components/common/styled';
import { GutterSizes } from 'utils/constants';
import {
  TControlState,
  INITIAL_CONTROL_STATE,
  ITriangleUpdateProps,
  TriangleSides,
} from './TriangleControlView.types';
import { isAnyInputInvalid } from './TriangleControlView.helper';

const EMPTY_INPUT_TEXT = 'Type a valid value to check the triangle.';

interface ITriangleControlViewProps {
  updateTriangleStatus: (sides: TControlState) => void;
}

const TriangleControlView: React.FC<ITriangleControlViewProps> = ({
  updateTriangleStatus,
}) => {
  const [sideLenghts, setSideLenghts] = useState<TControlState>(
    INITIAL_CONTROL_STATE
  );
  const [hasInvalidInput, setHasInvalidInput] = useState<boolean>(true);

  useEffect(() => {
    setHasInvalidInput(isAnyInputInvalid(sideLenghts));
  }, [sideLenghts]);

  const updateTriangleSide = useCallback(
    ({ side, lenght }: ITriangleUpdateProps) => {
      setSideLenghts((prevState) => ({ ...prevState, [side]: lenght }));
    },
    [setSideLenghts]
  );

  // TODO: Prevent submitting with the same values over and over again.
  const submitTriangleInputs = () => {
    updateTriangleStatus(sideLenghts);
  };

  return (
    <CenteredContainerDiv verticalGutter={GutterSizes.MD}>
      <InputGroup compact>
        {Object.values(TriangleSides).map((side, idx) => (
          <TriangleInputView
            key={side + idx}
            side={side}
            updateTriangleSide={updateTriangleSide}
          />
        ))}
        <Tooltip placement="right" title={hasInvalidInput && EMPTY_INPUT_TEXT}>
          <Button
            type="primary"
            disabled={hasInvalidInput}
            onClick={submitTriangleInputs}
          >
            Check
          </Button>
        </Tooltip>
      </InputGroup>
    </CenteredContainerDiv>
  );
};

export default React.memo(TriangleControlView);
