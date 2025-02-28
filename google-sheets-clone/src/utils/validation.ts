export const validateNumericInput = (value: string): boolean => {
    return !isNaN(Number(value));
};

export const validateTextInput = (value: string): boolean => {
    return typeof value === 'string';
};

export const validateDateInput = (value: string): boolean => {
    const date = new Date(value);
    return !isNaN(date.getTime());
};

export const validateCellInput = (value: string): boolean => {
    return validateNumericInput(value) || validateTextInput(value) || validateDateInput(value);
};