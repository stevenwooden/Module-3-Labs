
function ucFirstLetters(capital){
    const words = capital.split(" ");// splits the string into seperate words
    for( let i = 0; i < words.length; i++){
        words[i] = words[i].charAt(0).toUpperCase() + words[i].substr(1);
    } // loops the words variable to capitalize each first letter of every word
    return words.join(" ");// joins the string together
}
// Testing with different strings
console.log(ucFirstLetters("los angeles"))
console.log(ucFirstLetters("el salvador"))
console.log(ucFirstLetters("san diego"))