import React from 'react';
import TriangleControlView from 'components/triangle-control';
import TriangleOutputView from 'components/triangle-output';

const TriangleScreen: React.FC = () => {
  return (
    <div>
      <TriangleControlView />
      <TriangleOutputView />
    </div>
  );
};

export default TriangleScreen;
