import {
  generateTriangle,
  getMultipleTriangle,
} from 'components/common/tests.helper';
import {
  formatSideLenghts,
  getCertainSideError,
  checkTriangleErrors,
  getValidTriangleType,
} from './TriangleScreen.helper';
import { ITriangleKeyValuePair } from './TriangleScreen.types';

const _getTriangleKeyValuePairs = (
  name: string,
  value: number
): ITriangleKeyValuePair => ({
  name,
  value,
});

describe('getValidTriangleType() should return matching triangle type', () => {
  it('should return isocseles type when only two sides are equal', () => {
    const triangleList = getMultipleTriangle([
      ['1', '2', '1'],
      ['5', '5', '8'],
      ['13', '8', '13'],
    ]);
    triangleList.forEach((triangle) =>
      expect(getValidTriangleType(triangle)).toEqual({
        type: 'isosceles',
        errorMessages: [],
      })
    );
  });

  it('should return equilateral type when all three sides are equal', () => {
    const triangleList = getMultipleTriangle([
      ['4', '4', '4'],
      ['7', '7', '7'],
    ]);
    triangleList.forEach((triangle) =>
      expect(getValidTriangleType(triangle)).toEqual({
        type: 'equilateral',
        errorMessages: [],
      })
    );
  });

  it('should return scalene type when all three sides are different', () => {
    const triangleList = getMultipleTriangle([
      ['2', '3', '4'],
      ['5', '7', '11'],
    ]);
    triangleList.forEach((triangle) =>
      expect(getValidTriangleType(triangle)).toEqual({
        type: 'scalene',
        errorMessages: [],
      })
    );
  });
});

describe('formatSideLenghts() should format triangle sides to key/value pairs', () => {
  it('should return corresponding key/value pairs of triangle', () => {
    const triangle = generateTriangle(['3', '4', '5']);
    expect(formatSideLenghts(triangle)).toEqual([
      { name: 'A', value: 3 },
      { name: 'B', value: 4 },
      { name: 'C', value: 5 },
    ]);

    const triangleWithDifferentOrder = generateTriangle(['8', '11', '5']);
    expect(formatSideLenghts(triangleWithDifferentOrder)).toEqual([
      { name: 'A', value: 8 },
      { name: 'B', value: 11 },
      { name: 'C', value: 5 },
    ]);
  });
});

describe('getCertainSideError() should point out the cause of error with a message', () => {
  it(`should indicate which sides do not meet the requirement of the sum`, () => {
    const baseSide = _getTriangleKeyValuePairs('C', 12);
    const allSides = [
      baseSide,
      _getTriangleKeyValuePairs('A', 4),
      _getTriangleKeyValuePairs('B', 5),
    ];
    const errorMessage = getCertainSideError(baseSide, allSides);
    expect(errorMessage).toEqual({
      addend: 'A',
      aggregative: 'B',
      sum: 'C',
    });
  });

  it(`should return false when there is no error at given sides`, () => {
    const baseSide = _getTriangleKeyValuePairs('B', 13);
    const allSides = [
      baseSide,
      _getTriangleKeyValuePairs('A', 11),
      _getTriangleKeyValuePairs('C', 17),
    ];
    const errorMessage = getCertainSideError(baseSide, allSides);
    expect(errorMessage).toBe(false);
  });
});

describe('checkTriangleErrors() should return empty array or array consisting of errors', () => {
  it(`should not contain any error messages when triangle sides are valid`, () => {
    const validTriangle = generateTriangle(['3', '4', '5']);
    const errorCheck = checkTriangleErrors(validTriangle);
    expect(errorCheck.errorMessages.length).toBeFalsy();
  });

  it(`should contain error messages when triangle sides are invalid`, () => {
    const invalidTriangle = generateTriangle(['4', '5', '22']);
    const errorCheck = checkTriangleErrors(invalidTriangle);
    expect(errorCheck.errorMessages.length).toBeTruthy();
  });
});
