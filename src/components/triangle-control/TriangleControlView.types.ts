export enum TriangleSides {
  A = 'A',
  B = 'B',
  C = 'C',
}

export type TControlState = Record<TriangleSides, string>;

export interface ITriangleUpdateProps {
  side: TriangleSides;
  lenght: string;
}

export const EMPTY_INPUT_TEXT = 'Type a valid value to check the triangle.';

export const INITIAL_CONTROL_STATE: TControlState = {
  [TriangleSides.A]: '',
  [TriangleSides.B]: '',
  [TriangleSides.C]: '',
};
