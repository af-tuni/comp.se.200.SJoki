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