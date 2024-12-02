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

test('returns one integer as true', () => {
    expect(isEmpty(1)).toBe(true);
})

test('returns string as false', () => {
    expect(isEmpty('abc')).toBe(false);
})

test('returns null as true', () => {
    expect(isEmpty(null)).toBe(true);
})

test('returns true as true', () => {
    expect(isEmpty(true)).toBe(true);
})

test('returns empty argument as true', () => {
    expect(isEmpty(function() { return arguments }())).toBe(true);
})

test('returns empty buffer as true', () => {
    expect(isEmpty(Buffer.alloc(0))).toBe(true);
})

test('returns empty typed array as true', () => {
    expect(isEmpty(new Uint8Array)).toBe(true);
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



