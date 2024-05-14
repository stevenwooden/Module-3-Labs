
function printMe(msg){
    console.log('printing debounced message', msg)
}

function debounce(func,ms) {
    let timeOut;
    
    return function(...args){
        clearTimeout(timeOut);
        timeOut = setTimeout(() => {
            func(...args);
        }, ms); 
    }

}

const debouncePrintMe = debounce(printMe, 1000);

setTimeout(() => debouncePrintMe('Hello'), 100 );
setTimeout(() => debouncePrintMe('Crazy'), 200);
setTimeout(() => debouncePrintMe('World'), 300);