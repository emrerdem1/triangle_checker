import React, { useState } from 'react';
import TriangleControlView from 'components/triangle-control';
import TriangleOutputView from 'components/triangle-output';
import { TControlState } from 'components/triangle-control/index.types';
import { INITIAL_TRIANGLE_DATA, TriangleDataSpec } from './index.types';
import { checkTriangleSides } from './index.helper';

const TriangleScreen: React.FC = () => {
  const [triangleData, setTriangleData] = useState<TriangleDataSpec>(
    INITIAL_TRIANGLE_DATA
  );

  const updateTriangleStatus = (sides: TControlState) => {
    const triangleResult = checkTriangleSides(sides);
    setTriangleData((prevState) => ({
      ...prevState,
      ...triangleResult,
    }));
  };

  return (
    <>
      <TriangleControlView updateTriangleStatus={updateTriangleStatus} />
      <TriangleOutputView triangleData={triangleData} />
    </>
  );
};

export default TriangleScreen;