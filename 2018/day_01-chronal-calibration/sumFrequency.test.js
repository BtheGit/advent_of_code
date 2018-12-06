const sumFrequency = require('./sumFrequency.js');

describe("sumFrequency", () => {
    const examples = [
        {
            input: [1,1,1],
            expected: 3
        },
        {
            input: [1, -1, 1, -1, 2],
            expected: 2
        },
    ]
    it('should return a sum of all frequencies in a range', () => {
        examples.forEach(({input, expected}) => {
            expect(sumFrequency(input)).toEqual(expected)
        })
    })
})