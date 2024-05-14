const today = new Date();
console.log('Current time is ' + today.toLocaleTimeString())

console.log(today.getHours() + ' hours have passed so far today')

const hours = today.getHours();
const min = today.getMinutes();

function totalMin(){
return hours * 60 + min;
}
console.log(totalMin() + ' minutes have passed so far today')

const sec = today.getSeconds();

function totalSec(){   
return hours * 3600 + min * 60 + sec;
}
console.log(totalSec() + ' seconds have passed so far today')



function myBigAge(){

    const day = 27 - today.getDate();
    const month = 4 - today.getMonth();
    const year = today.getFullYear() - 1990;
    return [day, month, year];
}
const [day,month,year] = myBigAge();

console.log(`I am ${year} years, ${month} month/s and ${day} day/s old` )

function daysInBetween(date1, date2){
    const day = 1000 * 60 * 60 * 24;
    const givenDate = new Date(date1)
    const givenDate2 = new Date(date2)
    const entry1 = Date.UTC(givenDate.getFullYear(), givenDate.getMonth(), givenDate.getDate());
    const entry2 = Date.UTC(givenDate2.getFullYear(), givenDate2.getMonth(), givenDate2.getDate())

    const difference = Math.floor((entry1-entry2)/ day) ;
    return `${date1} days and ${date2} days have a difference of ${difference} days.`;

}
console.log(daysInBetween('2024-05-01', '2024-04-22'))