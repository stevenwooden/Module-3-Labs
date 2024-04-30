const westley = {
    name: 'Westley',
    numFingers: 5       
}
const rugen = {
    name: 'Count Rugen',
    numFingers: 6
}

const inigo = {
    firstName: 'Inigo',
    lastName: 'Montoya',
    greeting(person) {
        let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}.`;
        console.log(greeting + getCatchPhrase(person));   
    }
};
const getCatchPhrase = (person) => {
    if (person.numFingers <= 5) {return 'Nice to meet you';}
    else if (person.numFingers > 5) {return 'Hello. My name is Inigo Montoya. You killed my father. Prepare to die.';}
};

inigo.greeting(westley)
inigo.greeting(rugen)