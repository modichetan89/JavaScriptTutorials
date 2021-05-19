console.log('tut3')
//variables in JS
//var, let, const -variable declaration using keywords

//var we are not using in modern javascript. Its scope is in all script
var city = `Bangalore`  //use `` if you are gonna use "" or '' inside text.
console.log(city);
//var channel = 'Code with Harry' //declaration and assignment
var channel;  //variable declaration
//channel = 'test'; //variable initialization
var num = 12
console.log(city, channel, num);

/*Rules for creating javascript variables
1. cannot start with number
2. can start with letter, _, $
3. case sensitive
4. $ mostly used with jquery variables and _ mostly used for private variable
*/

//use const only when we do not want anyone to change value of variable
const owner_name = 'Chetan';
console.log(owner_name)

const owner_name1 = 'Chetan' 
//owner_name1 = 'Modi'; //assignment to constant variable is not allowed.
console.log(owner_name1) 

//let scope is at block level
{   
    console.log('Checking scope of let and var')
    let city = 'Delhi';
    console.log(city);
    city = 'Mumbai';
    console.log(city); //take value of city from block {}, since let have scope with in block
}
console.log(city) //it will take value from 'var' which have global scope


//can we add value inside array of const type - yes
const arr1 = [12,14,16,18];
arr1.push(20);
console.log(arr1);
//but we cannot redeclare the same array
arr1 = [1,2,3,4,5] //assignment to constant variable error

/*Most common programming case types
1. camelCase
2. kebab-case
3. snake_case
4. PascalCase
If using camelcase then we can type document.getElementByID to document.gEBI it will understand this.
*/
