// S(n) = (n * (n+1) )/ 2
export function calculateSum(n) {
    if (n <= 0) return 0;
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

function calculateSum2(n) {
    if (n <= 0) return 0;
    let sum = 0;
    return (sum = (n * (n + 1)) / 2);
}

console.log(calculateSum2(10));
