import React, { useState, useEffect, useCallback } from 'react';
import { valueType } from 'antd/lib/statistic/utils';
import {
  ITriangleUpdateProps,
  TriangleSides,
} from 'components/triangle-control/TriangleControlView.types';
import {
  formatSpecialFloatChar,
  getLengthValue,
  parseLengthInput,
  TriangleLimit,
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

  useEffect(() => {
    updateTriangleSide({ side, lenght: sideLength });
  }, [side, sideLength, updateTriangleSide]);

  const updateSideLength = useCallback((value: valueType) => {
    setSideLength(getLengthValue(value));
  }, []);

  return (
    <TriangleInput
      type="number"
      min={TriangleLimit.MIN}
      max={TriangleLimit.MAX}
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
