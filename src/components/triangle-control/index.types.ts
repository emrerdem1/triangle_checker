export enum TriangleSides {
  A = 'A',
  B = 'B',
  C = 'C',
}

export type TControlState = Record<TriangleSides, string>;

export const INITIAL_CONTROL_STATE: TControlState = {
  [TriangleSides.A]: '',
  [TriangleSides.B]: '',
  [TriangleSides.C]: '',
};

export interface ITriangleUpdateProps {
  side: TriangleSides;
  lenght: string;
}
