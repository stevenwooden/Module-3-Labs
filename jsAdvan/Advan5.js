let car = {
    make: "Porsche",
    model: "911",
    year: 1964,

    description() {
        console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
    }
};

let car2 = {...car, year: 2003}   
let car3 = {...car, model: 718 }

car.description();

setTimeout(car.description.bind(car),200);

setTimeout (() => car.description(),200);


