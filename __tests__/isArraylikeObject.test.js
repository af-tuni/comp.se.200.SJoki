import isArrayLikeObject from "../src/isArrayLikeObject";

test('returns array as true', () => {
    expect(isArrayLikeObject([1,2,3])).toBe(true);
})

test('returns empty array as true', () => {
    expect(isArrayLikeObject([])).toBe(true);
})

test('returns string as false', () => {
    expect(isArrayLikeObject('abc')).toBe(false);
})

test('returns Function as false', () => {
    expect(isArrayLikeObject(Function)).toBe(false);
})

test('returns undefined as false', () => {
    expect(isArrayLikeObject(undefined)).toBe(false);
})

test('returns boolean as false', () => {
    expect(isArrayLikeObject(true)).toBe(false);
})

test('returns array with infinity as true', () => {
    expect(isArrayLikeObject([1, Infinity])).toBe(true);
})

test('should return true for large arrays', () => {
    const largeArray = Array(1_000_000).fill(0); // array of million zeros
    expect(isArrayLikeObject(largeArray)).toBe(true);
  });