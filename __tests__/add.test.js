import add from "../src/add";

test('sums positive numbers correctly', () => {
    expect(add(1,2)).toBe(3);
})
test('sums negative numbers correctly', () => {
    expect(add(-1,-3)).toBe(-4)
})
test('sums decimals correctly', () => {
    expect(add(1,1.5)).toBe(2.5)
})
test('sums string correctly', () => {
    expect(add("a","b")).toBe("ab")
})
test('when other number is missing should return the one that is given', () => {
    expect(add(1)).toBe(1)
})
test('undefined as other parameter should return the other that is given', () => {
    expect(add(undefined, 3)).toBe(3)
})
test('without any parameters should return zero', () => {
    expect(add()).toBe(0)
})
test('with big numbers should still work', () => {
    expect(add(10**6, 10**6)).toBe(10**6+10**6)
})
test('with infinity should return infinity', () => {
    expect(add(1, Infinity)).toBe(Infinity)
})
test('array in parameter should return NaN', () => {
    expect(add([1,2], 3)).toBe(NaN)
})


