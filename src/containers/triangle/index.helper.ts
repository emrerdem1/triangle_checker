import { TControlState } from 'components/triangle-control/index.types';
import { ITriangleState } from './index.types';

interface IErrorMessageProps {
  addend: string;
  aggregative: string;
  sum: string;
}

const generateErrorMessage = ({
  addend,
  aggregative,
  sum,
}: IErrorMessageProps) =>
  `The sum of length of ${addend} and ${aggregative} must be greater than ${sum}'s.`;

const convertSideLenghtsToNumber = (sides: TControlState): number[] =>
  Object.values(sides).map((side) => Number(side));

const hasIssueWithLengths = (sides: TControlState) => {
  const [A, B, C] = convertSideLenghtsToNumber(sides);
  return A > B + C || B > A + C || C > A + B;
};

const getTriangleErrors = (sides: TControlState) => {
  const result: ITriangleState = { type: null, errorMessages: [] };
  const [A, B, C] = convertSideLenghtsToNumber(sides);

  if (A > B + C) {
    result.type = 'invalid';
    const errorMessage = generateErrorMessage({
      addend: 'B',
      aggregative: 'C',
      sum: 'A',
    });
    result.errorMessages?.push(errorMessage);
  }
  if (B > A + C) {
    result.type = 'invalid';
    const errorMessage = generateErrorMessage({
      addend: 'A',
      aggregative: 'C',
      sum: 'B',
    });
    result.errorMessages?.push(errorMessage);
  }
  if (C > A + B) {
    result.type = 'invalid';
    const errorMessage = generateErrorMessage({
      addend: 'A',
      aggregative: 'B',
      sum: 'C',
    });
    result.errorMessages?.push(errorMessage);
  }
  return result;
};

const getValidTriangleType = (sides: TControlState): ITriangleState => {
  if (sides.A === sides.B && sides.B === sides.C) {
    return { type: 'equilateral', errorMessages: null };
  } else if (
    sides.A === sides.B ||
    sides.A === sides.C ||
    sides.B === sides.C
  ) {
    return { type: 'isosceles', errorMessages: null };
  }
  return { type: 'scalene', errorMessages: null };
};

export const checkTriangleSides = (sides: TControlState): ITriangleState => {
  if (hasIssueWithLengths(sides)) {
    return getTriangleErrors(sides);
  }

  return getValidTriangleType(sides);
};
