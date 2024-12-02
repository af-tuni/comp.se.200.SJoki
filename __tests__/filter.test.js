import filter from "../src/filter";

const products = [
    {'name': "product1", "price": 240},
    {'name': "", "price": 220},
    {'name': "product3", "price": ""}
]

// Positive testing

test('filtering returns the expected values', () => {
    expect(filter(products, ({name}) => name)).toStrictEqual([products[0], products[2]]);
})

test('filtering returns empty array if parameter not found in the seached array', () => {
    expect(filter(products, ({notfound}) => notfound)).toStrictEqual([[]]);
})

test('filtering returns empty array if empty array is given', () => {
    expect(filter([], ({empty}) => empty)).toStrictEqual([[]]);
})

// Edge case testing

test('filtering works with big arrays', () => {
    const largeArray = Array(1_000_000).fill(0); // array of million zeros
    largeArray[10] = {'name': "product1", "price": 240}
    expect(filter(largeArray, ({name}) => name)).toStrictEqual([products[0]]);
})

// Negative testing

test('filtering returns empty array with no predicate function', () => {
    expect(filter([])).toStrictEqual([[]]);
})

test('filtering returns empty array with undefined array as parameter', () => {
    expect(filter(undefined, ({name}) => name)).toStrictEqual([[]]);
})
test('filtering returns empty array with no array as parameter', () => {
    expect(filter(({name}) => name)).toStrictEqual([[]]);
})
test('filtering returns empty array with no parameters', () => {
    expect(filter()).toStrictEqual([[]]);
})
test('filtering returns empty array with odd parameters', () => {
    expect(filter({}, ({name}) => "name")).toStrictEqual([[]]);
})