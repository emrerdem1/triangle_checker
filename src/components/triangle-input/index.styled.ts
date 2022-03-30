import { InputNumber } from 'antd';
import styled from '@emotion/styled';

interface ITriangleInputProps {
  name: string;
}

export const TriangleInput = styled(InputNumber)<ITriangleInputProps>`
  width: ${100 / 3}%;
  position: relative;

  ::before,
  ::after {
    content: '';
    position: absolute;
    left: 50%;
    color: gray;
    transform: translateX(-50%);
  }

  ::before {
    top: -1.3em;
    height: 1rem;
    width: 1px;
    background-color: gray;
  }

  ::after {
    content: '${(props) => props.name}';
    top: -2.8rem;
    font-size: 1.1rem;
  }

  .ant-input-number-input {
    text-align: center;
  }
`;
