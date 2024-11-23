import isEmpty from "../src/isEmpty";

//Only couple of tests because in our case we only check that if 
//array is not empty and not other types of data

test('returns not empty array as false', () => {
    expect(isEmpty([1,2])).toBe(false);
})

test('returns not empty array of objects as false', () => {
    expect(isEmpty([{"name": "name1", value: "value1"}, 
        {"name": "name2", value: "value2"}])).toBe(false);
})

test('returns empty array as true', () => {
    expect(isEmpty([])).toBe(true);
})
