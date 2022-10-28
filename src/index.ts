type Sigkey = string;

export const get = (key: number, length = 6): Sigkey => {
    return String(key).padStart(length, '0');
};

export const inc = (key: string, increment = 1): Sigkey => {
    return get(parseInt(key, 10) + increment, key.length);
};

export const dec = (key: string, decrement = 1): Sigkey => {
    return get(parseInt(key, 10) - decrement, key.length);
};

export const parse = (key: string): number => {
    return parseInt(key, 10);
};
