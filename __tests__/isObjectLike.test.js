import isObjectLike from "../src/isObjectLike";

// Positive testing

test('returns not empty object as true', () => {
    expect(isObjectLike({"testi": 2})).toBe(true);
})

test('returns array as true', () => {
    expect(isObjectLike([1,2,3])).toBe(true);
})

test('returns Date object as true', () => {
    expect(isObjectLike(new Date())).toBe(true);
})

test('returns RegExp object as true', () => {
    expect(isObjectLike(/abc/)).toBe(true);
})

test('returns Object.create as true', () => {
    expect(isObjectLike(Object.create(null))).toBe(true);
})

// Edge case testing

test('returns empty object as true', () => {
    expect(isObjectLike({})).toBe(true);
})

// Negative testing

test('returns function as false', () => {
    expect(isObjectLike(new Function())).toBe(false);
})
test('returns null as false', () => {
    expect(isObjectLike(null)).toBe(false);
})
test('returns common data types as false', () => {
    expect(isObjectLike("string")).toBe(false);
    expect(isObjectLike(123)).toBe(false);
    expect(isObjectLike(true)).toBe(false);
})






