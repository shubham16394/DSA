class Solution 
{
    //Function to find out the number of ways we can place a black and a 
    //white Knight on this chessboard such that they cannot attack each other.
    numOfWays(n, m)
    {
        //your code here
        let total = 0;
        for(let i=0; i<n; i++) {
            for(let j=0; j<m; j++) {
                let v = this.count(i,j,n,m);
                total += v;
            }
        }
        return total % (Math.pow(10,9) + 7);
    }

    count(i, j, n, m) {
        let x = n*m - 1;
        const list = [[i-2, j+1], [i-1, j+2], [i+1, j+2], [i+2, j+1], [i+2, j-1], [i+1, j-2], [i-1, j-2], [i-2, j-1]];
        for(let k of list) {
            if(k[0] < n && k[0] >= 0 && k[1] < m && k[1] >= 0) {
                x -= 1;
            }
        }
        return x;
    }
}

const obj = new Solution();
console.log(obj.numOfWays(2,2))
console.log(obj.numOfWays(2,3))
console.log(obj.numOfWays(419,134))



