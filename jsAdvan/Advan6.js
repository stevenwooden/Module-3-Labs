Function.prototype.delay = function(ms) {
    const func = this;
    return function(...args){
        setTimeout(() => func.apply(this,args),ms);
    };

};


function multiply(a,b,c,d){
    console.log( a*b*c*d);
}

multiply.delay(500)(5, 5, 5, 5);