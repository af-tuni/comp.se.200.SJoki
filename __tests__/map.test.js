import map from "../src/map";

//Positive testing

const initialPrizes = [12,14,20];

//mock function to convert initial prizes with -50% sale
const saleFunction = initials => (
    initials * 0.5
)

test('converts prices with sale correctly', () => {
    expect(map(initialPrizes, saleFunction)).toStrictEqual([6,7,10]);
})

test('converts string results NaN', () => {
    expect(map("a", saleFunction)).toStrictEqual([NaN]);
})


//Edge case testing

test('converts prices with empty array', () => {
    expect(map([], saleFunction)).toStrictEqual([]);
})

test('converts prices with big array', () => {

    const largeArray = Array(1_00_000).fill(1); // array of 100k ones
    expect(map(largeArray, saleFunction)).toStrictEqual(Array(1_00_000).fill(0.5));
})

//Negative testing

test('converts prices with undefined array should return an empty array', () => {
    expect(map(undefined, saleFunction)).toStrictEqual([]);
})

test('convert prices with no function should not result in error', () => {
    expect(map(initialPrizes)).toStrictEqual([]);
})
