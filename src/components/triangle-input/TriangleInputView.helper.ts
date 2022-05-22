import { valueType } from 'antd/lib/statistic/utils';

export enum TriangleLimit {
  MIN = 1,
  MAX = 99999,
}
/**
 * "e" or "E" characters are considered as valid floating point numbers.
 * Replace them with a static text that will not be parsed by number input.
 * Issue @link => https://github.com/ant-design/ant-design/issues/27014#issuecomment-703768777
 */
export const EMPTY_FLOATING_POINT_TEXT = 'INVALID';

export const parseLengthInput = (value: string | undefined): string => {
  // It is a valid number, accept it.
  if (value && Number(value)) return value;
  // Do not show any value.
  return '';
};

export const getLengthValue = (length: valueType): string => {
  if (!length) return '';
  return length.toString();
};

export const formatSpecialFloatChar = (
  value: valueType | undefined
): string => {
  if (!value || /e/i.test(value.toString())) return EMPTY_FLOATING_POINT_TEXT;
  return value.toString();
};
