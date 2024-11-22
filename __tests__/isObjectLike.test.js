import isObjectLike from "../src/isObjectLike";

test('returns empty object as true', () => {
    expect(isObjectLike({})).toBe(true);
})
test('returns array as true', () => {
    expect(isObjectLike([1,2,3])).toBe(true);
})
test('returns function as false', () => {
    expect(isObjectLike(Function)).toBe(false);
})
test('returns null as false', () => {
    expect(isObjectLike(null)).toBe(false);
})
test('returns common data types as false', () => {
    expect(isObjectLike("string")).toBe(false);
    expect(isObjectLike(123)).toBe(false);
    expect(isObjectLike(true)).toBe(false);
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


