import { isIncreasingNumber } from './isIncreasingNumber';

// Kiem tra n co phai la so tang dan
// n < 10
// 0 < n < 10000000

describe('IncreasingNumber', () => {
    test('should return false when n < 10', () => {
        Array.from({ length: 10 }, (x, idx) => idx).forEach((x) => {
            expect(isIncreasingNumber(x)).toBe(false);
        });
    });

    test('should return true when n is an increasing number', () => {
        [12, 123, 1234, 34678].forEach((x) => {
            expect(isIncreasingNumber(x)).toBe(true);
        });
    });

    test('should return false when n is not an increasing number', () => {
        [11, 222, 3333, 44444, 555555, 6666666, 21].forEach((x) => {
            expect(isIncreasingNumber(x)).toBe(true);
        });
    });
});
