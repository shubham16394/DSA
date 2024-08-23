function jos(n, k) {
    if(n === 1) {
        return 0;
    }
    return (jos(n-1, k) + k)%n;
}

console.log(jos(4, 3))
console.log(jos(5, 3))