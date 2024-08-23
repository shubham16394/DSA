
function palindrome(str) {
    if(str === '' || str.length === 1) {
        return true;
    }
    else if(str[0] === str[str.length - 1]) {
        return true && palindrome(str.slice(1, str.length - 1));
    }
    else {
        return false;
    }
}

console.log(palindrome('palindrome'))