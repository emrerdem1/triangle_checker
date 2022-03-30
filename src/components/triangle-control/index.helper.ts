import { TControlState } from './index.types';

/**
 * Each input must have contain valid entries, the length of sides.
 */
export const hasValidInputs = (sideLenghts: TControlState) =>
  !Object.values(sideLenghts).every((len) => len);
