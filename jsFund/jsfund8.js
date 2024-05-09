const sydney = {
    name: 'Sydney',
    population: 5_121_000,
    state: 'NSW',
    founded: '26 January 1788',
    timezone: 'Australia/Sydney',
}
const boston = {
    name: 'Boston',
    population: 680_000,
    state: 'Massachusetts',
    founded: '7 September 1630',
    timezone: 'Easetern Daylight Time',
}
function differentAreas(city){
for (let key in city) {
    console.log (key + ": " + city[key]);
}
}


differentAreas(sydney);
differentAreas(boston);