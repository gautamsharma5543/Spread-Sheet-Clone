export const trim = (value: string): string => {
    return value.trim();
};

export const toUpperCase = (value: string): string => {
    return value.toUpperCase();
};

export const toLowerCase = (value: string): string => {
    return value.toLowerCase();
};

export const removeDuplicates = (array: any[]): any[] => {
    return Array.from(new Set(array));
};

export const findAndReplace = (text: string, search: string, replace: string): string => {
    const regex = new RegExp(search, 'g');
    return text.replace(regex, replace);
};