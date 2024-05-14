let fibo;

function printFibonacci(limit){
    let num1 = 0
    let num2 = 1
    let count = 0
    
    console.log(num1);
    count++;
    if(limit >1) {
    console.log(num2);
    count++;
    }

    fibo = setInterval(() => { 
        
        if (count >= limit){
            clearInterval(fibo);
            return;
        }
        const next = num1 + num2;
        console.log(next);

        num1 = num2;
        num2 = next; 
        count++;

    }, 1000)

    
}
function printFibonacciTimeout(){
    setTimeout ( () => clearInterval(fibo), 10 * 1000)
}
printFibonacci(10);
printFibonacciTimeout();