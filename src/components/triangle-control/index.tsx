import React, { useState, useCallback } from 'react';
import { Button } from 'antd';
import { InputGroup } from './index.styled';
import TriangleInputView from '../triangle-input';
import { CenteredContainerDiv } from 'components/common/styled';
import { GutterSizes } from 'utils/constants';
import {
  TControlState,
  INITIAL_CONTROL_STATE,
  ITriangleUpdateProps,
  TriangleSides,
} from './index.types';
import { hasValidInputs } from './index.helper';

interface ITriangleControlViewProps {
  updateTriangleStatus: (sides: TControlState) => void;
}

const TriangleControlView: React.FC<ITriangleControlViewProps> = ({
  updateTriangleStatus,
}) => {
  const [sideLenghts, setSideLenghts] = useState<TControlState>(
    INITIAL_CONTROL_STATE
  );

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
        <Button
          type="primary"
          disabled={hasValidInputs(sideLenghts)}
          onClick={submitTriangleInputs}
        >
          Check
        </Button>
      </InputGroup>
    </CenteredContainerDiv>
  );
};

export default TriangleControlView;
