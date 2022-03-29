import { CenteredContainerDiv } from 'components/common/styled';
import React from 'react';

const TriangleOutputView: React.FC = () => {
  return (
    <CenteredContainerDiv>
      <h3>Result: {'-'}</h3>
    </CenteredContainerDiv>
  );
};

export default TriangleOutputView;
