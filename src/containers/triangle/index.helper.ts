import { TControlState } from 'components/triangle-control/index.types';
import {
  IErrorMessageProps,
  ITriangleKeyValuePair,
  ITriangleState,
  UniqueTriangleSizes,
} from './index.types';

/**
 * Generate boilerplate explanation of the cause of errors.
 */
const generateErrorMessage = ({
  addend,
  aggregative,
  sum,
}: IErrorMessageProps) =>
  `The sum of length of ${addend} and ${aggregative} must be greater than ${sum}'s.`;

const formatSideLenghts = (sides: TControlState): ITriangleKeyValuePair[] =>
  Object.entries(sides).map(([key, value]) => ({
    name: key,
    value: Number(value),
  }));

/**
 * Compare one side to the given remaining sides to identicate the root of cause.
 */
const getCertainSideError = (
  comparedSide: ITriangleKeyValuePair,
  remainingPairs: ITriangleKeyValuePair[]
): IErrorMessageProps | false => {
  const [secondSide, thirdSide] = remainingPairs.filter(
    (remaining) => remaining.name !== comparedSide.name
  );
  if (
    comparedSide.value >=
    [secondSide, thirdSide].reduce((acc, curr) => acc + curr.value, 0)
  ) {
    return {
      sum: comparedSide.name,
      addend: secondSide.name,
      aggregative: thirdSide.name,
    };
  }
  return false;
};

/**
 * Get invalid type with error messages indicating which sides caused it.
 */
const getTriangleErrors = (sides: TControlState): ITriangleState => {
  const result: ITriangleState = { type: 'invalid', errorMessages: [] };

  formatSideLenghts(sides).forEach((pair, _, pairArray) => {
    const certainSideError = getCertainSideError(pair, pairArray);
    if (certainSideError) {
      const errorMessage = generateErrorMessage(certainSideError);
      result.errorMessages?.push(errorMessage);
    }
  });
  return result;
};

/**
 * Valid triangles might have up to three unique side lenghts,
 * get their type names based on the count of unique sides.
 */
const getValidTriangleType = (sides: TControlState): ITriangleState => {
  const uniqueTriangleSides = new Set(Object.values(sides));

  switch (uniqueTriangleSides.size) {
    case UniqueTriangleSizes.EQUILATERAL:
      return { type: 'equilateral', errorMessages: [] };
    case UniqueTriangleSizes.ISOSCELES:
      return { type: 'isosceles', errorMessages: [] };
    default:
      return { type: 'scalene', errorMessages: [] };
  }
};

/**
 * Get triangle type based on side lenghts, with errors if they exist.
 */
export const checkTriangleSides = (sides: TControlState): ITriangleState => {
  const errorResult = getTriangleErrors(sides);
  // Encountered an error, return invalid type with messages.
  if (errorResult.errorMessages.length) return errorResult;

  return getValidTriangleType(sides);
};
