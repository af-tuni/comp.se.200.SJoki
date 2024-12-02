import toNumber from "../src/toNumber";

//Positive testing

test('converts string to number correctly', () => {
    expect(toNumber("4.2")).toBe(4.2);
})
test('converts octal string to number correctly', () => {
    expect(toNumber("0o52")).toBe(42);
})
test('converts binary string to number correctly', () => {
    expect(toNumber("0b101010")).toBe(42);
})
test('converts string with negative number to number correctly', () => {
    expect(toNumber("-4.2")).toBe(-4.2);
})
test('converts number to number correctly', () => {
    expect(toNumber(4.2)).toBe(4.2);
})
test('converts negative number to number correctly', () => {
    expect(toNumber(-4.2)).toBe(-4.2);
})


//Edge case testing

test('converts Infinity to Infinity correctly', () => {
    expect(toNumber(Infinity)).toBe(Infinity);
})

//Negative testing

test('array as parameter returns NaN', () => {
    expect(toNumber([1,2])).toBe(NaN);
})

test('object as parameter returns NaN', () => {
    expect(toNumber({"1": 2})).toBe(NaN);
})

test('function as parameter returns NaN', () => {
    expect(toNumber(new Function())).toBe(NaN);
})
