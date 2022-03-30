import {
  INITIAL_CONTROL_STATE,
  TControlState,
} from 'components/triangle-control/index.types';

export type TriangleTypes = 'equilateral' | 'isosceles' | 'scalene' | 'invalid';

export interface ITriangleState {
  type: TriangleTypes | null;
  errorMessages: string[] | null;
}

export type TriangleDataSpec = ITriangleState & TControlState;

export const INITIAL_TRIANGLE_DATA = {
  ...INITIAL_CONTROL_STATE,
  type: null,
  errorMessages: null,
};

export interface IErrorMessageProps {
  addend: string;
  aggregative: string;
  sum: string;
}

export interface ITriangleKeyValuePair {
  name: string;
  value: number;
}

export enum UniqueTriangleSizes {
  EQUILATERAL = 1,
  ISOSCELES = 2,
  SCALENE = 3,
}
