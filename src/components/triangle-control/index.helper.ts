import { TControlState } from './index.types';

export const hasValidInputs = (sideLenghts: TControlState) =>
  !Object.values(sideLenghts).every((len) => len);
