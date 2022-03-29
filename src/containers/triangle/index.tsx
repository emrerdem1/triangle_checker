import React, { useState } from 'react';
import TriangleControlView from 'components/triangle-control';
import TriangleOutputView from 'components/triangle-output';
import { TControlState } from 'components/triangle-control/index.types';

type TriangleTypes = 'equilateral' | 'isosceles' | 'scalene' | 'invalid';
type TriangleStatus = 'valid'

interface ITriangleDataState extends TControlState {
  type: TriangleTypes;
  status: boolean | null;
  errorMessages: string[] | null;
}

const TriangleScreen: React.FC = () => {
  const [triangleData, setTriangleData] = useState<ITriangleDataState>();

  const validateTriangleSides = (sides: TControlState) => {
    console.log(sides);
  };

  return (
    <div>
      <TriangleControlView validateTriangleSides={validateTriangleSides} />
      <TriangleOutputView />
    </div>
  );
};

export default TriangleScreen;
