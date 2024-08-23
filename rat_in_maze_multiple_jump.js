class Solution 
{
    //Function to find the minimum number of Hops required for the rat to 
    //reach from the source block to the destination block.
    solve(n, maze)
    {
        //your code here
        const soln = (() => {
        let arr = [];
            for(let i=0; i<n; i++) {
                arr.push(Array(n).fill(0));
            }
            return arr;
        })();
        const output = this.solution(0, 0, maze, n, soln);
        if(output) {
            let s = '';
            for(let i=0; i<n; i++) {
                for(let j=0; j<n; j++) {
                    s += soln[i][j] + ' '
                }
                s += '\n';
            }
            console.log(s)    
        }
        else {
            console.log('-1')
        }
    }
    
    solution(i, j, maze, n, soln) {
        if(i === n-1 && j === n-1) {
            soln[i][j] = 1;
            return true;
        }
        if(maze[i][j] === 0) {
            return false;
        }
        for(let x=1; x <= maze[i][j]; x++) {
            soln[i][j] = 1;
            if(i < n && j+x < n && this.solution(i, j+x, maze, n, soln)) {
                return true;
            }
            else if(i+x < n && j < n && this.solution(i+x, j, maze, n, soln)) {
                return true;
            }
            else {
                soln[i][j] = 0;
            }
        }
        return false;
    }
    
}

const obj = new Solution();
obj.solve(4, [ [ 2, 1, 0, 0 ], [ 2, 0, 0, 1 ], [ 0, 1, 0, 1 ], [ 0, 0, 0, 1 ] ])
obj.solve(4, [ [ 2, 1, 0, 0 ], [ 3, 0, 0, 1 ], [ 0, 1, 0, 1 ], [ 0, 0, 0, 1 ] ])