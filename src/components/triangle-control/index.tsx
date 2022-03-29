import React from 'react';
import { Button } from 'antd';
import { InputGroup } from './index.styled';
import TriangleInputView from './TriangleInputView';
import { CenteredContainerDiv } from 'components/common/styled';
import { GutterSizes } from 'utils/constants';

const TriangleControlView: React.FC = () => {
  return (
    <CenteredContainerDiv verticalGutter={GutterSizes.MD}>
      <InputGroup compact>
        <TriangleInputView />
        <TriangleInputView />
        <TriangleInputView />
        <Button type="primary">Visualize</Button>
      </InputGroup>
    </CenteredContainerDiv>
  );
};

export default TriangleControlView;
