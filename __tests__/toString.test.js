import toSTring from "../src/toString";

//Positive testing

test('converts number to string correctly', () => {
    expect(toSTring(4.2)).toBe("4.2");
})
test('converts negative number to string correctly', () => {
    expect(toSTring(-4.2)).toBe("-4.2");
})
test('converts string to string correctly', () => {
    expect(toSTring("a")).toBe("a");
})
test('converts array of numbers correctly', () => {
    expect(toSTring([1, -1, 3])).toBe("1,-1,3");
})

// Edge case testing

test('converts Infinity to string correctly', () => {
    expect(toSTring(Infinity)).toBe("Infinity");
})

test('converts empty to string correctly', () => {
    expect(toSTring(null)).toBe("null");
    expect(toSTring(undefined)).toBe("undefined");
    expect(toSTring()).toBe("undefined");
})

//Negative testing

test('object as parameter returns [object Object]', () => {
    expect(toSTring({"1": 2})).toBe("[object Object]");
})

test('function as parameter returns "Function anonymous(){}"', () => {
    expect(toSTring(new Function())).toBe(`function anonymous(
) {

}`);
})
