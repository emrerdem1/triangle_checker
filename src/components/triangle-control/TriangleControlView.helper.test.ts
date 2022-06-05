import { getMultipleTriangle } from 'components/common/tests.helper';
import {
  isAnyInputInvalid,
  shouldSubmitInputs,
} from './TriangleControlView.helper';

describe('isAnyInputInvalid() should detect whether entries are valid or not', () => {
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
      expect(isAnyInputInvalid(inputs)).toBe(true)
    );
  });

  it('should return false when all input values are valid', () => {
    const validTriangleInputs = getMultipleTriangle([
      ['1', '2', '3'],
      ['3', '14', '25'],
      ['16', '27', '38'],
    ]);
    validTriangleInputs.forEach((inputs) =>
      expect(isAnyInputInvalid(inputs)).toBe(false)
    );
  });
});

describe('shouldSubmitInputs() should tell if submittion action is needed or not', () => {
  it('should return true when new input values are different than last submitted ones', () => {
    const inputValues = getMultipleTriangle([
      // Current input values.
      ['1', '2', '2'],
      // Last submitted input values.
      ['3', '2', '2'],
    ]);

    expect(shouldSubmitInputs(inputValues[0], inputValues[1])).toBe(true);
  });

  it('should return true when new input values are the same with last submitted ones', () => {
    const inputValues = getMultipleTriangle([
      // Current input values.
      ['5', '11', '8'],
      // Last submitted input values.
      ['5', '11', '8'],
    ]);

    expect(shouldSubmitInputs(inputValues[0], inputValues[1])).toBe(false);
  });
});
