import eq from "../src/eq"

const object = { 'a': 1 }
const other = { 'a': 1 }

// Positive testing

test('two string are equal, should return true', () => {
    expect(eq("a", "a")).toBe(true);
})

test('two objects are equal, should return true', () => {
    expect(eq(object, object)).toBe(true);
})

test('returns true for NaN comparison', () => {
    expect(eq(NaN, NaN)).toBe(true);
  });

test('test with arrays, should return true', () => {
    const arr = [1, 2, 3];
    expect(eq(arr, arr)).toBe(true);
})

test('two numbers are equal, should return true', () => {
    expect(eq(1, 1)).toBe(true);
})

// in == equalization, javascript always converts parameters to same type automatically before comparing them
test('tests with string that seems to be number and a number, should return true', () => {
    expect(eq("5", 5)).toBe(true);
})

test('two numbers are not equal, should return false', () => {
    expect(eq(1, 2)).toBe(false);
})

test('two objects are not equal, return false', () => {
    expect(eq(object, other)).toBe(false);
    expect(eq({"a": 1}, {"a": 2})).toBe(false);
    expect(eq({"a": 1}, {"b": 1})).toBe(false);
})

test('test with two different arrays with same values, should return false', () => {
    expect(eq([1, 2, 3], [1, 2, 3])).toBe(false);
})

// Edge case testing

test('tests with big values', () => {
    expect(eq(10**6, 10**6)).toBe(true);
})

test('tests with infinity', () => {
    expect(eq(1, Infinity)).toBe(false);
    expect(eq(Infinity, Infinity)).toBe(true);
})

// Negative testing, this is hard to think of since there
// is no inputs that are not expected?




