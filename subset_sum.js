function subsetSum(sum, arr, curr, i=0) {
    if(curr === sum) {
        return 1;
    }
    if(i === arr.length) {
        return 0;
    }

    let aExp = subsetSum(sum, arr, curr, i+1);
    let bExp = subsetSum(sum, arr, curr + arr[i], i+1);
    return aExp + bExp;
}

console.log(subsetSum(8, [10,5,2,3,6], 0))
console.log(subsetSum(4, [1,2,3], 0))
console.log(subsetSum(37, [10,20,15], 0))
console.log(subsetSum(0, [10,20,15], 0))



