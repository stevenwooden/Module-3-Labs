let salaries = { 
    "Timothy" : 35000,
    "David" : 25000, 
    "Mary" : 55000, 
    "Christina" : 75000, 
    "James" : 43000,
    };

function sumSalaries(salaries){
    let sum = 0; 

    const salariesArr = Object.values(salaries)
    salariesArr.forEach(salary => sum += salary)
    return sum;
}
console.log(`Sum of Salaries: $${sumSalaries(salaries)}`)

function topEarner(salaries){
    let topSalary= 0;
    let topEarner="";
    for(amnt in salaries)
        {if (topSalary < salaries[amnt]){
            topSalary = salaries [amnt];
            topEarner = names;
        }}
        return topEarner;
}
console.log(`Top Earner: $${topEarner(salaries)}`)