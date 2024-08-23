const pathArr = [];
// const maze = [[1,0,0,0], [1,1,0,1], [0,1,0,0], [1,1,1,1]];
const maze = [[1,0,0,0], [1,1,0,1], [1,1,1,1], [1,1,1,1]];
const n = maze.length;
const m = maze[0].length;

// const soln = (function createZeroArray(n, m) {
//     return Array.from({ length: n }, () => Array(m).fill(0));
// })(n,m);
// console.log('soln', soln)

/**
 * Create all the Paths
 * @param {*} arr 
 * @param {*} i 
 * @param {*} j 
 * @returns 
 */
function ratInMaze(arr, i, j) {
    console.log(`${i}${j}`, arr[i][j]);

    pathArr.push(`${i}${j}`);

    if(i === n-1 && j === m-1) {
        return;
    }

    if(i<n && j+1<m && arr[i][j+1] !== 0) {
        ratInMaze(arr, i, j+1);
    }
    if(i+1<n && j<m && arr[i+1][j] !== 0) {
        ratInMaze(arr, i+1, j);
    }
}


function printPath(pathArr) {
    if(pathArr.length < 2) {
        console.log('No');
    }
    else {
        let output = '';
        for(let i=0; i<n; i++) {
            for(let j=0; j<m; j++) {
                const val = `${i}${j}`;
                if(pathArr.includes(val)) {
                    output += 1;
                }
                else {
                    output += 0;
                }
            }
            output += '\n';
        }
        console.log(output);
    }
}

// ratInMaze(maze, 0, 0)

// console.log('Path Arr', pathArr)

// printPath(pathArr);


/**
 * Backtracked solution check if path is available otherwise use other path
 * @param {*} arr 
 * @param {*} i 
 * @param {*} j 
 * @returns 
 */
function ratInMazeOptimized(arr, i, j) {
    console.log(`${i}${j}`, arr[i][j]);

    pathArr.push(`${i}${j}`);

    if(i === n-1 && j === m-1) {
        return true;
    }

    if(i<n && j+1<m && arr[i][j+1] !== 0 && ratInMazeOptimized(arr, i, j+1) === true) {
        return true;
    }
    else if(i+1<n && j<m && arr[i+1][j] !== 0 && ratInMazeOptimized(arr, i+1, j) === true) {
        return true;
    }
    else {
        pathArr.pop(`${i}${j}`);
        return false;
    }
}

ratInMazeOptimized(maze, 0, 0)

console.log('Path Arr', pathArr)

printPath(pathArr);



