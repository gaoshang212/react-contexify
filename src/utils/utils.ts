export function isFunction(x: any): x is Function {
    return x instanceof Function;
}

export function isArray<T>(x: any): x is Array<T> {
    return x instanceof Array;
}