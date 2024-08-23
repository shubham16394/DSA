const sudoku = [[1,0,3,4], [0,0,2,1], [0,1,4,2], [2,4,1,0]];
const n = sudoku.length;

function solve() {
    let i, j
    for(i=0; i<n; i++) {
        for(j=0; j<n; j++) {
            if(sudoku[i][j] === 0) {
                break;
            }
        }
        if(sudoku[i][j] === 0) {
            break;
        }
    }
    if(i === n && j === n) {
        return true;
    }

    for(let x=1; x<=n; x++) {
        if(isSafe(i,j,x)) {
            sudoku[i][j] = x;
            if(solve()) {
                return true;
            }
        }
        sudoku[i][j] = 0;
    }
    return false;
}

function isSafe(i, j, x) {
    for(let k=0; k<n; k++) {
        if(sudoku[i][k] === x || sudoku[k][j] === x) {
            return false;
        }
    }

    let s = Math.sqrt(n);
    let rs = i - i%s;
    let cs = j - j%s;
    for(let i=0; i<s; i++) {
        if(sudoku[i+rs][i+cs] === x) {
            return false;
        }
    }
    return true;
}

solve();
console.log(sudoku)