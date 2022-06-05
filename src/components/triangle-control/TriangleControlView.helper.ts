import { TControlState } from './TriangleControlView.types';

/**
 * Each input must have contain valid entries, the length of sides.
 */
export const isAnyInputInvalid = (sideLenghts: TControlState) =>
  !Object.values(sideLenghts).every((len) => Number(len) > 0);

/**
 * Prevent submitting with the same inputs consecutively.
 */
export const shouldSubmitInputs = (
  currentInputs: TControlState,
  lastSubmittedInputs: TControlState
): boolean =>
  JSON.stringify(currentInputs) !== JSON.stringify(lastSubmittedInputs);
