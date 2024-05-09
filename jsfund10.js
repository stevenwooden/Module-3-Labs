function Person(name, age) {
    this.name = name;
    this.age = age;
    this.canDrive = () => this.age >=16;
}
class PersonClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
        canDrive() {
            return this.age >=16;
        }
    }


let people1 = new Person ('Steven Wooden', 33)
let people2 = new Person ('Emilio Marmol', 44)
let people3 = new PersonClass('Tanisha Johnson', 14)

// console.log(people1)
console.log(people1.canDrive())
// console.log(people2)
console.log(people2.canDrive()) 
// console.log(people3)
console.log(people3.canDrive())
