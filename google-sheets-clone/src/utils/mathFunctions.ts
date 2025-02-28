export const SUM = (values: number[]): number => {
    return values.reduce((acc, val) => acc + val, 0);
};

export const AVERAGE = (values: number[]): number => {
    if (values.length === 0) return 0;
    return SUM(values) / values.length;
};

export const MAX = (values: number[]): number => {
    return Math.max(...values);
};

export const MIN = (values: number[]): number => {
    return Math.min(...values);
};

export const COUNT = (values: any[]): number => {
    return values.filter(value => typeof value === 'number').length;
};