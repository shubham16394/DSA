// class Solution {

//     power(N, R) {
//         // code here
//         const v = this.revPower(N, R);
//         return v % (Math.pow(10, 9) +7);
//     }
    
//     revPower(n, r) {
//         if(r === 1) {
//             return n;
//         }
        
//         return n * this.revPower(n, r-1);
//     }
// }

class Solution {

    power(N, R) {
        // code here
        const v = this.revPower(N, R);
        // return v % (Math.pow(10, 9) +7);
        return v;
    }
    
    revPower(n, r) {
        if(r === 1) {
            return n;
        }
        
        let v = n * this.revPower(n, r-1);
        v = v % (Math.pow(10, 9) +7);
        return v
    }
}

const obj = new Solution();
console.log(obj.power(13, 31))
