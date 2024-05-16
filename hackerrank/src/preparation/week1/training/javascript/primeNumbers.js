// Algorithm to find prime numbers

// Prime number: number which can be divided by 1 and itself
// 2, 3, 5, 7, 11, 13 etc

function isPrimeNumber(n) {
    let i;
    if (i == 1) {
        return false;
    }
    for(i = 2; i < n; i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}

function isPrimeNumberOptimized(n) {
    let i;
    if (i == 1) {
        return false;
    }
    for(i = 2; i*i <= n; i++) {     // 48 = 6 < sqrt(48) < 7 => dividers: 1,2,3,4,6,8,12,16,24,48 
        if (n % i == 0) {           // i <= sqrt(n) /^2      => i*i <= n
            return false;
        }
    }
    return true;
}

let j;

for(j = 2; j <= 100; j++) {
    if(isPrimeNumber(j) == true) {
        console.log(j);
    }
}

let primeNumber = 47;
console.log(isPrimeNumber(primeNumber));
