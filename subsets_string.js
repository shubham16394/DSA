let curr = '';
function subsets(str, curr, i=0) {

    if(i === str.length) {
        console.log(curr);
        return;
    }

    subsets(str, curr, i+1);
    subsets(str, curr+str[i], i+1);
}

subsets('abc', '');