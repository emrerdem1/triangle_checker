import React, { useState, useCallback } from 'react';
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
import TriangleCheckView from './TriangleCheckView';

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
    []
  );

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
        <TriangleCheckView
          sideLenghts={sideLenghts}
          updateTriangleStatus={updateTriangleStatus}
        />
      </InputGroup>
    </CenteredContainerDiv>
  );
};

export default React.memo(TriangleControlView);
