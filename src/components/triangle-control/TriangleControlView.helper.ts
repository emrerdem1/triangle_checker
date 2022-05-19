import { TControlState } from './TriangleControlView.types';

/**
 * Each input must have contain valid entries, the length of sides.
 */
export const isAnyInputInvalid = (sideLenghts: TControlState) =>
  !Object.values(sideLenghts).every((len) => Number(len) > 0);
