import filter from "../src/filter";

const products = [
    {'name': "product1", "price": 240},
    {'name': "", "price": 220},
    {'name': "product3", "price": ""}
]

test('filtering returns the expected result', () => {
    expect(filter(products, ({name}) => name)).toStrictEqual([products[0], products[2]]);
})

