export const parseLengthInput = (value: string | undefined): string => {
  // It is a valid number, accept it.
  if (value && Number(value)) return value;
  // Turn status to warning and show the cause.
  return '';
};
