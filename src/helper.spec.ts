import { add } from './helpers.js';

describe('Given function add', () => {
    describe('When paramenters are 2, 3', () => {
        test('should return 5', () => {
            //arrange
            const expectedResult = 5;
            //act
            const result = add(2, 3);
            //assert
            expect(result).toBe(expectedResult);
        });
    });
});
