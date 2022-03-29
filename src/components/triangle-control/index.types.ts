export enum TriangleSides {
  A = 'sideA',
  B = 'sideB',
  C = 'sideC',
}

export type TControlState = Record<TriangleSides, null | string>;

export const INITIAL_CONTROL_STATE: TControlState = {
  [TriangleSides.A]: null,
  [TriangleSides.B]: null,
  [TriangleSides.C]: null,
};

export interface ITriangleUpdateProps {
  side: TriangleSides;
  lenght: string;
}
