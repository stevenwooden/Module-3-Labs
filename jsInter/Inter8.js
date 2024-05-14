const phoneBookABC = new Map()
phoneBookABC.set('Annabelle', '0412312343')
phoneBookABC.set('Barry', '0433221117')
phoneBookABC.set('Caroline', '0455221182')

phoneBookABC.set('Caroline','9898989')

// console.log(phoneBookABC)

const phoneBookDEF = new Map([
    ['David', '2626262'],
    ['Ethan', '3434343'],
    ['Francis', '5656565']
])

function printPhoneBook(contacts){
    const entries = [];
    for (let[names,phoneNumbers] of contacts){
        entries.push([names,phoneNumbers]);
    }
    return entries;
}
const combinedPhoneBook = phoneBook(phoneBookABC,phoneBookDEF)
function phoneBook(pb1,pb2){
    const combinedPhoneBook = new Map ([...pb1,...pb2]);
    return combinedPhoneBook;  
}

console.log(printPhoneBook(phoneBookABC));
console.log(printPhoneBook(phoneBookDEF));
console.log(printPhoneBook(combinedPhoneBook))