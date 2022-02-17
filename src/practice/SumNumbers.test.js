import { calculateSum } from './SumNumbers';

// Tinh S(n) 1 + 2 + 3 ... + n
// function caculateS(n) {}
// n <= 0 || n > 0

describe('s(n) = 1 + 2 + 3 ... + n', () => {
    test('should return 0 when n <= 0', () => {
        expect(calculateSum(-1)).toBe(0);
        expect(calculateSum(0)).toBe(0);
    });

    test('should return sum when n >= 0', () => {
        expect(calculateSum(1)).toBe(1);
        expect(calculateSum(2)).toBe(3);
        expect(calculateSum(3)).toBe(6);
    });
});
