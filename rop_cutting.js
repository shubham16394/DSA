/**
 * Logic 1 
 * @param {*} n 
 * @param {*} a 
 * @param {*} b 
 * @param {*} c 
 * @returns 
 */

function cutRope(n, a, b, c) {
    if(n === 0) {
        return 0;
    }
    if(n < 0) {
        return NaN;
    }
    let aExp = 1 + cutRope(n-a, a, b, c);
    let bExp = 1 + cutRope(n-b, a, b, c);
    let cExp = 1 + cutRope(n-c, a, b, c);
    let max = [];
    if(!isNaN(aExp)){
        max.push(aExp);
    }
    if(!isNaN(bExp)){
        max.push(bExp);
    }
    if(!isNaN(cExp)){
        max.push(cExp);
    }
    return Math.max(...max);
}

function cutRopeEval(n, a, b, c) {
    const length = cutRope(n, a, b, c);
    if(isFinite(length)) {
        return length
    }
    else {
        return -1;
    }
}

console.log(cutRopeEval(5, 2, 5, 1))
console.log(cutRopeEval(23, 12, 9, 11))
console.log(cutRopeEval(5, 4, 2, 6))
console.log(cutRopeEval(9, 2, 2, 2))



function cutRope2(n, a, b, c) {
    if(n === 0) {
        return 0;
    }
    if(n < 0) {
        return -1;
    }

    let result = Math.max(cutRope2(n-a, a, b, c), cutRope2(n-b, a, b, c), cutRope2(n-c, a, b, c));
    if(result === -1) {
        return -1;
    }
    return result + 1;
}

console.log(cutRope2(5, 2, 5, 1))
console.log(cutRope2(23, 12, 9, 11))
console.log(cutRope2(5, 4, 2, 6))
console.log(cutRope2(9, 2, 2, 2))
