function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}
function Student(name, age, gender, cohort) {
    Person.call(this, name, age, gender);
    this.cohort = cohort;
}

Student.prototype.toString = function() {
    return `Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}, Cohort: ${this.cohort}`
}

Person.prototype.toString = function(){
    return `Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}`
}
const person1 = new Person('James Brown', 73, 'male')
const person2 = new Person('Nina Simone', 52, 'female')
const person3 = new Person('Donna Summer', 63, 'female')

const student1 = new Student('Rick Ross', 22, 'male', 'first')
const student2 = new Student('Diana Ross', 18, 'female','second')

console.log('person1: '+ person1)
console.log('person2: '+ person2)
console.log('perosn3: ' + person3)
console.log('student1: '+student1)
console.log('student2: '+student2)