class Solve {
    soln = {};
    graphColoring(graph, m, n) {
        // code here
        for (let i = 0; i < n; i++) {
            this.soln[i] = null;
        }
        
        return this.solve(0, m, graph) ? 1 : 0;
        
    }
    
    solve(i, m, graph) {
        if(i === graph.length){
            return true;
        }
        for(let x=1; x<=m; x++) {
            if(this.isSafe(i, x, graph)) {
                this.soln[i] = x;
                if(this.solve(i+1, m, graph)) return true;
            }
        }
        return false;
    }
    
    isSafe(i, c, graph) {
        for(let j=0; j<graph[i].length; j++) {
            if(graph[i][j] && this.soln[j] === c) {
                return false;
            }
        }
        return true;
    }
    
}

const g = [
    [ false, true, true, true ],
    [ true, false, true, false ],
    [ true, true, false, true ],
    [ true, false, true, false ]
  ]
const obj = new Solve();
console.log(obj.graphColoring(g, 3, 4))