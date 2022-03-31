import { getMultipleTriangle } from 'components/common/tests.hepler';
import { hasInvalidInput } from './index.helper';

describe('hasInvalidInput() should detect whether entries are valid or not', () => {
  it('should return true when any input has invalid value as string', () => {
    const invalidTriangleInputs = getMultipleTriangle([
      ['', '1', '2'],
      ['-1', '3', '4'],
      ['0', '5', '11'],
      ['6', 'NaN', '8'],
      ['3', '4', 'undefined'],
      ['null', '6', '7'],
    ]);
    invalidTriangleInputs.forEach((inputs) =>
      expect(hasInvalidInput(inputs)).toBeTruthy()
    );
  });

  it('should return false when all input values are valid', () => {
    const validTriangleInputs = getMultipleTriangle([
      ['1', '2', '3'],
      ['3', '14', '25'],
      ['16', '27', '38'],
    ]);
    validTriangleInputs.forEach((inputs) =>
      expect(hasInvalidInput(inputs)).toBeFalsy()
    );
  });
});
