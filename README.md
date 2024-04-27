# Module-3-Labs
This contains my answers to the Module 3 Labs.

Answers to JS Fundamentals:
1. 
    console.log("" + 1 + 0) //10
    console.log("" - 1 + 0) //-1
    console.log(true + false) //1
    console.log(!true) //false
    console.log(6/"3") // 2
    console.log("2"*"3") // 6
    console.log(4+5+"px") // 9px
    console.log("$" + 4 + 5) // $45
    console.log("4"-2) // 2
    console.log("4px"-2) //NaN
    console.log(" -9 " + 5) // -9 5
    console.log(" -9 " - 5) // -14
    console.log(null + 1) // 1
    console.log(undefined + 1) //NaN
    console.log(undefined == null) //true
    console.log(undefined === null) //false
    console.log("/t /n" - 2) //NaN    

2.
    The incorrect answers are the addition variable and the lessThan2 variable. The addition variable is incorrect because it is concatenating the values instead of adding them together. The lessThan2 variable is incorrect because it shows the true for the value instead of false when 30 is greater than 4. I fixed both variables by using parseInt function to parse the string value to an intger value. This changes the strings to integers.