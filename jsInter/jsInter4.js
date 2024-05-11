function camelCase(cssProp){
    const words = cssProp.split("-");
    const camelCased = []
    for (let i = 0; i < words.length; i ++){
        if(i === 0){
            camelCased.push(words[i]);
        } else {
            const word = words[i];
            const fLetter = word.charAt(0);
            const capFLetter = fLetter.toUpperCase();
            const restOfWord = word.slice(1);
            const capWord = capFLetter + restOfWord;
            camelCased.push(capWord);
        }
    }
    return camelCased.join("")
}

function camelCase(cssProp){
    const words = cssProp.split("-");
    const camelCased = []
    words.forEach((word,index)=>{
        const camelWord = index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1);
        camelCased.push(camelWord)
    })
    return camelCased.join("")
}

console.log(camelCase('margin-left'))
console.log(camelCase('background-image'))
console.log(camelCase('display'))