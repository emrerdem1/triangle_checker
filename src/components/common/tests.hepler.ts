import {
  TControlState,
  TriangleSides,
} from 'components/triangle-control/index.types';

export const generateTriangle = ([A, B, C]: string[]): TControlState => ({
  [TriangleSides.A]: A,
  [TriangleSides.B]: B,
  [TriangleSides.C]: C,
});

export const getMultipleTriangle = (triangleSides: Array<string[]>) =>
  triangleSides.map((side) => generateTriangle(side));
