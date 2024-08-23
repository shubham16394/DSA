class Solution {
    
    mainArr = [];
    
    AllSubsets(arr, n)
    {
        //your code here
        arr = arr.sort((a,b) => a-b)
        this.subsets(arr, n, [], 0);
        this.mainArr = this.mainArr.sort(this.sortLexical)
        // console.log(this.mainArr);
        return this.mainArr;
        
    }
    
    subsets(arr, n, setArr, i) {
        if(i === n) {
            this.safePush(this.mainArr, setArr)
            return;
        }
        
        this.subsets(arr, n, setArr, i+1);
        this.subsets(arr, n, setArr.concat([arr[i]]), i+1);
    }
    
    sortLexical(a, b) {
        let x;
        if(a.length > b.length) {
            x = b;
        }
        else {
            x = a;
        }
       for(let i=0; i < x.length; i++) {
            if(a[i] > b[i]) {
                return 1;
            }
            else if(a[i] < b[i]) {
                return -1;
            }
       } 
    }
    
    safePush(arr, val) {
        for(let v of arr) {
            if(v.length === val.length) {
                let c = 0;
                for(let i=0; i<val.length; i++) {
                    if(val[i] === v[i]){
                        c += 1;
                    }
                    else {
                        break;
                    }
                }
                if(c === val.length) {
                    c = 0;
                    return;
                }
            }
        }
        arr.push(val);
        return;
    }
}

const obj = new Solution();
// console.log(obj.AllSubsets([2,1,2], 3))
console.log(obj.AllSubsets([1,2,3,4], 4))