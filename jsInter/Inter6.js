


const colors = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow'];
const testScores = [55,84,97,63,55,32,84,91,55,43];
const names = ['Steven', 'Emilio', 'Tanisha', 'Kelvin', 'Roxana', 'Lauren', 'Steven', 'Kelvin', 'Emilio'];

function unique(duplicatesArray){
    return duplicatesArray.filter((value, index) => duplicatesArray.indexOf(value) === index);
    
}

console.log(unique(colors))
console.log(unique(testScores))
console.log(unique(names))


// var arr = ["banana",
// "apple",
// "orange",
// "Lemon",
// "apple", "Lemon" ];
// function removeDuplicates(data) 
// {return data.filter((value, index) => data.indexOf(value) === index);}
// console. log(removeDuplicates(arr));
// // ["banana", "apple", "orange", "Lemon"]