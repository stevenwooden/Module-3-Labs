// let twentyCents = 0.20;
// let tenCents = 0.10;
// let fixedTwenty = twentyCents.toFixed(2);  
// let fixedTen = tenCents.toFixed(2);


function currencyAddition(float1, float2){
    float1 = parseFloat(float1);
    float2 = parseFloat(float2);
    sum = float1 + float2;
    return sum.toFixed(2)   
}

function currencyOperation(float1,float2, operation){
    const num = parseFloat(float1);
    const num2 = parseFloat (float2);
    let result = operation;     
    switch (operation){
        case '+' :
            result = num + num2;
            break;
        case '-' :
            result = num - num2;
            break;
        case '*' :
            result = num * num2;
            break;
        case '/' :
            result = num / num2;
            break;
    }
    return result.toFixed(2)    
}

console.log(.3 == currencyAddition(0.1,0.2))
console.log(.3 == currencyOperation(0.1,0.2,'+'))
console.log(-.1 == currencyOperation(0.1,0.2,'-'))
console.log(.3 == currencyOperation(0.1,0.2,'*'))
console.log(.3 == currencyOperation(0.1,0.2,'/'))