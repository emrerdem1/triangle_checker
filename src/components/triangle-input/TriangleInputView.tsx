import React, { useState, useEffect } from 'react';
import { valueType } from 'antd/lib/statistic/utils';
import {
  ITriangleUpdateProps,
  TriangleSides,
} from 'components/triangle-control/TriangleControlView.types';
import {
  formatSpecialFloatChar,
  getLengthValue,
  parseLengthInput,
} from './TriangleInputView.helper';
import { TriangleInput } from './TriangleInputView.styled';

interface ITriangleInputProps {
  side: TriangleSides;
  updateTriangleSide: ({ side, lenght }: ITriangleUpdateProps) => void;
}

const TriangleInputView: React.FC<ITriangleInputProps> = ({
  side,
  updateTriangleSide,
}) => {
  const [sideLength, setSideLength] = useState<string>('');

  /**
   * Lift updated triangle value to controller after every change.
   */
  useEffect(() => {
    updateTriangleSide({ side, lenght: sideLength });
  }, [sideLength]);

  const updateSideLength = (value: valueType) => {
    setSideLength(getLengthValue(value));
  };

  return (
    <TriangleInput
      type="number"
      min={1}
      max={99999}
      keyboard={true}
      name={side}
      parser={parseLengthInput}
      formatter={formatSpecialFloatChar}
      value={sideLength}
      onChange={(value) => updateSideLength(value)}
    />
  );
};

export default React.memo(TriangleInputView);
