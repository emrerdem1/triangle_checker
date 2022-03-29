import { valueType } from 'antd/lib/statistic/utils';
import {
  ITriangleUpdateProps,
  TriangleSides,
} from 'components/triangle-control/index.types';
import React from 'react';

import { useState } from 'react';
import { useEffect } from 'react';
import { parseLengthInput } from './index.helper';
import { TriangleInput } from './index.styled';

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
  }, [sideLength, setSideLength]);

  const updateSideLength = (length: valueType) => {
    const newLength = length ? length.toString() : '';
    setSideLength(newLength);
  };

  return (
    <TriangleInput
      type="number"
      min={1}
      max={99}
      parser={parseLengthInput}
      value={sideLength}
      onChange={(length) => updateSideLength(length)}
    />
  );
};

export default TriangleInputView;
