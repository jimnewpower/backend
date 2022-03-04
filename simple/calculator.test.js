const calculator = require('./calculator');

test('string with a single number should result in the number itself', () => {
    expect(calculator.add('1')).toBe(1);
})

test('string \'2.2\' sum should result in 4', () => {
    expect(calculator.add('2.2')).toBe(4);
})

test('string \'1.2.3.4\' sum should result in 10', () => {
    expect(calculator.add('1.2.3.4')).toBe(10);
})