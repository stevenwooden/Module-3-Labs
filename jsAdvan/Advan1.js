function makeCounter(startFrom, incrementBy){
    // let currentCount = 0
    let currentCount = startFrom       
    return function() {
        let count = currentCount;
        currentCount += incrementBy; 
        return(count)
    };
}

let counter1 = makeCounter(10,3);

console.log(counter1())
console.log(counter1())
console.log(counter1())


let counter2 = makeCounter(7, 2);

console.log(counter2());
console.log(counter2());
console.log(counter2());