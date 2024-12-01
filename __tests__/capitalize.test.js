import capitalize from "../src/capitalize";

//Positive testing

test('capitalize string correctly', () => {
    expect(capitalize("PRODUCT")).toBe("Product");
    expect(capitalize("product")).toBe("Product");
    expect(capitalize("pRODUCT")).toBe("Product");
    expect(capitalize("pRODUCT pRoduct")).toBe("Product product");
})

test('capitalize array items correctly (first one with capital)', () => {
    expect(capitalize(["terve", "moro"])).toBe("Terve,moro");
})

test('capitalize number correctly (do nothing)', () => {
    expect(capitalize(1)).toBe("1");
})

test('capitalize string with special character as first character correctly (do nothing)', () => {
    expect(capitalize("!product")).toBe("!product");
})

test('capitalize single character string correctly', () => {
    expect(capitalize("a")).toBe("A");
})

test('capitalize with whitespace at the beginning (do nothing)', () => {
    expect(capitalize(" product")).toBe(" product");
})

test('capitalize string with uppercase already in first letter', () => {
    expect(capitalize("Product product")).toBe("Product product");
})

// Edge case testing

test('works with a large string', () => {
    const largeString = 'a'.repeat(1_000_000);
    expect(capitalize(largeString)).toBe('A' + 'a'.repeat(999_999));
})

test('capitalize empty as Undefined string', () => {
    expect(capitalize()).toBe("Undefined");
})

// Negative testing

test('capitalize object as [object object] string', () => {
    expect(capitalize({"1": 2})).toBe("[object object]");
})

test('capitalizing Function should return "Function anonymous(){}" string', () => {
    expect(capitalize(new Function())).toBe(`Function anonymous(
) {

}`);
})