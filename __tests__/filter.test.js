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