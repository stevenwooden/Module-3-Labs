let teamSports = ['Hockey','Criket','Volleyball'];
// let moreSports = teamSports;
let moreSports = [...teamSports];
moreSports.unshift('Basketball', 'Soccor');
moreSports.push('Football','Tennis');
let dog1 = 'Bingo';
let dog2 = dog1;    
dog2 = 'Plucky';
let cat1 = {name: 'Fluffy', breed: 'Siberian'};
let cat2 = {...cat1, name: 'Rusty'};
// let cat2 = cat1;
// cat1.name = 'Rusty';

console.log(teamSports)
console.log(moreSports)
console.log(dog1)
console.log(cat1)
console.log(cat2)
