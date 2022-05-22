import React, { useCallback, useState } from 'react';
import TriangleControlView from 'components/triangle-control/TriangleControlView';
import TriangleOutputView from 'components/triangle-output/TriangleOutputView';
import { TControlState } from 'components/triangle-control/TriangleControlView.types';
import {
  INITIAL_TRIANGLE_DATA,
  TriangleDataSpec,
} from './TriangleScreen.types';
import { checkTriangleSides } from './TriangleScreen.helper';

const TriangleScreen: React.FC = () => {
  const [triangleData, setTriangleData] = useState<TriangleDataSpec>(
    INITIAL_TRIANGLE_DATA
  );

  const updateTriangleStatus = useCallback((sides: TControlState) => {
    const triangleResult = checkTriangleSides(sides);
    setTriangleData((prevState) => ({
      ...prevState,
      ...triangleResult,
    }));
  }, []);

  return (
    <>
      <TriangleControlView updateTriangleStatus={updateTriangleStatus} />
      <TriangleOutputView
        type={triangleData.type}
        errorMessages={triangleData.errorMessages}
      />
    </>
  );
};

export default TriangleScreen;
