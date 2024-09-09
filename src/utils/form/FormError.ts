const DEFAULT_LABEL = 'Ce champ est ';

export const validateMaxLength = (value: string, maxLength: number, label: string = DEFAULT_LABEL): string | null => {
  if (value.length > maxLength) {
    return `${label} trop long ${value.length}/${maxLength}.`;
  }
  return null;
};

export const validateMinLength = (value: string, minLength: number, label: string = DEFAULT_LABEL): string | null => {
  if (value.length < minLength) {
    return `${label} trop petit ${value.length}/${minLength}.`;
  }
  return null;
};

export const validateMinValue = (value: number, minValue: number, label: string = DEFAULT_LABEL): string | null => {
  if (value < minValue) {
    return `${label} doit être supérieur ou égal à ${minValue}.`;
  }
  return null;
};

export const validateMaxValue = (value: number, maxValue: number, label: string = DEFAULT_LABEL): string | null => {
  if (value > maxValue) {
    return `${label} doit être inférieur ou égal à ${maxValue}.`;
  }
  return null;
};

export const validateRequired = (
  value: string | number | boolean | null | undefined,
  label: string = '',
): string | null => {
  const isEmpty = value === undefined || value === null || value === '' || value === false;
  if (isEmpty) {
    return `Le champ ${label} est requis.`;
  }
  return null;
};

export const validateDate = (value: string | null, label: string = DEFAULT_LABEL): string | null => {
  if (value === null) return `${label} est requis.`;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return `${label} n'est pas une date valide.`;
  }
  return null;
};

export const validatePattern = (value: string, pattern: RegExp, label: string = DEFAULT_LABEL): string | null => {
  if (!pattern.test(value)) {
    return `${label} n'a pas un format valide.`;
  }
  return null;
};

export const validateCustom = <T>(
  validateFn: (value: T) => boolean | string,
  value: T,
  label: string = DEFAULT_LABEL,
): string | null => {
  const result = validateFn(value);
  if (result !== true) {
    if (typeof result === 'string') {
      return result;
    } else {
      return `${label} est invalide.`;
    }
  }
  return null;
};
