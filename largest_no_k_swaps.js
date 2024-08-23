class Solution 
{
    //Function to find the largest number after k swaps.
    findMaximumNum(str, k)
    {
        //your code here
       return this.swap(str, 1, k, 1)
        
    }

    setMaxValue(str1, str2) {
        for(let i=0; i<str1.length; i++) {
            if(str1[i] > str2[i]) {
                return str1;
            }
            else if(str1[i] < str2[i]) {
                return str2;
            }
        }
        return str1;
    }

    swap(str, x, k, s) {
        if(x >= str.length || s===k) {
            let maxNum = '0';
            let swapFlag = false;
            while(swapFlag === false) {
                const maxInd = this.getMaxIndexes(str,x);
                let swapFalseCount = 0;
                for(let max of maxInd) {
                    let {str: newStr, swapped} = this.swapDigits(str, x, max);
                    if(newStr) {
                        maxNum = this.setMaxValue(maxNum, newStr);
                    }
                    if(swapped === false)
                        swapFalseCount += 1;
                }
                if(swapFalseCount === maxInd.length) {
                    x += 1;
                    if(x >= str.length) {
                        swapFlag = true;
                    }
                    else {
                        swapFlag = false;
                    }
                }
                else {
                    swapFlag = true;
                }
            }
            return maxNum+'';
        }

        const maxIndArr = this.getMaxIndexes(str,x);
        const numArr = [];
        for(let max of maxIndArr) {
            let {str: newStr, swapped } = this.swapDigits(str, x, max);
            let num;
            if(swapped) {
                num = this.swap(newStr, x+1, k, s+1);
            }
            else {
                num = this.swap(newStr, x+1, k, s);
            }
            if(num > 0) {
                numArr.push(num);
            }
        }
        if(numArr.length === 0) {
            return str;
        }
        else {
            let maxNum = '0';
            for(let p=0; p<numArr.length; p++) {
                maxNum = this.setMaxValue(numArr[p], maxNum);
            }
            return maxNum;
        }
    }

    getMaxIndexes(str, x) {
        const strArr = str.split('').map(x => parseInt(x));
        let max = strArr.length - 1;
        let maxPointer = strArr.length - 2;
        let maxIndArr = [];
        while(maxPointer > x-1) {
            if(strArr[maxPointer] === strArr[max]) {
                if(max === strArr.length - 1) {
                    maxIndArr.push(strArr.length - 1);
                }
                max = maxPointer;
                maxIndArr.push(maxPointer);
            }
            else if(strArr[maxPointer] > strArr[max]) {
                max = maxPointer;
                maxIndArr = [maxPointer];
            }
            maxPointer -= 1;
        }
        if(maxIndArr.length === 0) {
            maxIndArr = [max];
        }
        return maxIndArr;
    }

    swapDigits(str, i, max) {
        let strArr = str.split('').map(x => parseInt(x));
        let x=i-1; 
        let swapped = false;
        for(x; x < max; x++) {
            if(strArr[max] > strArr[x]) {
                let tmp = strArr[x];
                strArr[x] = strArr[max];
                strArr[max] = tmp;
                swapped = true;
                break;
            }    
        }
        return {str: strArr.join(''), swapped};
    }

}

const obj = new Solution();
console.log(obj.findMaximumNum('3435335', 3))
console.log(obj.findMaximumNum('1234567', 4))
console.log(obj.findMaximumNum('4551711527', 3)) // 7755511124 7551411527 7751411525  
console.log(obj.findMaximumNum('61892795431', 4)) // 99876215431 91892765431 99812765431 99872165431 99876125431 
console.log(obj.findMaximumNum('087783', 3))
console.log(obj.findMaximumNum('40948', 4))
console.log(obj.findMaximumNum('9897228289', 2))
console.log(obj.findMaximumNum('4867504573120052493', 3)) // 9877604553120052443 my o/p - 9877604553120053000




