const assert = require('assert');
const { forEach} = require('../index');

let numbers;
beforeEach(() => {
    numbers = [1,2,3];
})

it('Should sum an array', () => {
    const numbers  = [1,2,3];

    let total = 0;
    forEach(numbers, (value) => {
        total += value;
    });

    assert.strictEqual(total, 6);
    numbers.push(3);
    numbers.push(3);
    numbers.push(3);
    numbers.push(3);
});

if('BeforeEAch is ran each time', () => {
    assert.strictEqual(numbers.length, 3)
});