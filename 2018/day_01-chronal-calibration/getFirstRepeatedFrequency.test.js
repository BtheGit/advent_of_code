const getFirstRepeatedFrequency = require('./getFirstRepeatedFrequency.js');

describe("getFirstRepeatedFrequency", () => {
    it('should return the first repeated calculated frequency', () => {
        const input = [1, -1]
        const expected = 0;
        expect(getFirstRepeatedFrequency(input)).toEqual(expected);
    })
})