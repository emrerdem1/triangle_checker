import { TControlState } from 'components/triangle-control/index.types';
import {
  IErrorMessageProps,
  ITriangleKeyValuePair,
  ITriangleState,
  UniqueTriangleSizes,
} from './index.types';

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

const hasIssueWithLengths = (sides: TControlState) => {
  return formatSideLenghts(sides).find((pair, _, pairArray) =>
    getCertainSideError(pair, pairArray)
  );
};

const getCertainSideError = (
  comparedSide: ITriangleKeyValuePair,
  remainingPairs: ITriangleKeyValuePair[]
): IErrorMessageProps | false => {
  const [secondSide, thirdSide] = remainingPairs.filter(
    (remaining) => remaining.name !== comparedSide.name
  );
  if (
    comparedSide.value >
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

export const checkTriangleSides = (sides: TControlState): ITriangleState => {
  if (hasIssueWithLengths(sides)) {
    return getTriangleErrors(sides);
  }

  return getValidTriangleType(sides);
};
