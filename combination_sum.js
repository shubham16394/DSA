// class Solution {
    
//     combinationSum(A, B)
//     {
//         //your code here
//         A = A.sort((a,b) => a-b);
//         A = Array.from(new Set(A));
//         const mainArr = [];
//         let sumArr = [];
//         function getCombination(n, sum) {
//             if(sum === B) {
//                 console.log(sumArr, n)
//                 uniqueSortPush([...sumArr, n].sort((a,b) => a-b));
//             }
//             if(n !== 0) {
//                 sumArr.push(n);
//             }
//             if(isSafe(sum)) {
//                 for(let e of A) {
//                     if(getCombination(e, e+sum) === true) {
//                         return true;
//                     }
//                     sumArr.pop();
//                 }
//             }
//             return false;
//         }

//         function isSafe(sum) {
//             if(sum <= B) {
//                 return true;
//             }
//             else {
//                 return false;
//             }
//         }

//         function uniqueSortPush(valArr) {
//            const newMainArr = mainArr.map(a => {return a.reduce((preVal, nextVal) => {return preVal+nextVal}, '')});
//            const val = valArr.reduce((p,n) => {return p+n}, '');
//            if(!newMainArr.includes(val)) {
//                 mainArr.push(valArr);
//            }
//         }
//         getCombination(0, 0);
//         return mainArr;
//     }    
// }

// const obj = new Solution();
// console.log(obj.combinationSum([7,2,6,5], 16));


class Solution {

    combinationSum(A, B) {
        let index = 0;
        let sum = 0;
        let ans = [];
        let candidate = [];
        A = A.sort((a,b) => a-b);
        A = Array.from(new Set(A));
        function solve(index, A, candidate, sum, B) {
            if(sum === B) {
                ans.push(candidate);
                return;
            }
            if(sum > B || index >= A.length) {
                return;
            }
            if(sum < B) {
                solve(index, A, [...candidate, A[index]], sum+A[index], B);
                solve(index+1, A, candidate, sum, B);
            }
        }

        solve(index, A, candidate, sum, B);
        return ans;
    }
}

const obj = new Solution();
console.log(obj.combinationSum([7,2,6,5], 16));
