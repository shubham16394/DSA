
const n = 5;
const soln = (() => {
    return Array.from({length: n}, () => Array(n).fill(0));
})(n);


function nQueens(n) {
    if(solveRec(0) === false) {
        return false;
    }
    else {
        console.log(soln);
        return true;
    }
}

function solveRec(col) {
    if(col === n) {
        return true;
    }
    for(let i=0; i<n; i++) {
        if(isSafe(i, col)) {
            soln[i][col] = 1;
            if(solveRec(col+1) === true) {
                return true;
            }
            soln[i][col] = 0;
        }
    }
    return false;
}

function isSafe(row, col) {
    for(let i=0; i<col; i++) {
        if(soln[row][i] === 1) {
            return false;
        }
    }

    for(let i=row, j=col; i>=0 && j>=0; i--, j--) {
        if(soln[i][j] === 1) {
            return false;
        }
    }

    for(let i=row, j=col; i<n && j>=0; i++, j--) {
        if(soln[i][j] === 1) {
            return false;
        }
    }

    return true;
}

console.log(nQueens(n));


