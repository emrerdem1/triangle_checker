import React, { ChangeEvent } from 'react';
import { InputNumber } from 'antd';
import styled from '@emotion/styled';

const TriangleInput = styled(InputNumber)`
  width: ${100 / 3}%;

  .ant-input-number-input {
    text-align: center;
  }
`;

const TriangleInputView: React.FC = () => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => null;

  return (
    <TriangleInput
      type="number"
      min={1}
      max={99}
      parser={(value) => {
        // It is a valid number, accept it.
        if (value && Number(value)) return value;
        // Turn status to warning and show the cause.
        return '';
      }}
    />
  );
};

export default TriangleInputView;
