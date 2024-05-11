const animals = ['Tiger', 'Giraffe'];
animals.unshift('Koala', 'Panda');
animals.push('Lion', 'Elephant');
animals.sort();
function replaceMiddleAnimal(newValue){
    animals.splice(3, 0, newValue);
    return animals;
}

function findMatchingAnimals(beginsWith){
    beginsWith = beginsWith.toLowerCase()
    return animals.filter(animals => animals.toLowerCase().startsWith(beginsWith));
}

console.log(animals)
console.log(replaceMiddleAnimal('Gecko'))
console.log(findMatchingAnimals('g'))

