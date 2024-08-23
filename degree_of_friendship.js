function friendDistance(friends, userA, userB) {
    // your code goes here
    const source = userA;
    const destination = userB;
    const Q = [[source, 0]];
    const V = new Set();
    V.add(source);
    while(Q.length > 0) {
        const [x, c] = Q.shift();
        
        if(friends[x][destination] === 1) {
            return c+1;
        }
        
        for(let i=0; i<friends[x].length; i++) {
            if(friends[x][i] === 1) {
                if(!V.has(i)){
                    Q.push([i, c+1]);
                    V.add(i);
                }
            }
        }
    }

    return -1;
}

// debug your code below
const friends = [[0, 1, 0, 0, 0], [1, 0, 1, 0, 0], [0, 1, 0, 1, 0], [0, 0, 1, 0, 1], [0, 0, 0, 1, 0]];

console.log(friendDistance(friends, 0, 4));