// if else statement
function truncate(str, max) {
    if( str.length > max){
        return str.substr(0, max) + '...';
    }
    else {
        return str;
    }
}
// conditional operator
function truncate(str,max) {
    return str.length > max ? str.substr(0,max) + '...' : str
}
console.log(truncate('This text will be truncated if it is too long', 25))
console.log(truncate('This text will be truncated if it is too long', 80))