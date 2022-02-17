export function isIncreasingNumber(n) {
    if (n < 10) return false;
    let remaining = n;
    let prevDigit = 10;

    while (remaining > 0) {
        let lastDigit = remaining % 10;
        if (lastDigit >= prevDigit) return flase;
        prevDigit = lastDigit;
        remaining = Math.trunc(lastDigit / 10);
    }
    return true;
}
