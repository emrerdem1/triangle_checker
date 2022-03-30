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
  `The sum of length of ${addend} and ${aggregative} must be greated than ${sum}`;

export const checkTriangleSides = (sides: TControlState): ITriangleState => {
  const result: ITriangleState = { type: null, errorMessages: [] };

  if (sides.A > sides.B + sides.C) {
    result.type = 'invalid';
    const errorMessage = generateErrorMessage({
      addend: 'B',
      aggregative: 'C',
      sum: 'A',
    });
    result.errorMessages?.push(errorMessage);
  }
  if (sides.B > sides.A + sides.C) {
    result.type = 'invalid';
    const errorMessage = generateErrorMessage({
      addend: 'A',
      aggregative: 'C',
      sum: 'B',
    });
    result.errorMessages?.push(errorMessage);
  }
  if (sides.C > sides.A + sides.B) {
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
