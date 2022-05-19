import {
  EMPTY_FLOATING_POINT_TEXT,
  formatSpecialFloatChar,
} from './TriangleInputView.helper';

describe('formatSpecialFloatChar() should handle special characters', () => {
  it('should return default string when invalid or special character is typed in', () => {
    const invalidValues = ['e', 'E', 0, undefined, NaN, ''];
    invalidValues.forEach((value) =>
      expect(formatSpecialFloatChar(value)).toBe(EMPTY_FLOATING_POINT_TEXT)
    );
  });

  it('should return the value as string successfully', () => {
    const validValues = [1, 13, 74];
    validValues.forEach((value) =>
      expect(formatSpecialFloatChar(value)).toBe(value.toString())
    );
  });
});
