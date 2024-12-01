import isEmpty from "../src/isEmpty";

// Positive testing

test('returns not empty array as false', () => {
    expect(isEmpty([1,2])).toBe(false);
})

test('returns not empty array of objects as false', () => {
    expect(isEmpty([{"name": "name1", value: "value1"}, 
        {"name": "name2", value: "value2"}])).toBe(false);
})

test('returns empty map objects as true', () => {
    expect(isEmpty(new Map())).toBe(true);
})

test('returns empty set objects as true', () => {
    expect(isEmpty(new Set())).toBe(true);
})

test('returns empty function as true', () => {
    expect(isEmpty(new Function())).toBe(true);
})

test('returns empty function as true', () => {
    expect(isEmpty(function myFunction(){})).toBe(true);
})



// Edge case testing

test('should return false for large arrays', () => {
    const largeArray = Array(1_000_000).fill(0); // array of million zeros
    expect(isEmpty(largeArray)).toBe(false);
  });

test('returns empty array as true', () => {
    expect(isEmpty([])).toBe(true);
})

// Negative testing (HOWEVER, THE TESTABLE COMPONENT ACTUALLY HANDLES THESE AS DEFAULT SO NOT NEGATIVE TESTING IN PRACTICE...)

test('returns empty objects as true', () => {
    expect(isEmpty({})).toBe(true);
})

test('returns not empty objects as false', () => {
    expect(isEmpty({1: 2})).toBe(false);
})



