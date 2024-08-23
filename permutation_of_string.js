function permutationString(start, rem) {
    if(rem === '') {
        console.log(start);
        return;
    }

    for(let i=0; i<rem.length; i++) {
        let str = start+rem[i];
        let remStr = rem.slice(0,i)+rem.slice(i+1);
        // if (str.includes('AB')) {                      // Backtracked solution for generating strings which don't contain AB substring
        //     continue;
        // }
        if(isSafe(str)) {
            permutationString(str, remStr);
        }
    }

}

function isSafe(str) {
    return !str.includes('AB');
}

permutationString('', '')
console.log('/************************/')
permutationString('', 'A')
console.log('/************************/')
permutationString('', 'AB')
console.log('/************************/')
permutationString('', 'ABC')
// console.log('/************************/')
// permutationString('', 'ABCD')
// console.log('/************************/')
// permutationString('', 'ABCDE')