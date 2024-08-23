// class Solution {
    
//     /**
//      * @param {number[][]} grid
//      * @returns {boolean}
//     */
//     SolveSudoku(grid)
//     {
//         //your code
//         let i,j;
//         const n = grid.length;
//         for(i=0; i<n; i++) {
//             for(j=0; j<n; j++) {
//                 if(grid[i][j] === 0) {
//                     break;
//                 }
//             }  
//             if(grid[i][j] === 0) {
//                 break;
//             }      
//         }
        
//         if(i === n && j === n) {
//             return true;
//         }
        
//         for(let x=1; x<=n; x++) {
//             if(this.isSafe(i, j, x, grid)) {
//                 grid[i][j] = x;
//                 if(this.SolveSudoku(grid)) {
//                     return true;
//                 }
//             }``
//             grid[i][j] = 0;
//         }
//         return false;
//     }
    
//     isSafe(i,j,x,grid) {
//         const n = grid.length;
//         for(let k=0; k<n; k++) {
//             if(grid[i][k] === x || grid[k][j] === x) {
//                 return false;
//             }
//         }
        
//         let s = Math.sqrt(n);
//         let rs = i - i%s;
//         let cs = j - j%s;
//         for(let i=0; i<s; i++) {
//             if(grid[i+rs][i+cs] === x) {
//                 return false;
//             }
//         }
//         return true;
//     }
    
    
//     /**
//      * @param {number[][]} grid
//     */
    
//     printGrid(grid)
//     {
//         //your code here
//         const n = grid.length;
//         let str = '';
//         for(let i=0; i<n; i++) {
//             for(let j=0; j<n; j++) {
//                 str += grid[i][j] + ' ';
//             }
//             str = str.trim();
//             str += '\n';
//         }
//         str = str.trim();
//         console.log(str)
//     }

// }


class Solution {
    
    SolveSudoku(grid) {
        const emptyCell = this.findEmptyCell(grid);
        if (!emptyCell) {
            return true; // No empty cells left, puzzle is solved
        }
        
        const [i, j] = emptyCell;

        for (let num = 1; num <= 9; num++) {
            if (this.isSafe(i, j, num, grid)) {
                grid[i][j] = num;

                if (this.SolveSudoku(grid)) {
                    return true; // Puzzle solved
                }

                grid[i][j] = 0; // Backtrack
            }
        }

        return false; // Trigger backtracking
    }
    
    findEmptyCell(grid) {
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                if (grid[i][j] === 0) {
                    return [i, j];
                }
            }
        }
        return null;
    }

    isSafe(i, j, num, grid) {
        for (let k = 0; k < 9; k++) {
            if (grid[i][k] === num || grid[k][j] === num) {
                return false;
            }
        }
        
        const boxRowStart = i - i % 3;
        const boxColStart = j - j % 3;
        for (let r = 0; r < 3; r++) {
            for (let c = 0; c < 3; c++) {
                if (grid[r + boxRowStart][c + boxColStart] === num) {
                    return false;
                }
            }
        }
        return true;
    }
    
    printGrid(grid) {
        let n = grid.length;
        for(let i=0; i<n; i++) {
            let str = '';
            for(let j=0; j<n; j++) {
                str += grid[i][j] + ' ';
            }
            console.log(str.trim());
        }
    }
}
const grid = [
    [
      3, 0, 6, 5, 0,
      8, 4, 0, 0
    ],
    [
      5, 2, 0, 0, 0,
      0, 0, 0, 0
    ],
    [
      0, 8, 7, 0, 0,
      0, 0, 3, 1
    ],
    [
      0, 0, 3, 0, 1,
      0, 0, 8, 0
    ],
    [
      9, 0, 0, 8, 6,
      3, 0, 0, 5
    ],
    [
      0, 5, 0, 0, 9,
      0, 6, 0, 0
    ],
    [
      1, 3, 0, 0, 0,
      0, 2, 5, 0
    ],
    [
      0, 0, 0, 0, 0,
      0, 0, 7, 4
    ],
    [
      0, 0, 5, 2, 0,
      6, 3, 0, 0
    ]
  ]
const obj = new Solution();
console.log(obj.SolveSudoku(grid));

const newGrid = [
    [
      3, 1, 6, 5, 7,
      8, 4, 9, 2
    ],
    [
      5, 2, 9, 1, 3,
      4, 7, 6, 8
    ],
    [
      4, 8, 7, 6, 2,
      9, 5, 3, 1
    ],
    [
      2, 6, 3, 4, 1,
      5, 9, 8, 7
    ],
    [
      9, 7, 4, 8, 6,
      3, 1, 2, 5
    ],
    [
      8, 5, 1, 7, 9,
      2, 6, 4, 3
    ],
    [
      1, 3, 8, 9, 4,
      7, 2, 5, 6
    ],
    [
      6, 9, 2, 3, 5,
      1, 8, 7, 4
    ],
    [
      7, 4, 5, 2, 8,
      6, 3, 1, 9
    ]
  ]

  obj.printGrid(newGrid)