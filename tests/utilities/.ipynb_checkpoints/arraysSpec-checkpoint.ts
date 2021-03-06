import arrays from '../../utilities/arrays';
import newArr from '../../index';

describe("testing arrays", () => {
    const numArr = [3, 4, 5, 6];
    const wordArr = ['cat', 'dog', 'rabbit', 'bird'];
    
    describe("testing arrays to contain stuff", () => {
        it('should make a new array containing dog', () => {
            expect(newArr(3, wordArr)).toContain('dog');
        });
        it('make a new array containing 3', () => {
            expect(newArr(3, wordArr)).toContain(3);
        }); 
    });
    
    describe("testing arrays to add containing numbers", () => {    
        it('should add numbers in array and be truthy', () => {
            expect(arrays.addArr(numArr)).toBeTruthy();
        });
        fit('should add numbers in array to be less than 19', () => {
            expect(arrays.addArr(numArr)).toBeLessThan(19);
        });
    });

    describe("testing arrays to concat each other", () => {
        it('should concatinate 2 arrays to not equal the first', () => {
            expect(arrays.concatArr(numArr, wordArr)).not.toEqual(numArr);
        });
        it('should concatinate 2 arrays to not equal the second', () => {
            expect(arrays.concatArr(numArr, wordArr)).not.toEqual(wordArr);
        });
    });

    describe("testing arrays to cut 3rd element (pos. 2)", () => {
        it('should contain 3 items except rabbit', () => {
            expect(arrays.cut3(wordArr)).toEqual(['cat', 'dog', 'bird']);
        });
        it('should not contain the third index rabbit', () => {
            expect(arrays.cut3(wordArr)).not.toContain('rabbit');
        });
    });

    describe("testing arrays largest number function", () => {
        it('should have 6 be largest number', () => {
            expect(arrays.lgNum(numArr)).toEqual(6);
        });
        it('should not have a large number and be falsy', () => {
            expect(arrays.lgNum(wordArr)).toBeFalsy();
        });
    });
    
});