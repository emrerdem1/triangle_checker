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
  const [A, B, C] = formatSideLenghts(sides);
  return (
    A.value > B.value + C.value ||
    B.value > A.value + C.value ||
    C.value > A.value + B.value
  );
};

const getTriangleErrors = (sides: TControlState): ITriangleState => {
  const result: ITriangleState = { type: 'invalid', errorMessages: [] };

  formatSideLenghts(sides).forEach((pair, _, pairArray) => {
    const [secondSide, thirdSide] = pairArray.filter(
      (remaining) => remaining.value !== pair.value
    );
    if (
      pair.value >
      [secondSide, thirdSide].reduce((acc, curr) => acc + curr.value, 0)
    ) {
      const errorMessage = generateErrorMessage({
        sum: pair.name,
        addend: secondSide.name,
        aggregative: thirdSide.name,
      });
      result.errorMessages?.push(errorMessage);
    }
  });
  return result;
};

const getValidTriangleType = (sides: TControlState): ITriangleState => {
  const uniqueTriangleSides = new Set(Object.values(sides));

  switch (uniqueTriangleSides.size) {
    case UniqueTriangleSizes.EQUILATERAL:
      return { type: 'equilateral', errorMessages: null };
    case UniqueTriangleSizes.ISOSCELES:
      return { type: 'isosceles', errorMessages: null };
    default:
      return { type: 'scalene', errorMessages: null };
  }
};

export const checkTriangleSides = (sides: TControlState): ITriangleState => {
  if (hasIssueWithLengths(sides)) {
    return getTriangleErrors(sides);
  }

  return getValidTriangleType(sides);
};
