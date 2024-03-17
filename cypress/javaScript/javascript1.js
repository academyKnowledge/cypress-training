/** 
 * there are two ways to write test cases 
 * 1- Describe - It 
 * 2- Cucumber 
*/
// describe  - it 
// BDD - Gherkin language - Cucumber Given , When , Then 

// functions in Javascript 

function myFirstFunction(p1,p2){
    return p1 + p2; 
}

console.log("hello")
console.log(myFirstFunction(5,2))

// arrow function ()=>{}

/** 
 * variables 
 * 1- let
 * 2- var 
 * 3- const
 */

let result = (p1,p2)=>{
    return p1 + p2; 
}
console.log(result(5,6))

let result2 = ()=> {
    return "Cypress";
}
console.log(result2())