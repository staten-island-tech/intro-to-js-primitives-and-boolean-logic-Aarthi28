/* \let string = "I am a string";
let sentence = "Hello Angel " + "and Vicky";
let combine = "string + sentence"; */

/* let student= "Sandra";
let student2= "Gia";
let courseName= "AP CSP";
let teacherName= "Whalen";
let sentence= student + " and " +student2 + " are taking " + courseName + " with " + teacherName;

let betterSentence = `${student} and ${student2} are taking ${courseName} with ${teacherName} next year`;
 */

 //Numbers and Integers
/*  let year= 2020;
 let nextYear= year+1;
 let past= year/2;
 let future= year*2; */

 //Booleans
 //let trueStatement= false;
 
 //Null and Undefined
 //let richard;

 //Boolean Logic or if/else
 //let age= 18;
 //let baoSquared= "Bao Bao";
 //console.log(baoSquared === "bao Bao");
 //console.log(age === "17");

/* let age=45;
if(age <18){
    console.log("You are a child");
} else if(age == 18){
    console.log("Happy Birthday")
} else{
    console.log("You are over 18")
} */

//red,green,yellow light
/* let color="red";

if(color === "red"){
    console.log("stop");
} else if(color === "green"){
    console.log("go");
} else{
    console.log("wait");
}  */

//kristy and bao bao
/* let kristyIntolerant= true;
let baoBaoIntolerant= true;

if (kristyIntolerant === true && baoBaoIntolerant === true){
    console.log("almond milk");
} else if (kristyIntolerant === true || baoBaoIntolerant === true){
    console.log("both milks");
} else {
    console.log("regular milk");
} */

/* let temp=70;
if (temp < 68){
    console.log("cold");
} else if (temp >= 68 && temp<= 72){
    console.log("perfect");
} else if (temp > 72 && temp <= 76){
    console.log("warm");
} else {
    console.log("hot");
} */
//////////////////////////////////////////////////////////////////

/* function test(){
    console.log("I'm a function");
}
test(); */

/* const add = function(x,y){
    return x + y; //return ends the function
};

console.log(add(100,20));

const name = "Richard"; //cannot redefine const */

/* const hello = function(){
    console.log("Hello");
};

const bye = function(){
    console.log("Bye");
};

const hiBye = function(){
    hello();
    bye();
    hello();
    bye();
};

hiBye(); */

/* const name = "Thurushi"; //global variable or global space

function displayName() {
    const name = "Kelly"; //local or function scope
    alert(name);
    function sun(){
        const name2 = "Jacob"; //outer function doesn't have access to inner function, can't call in outer function
        console.log(name); //inner function has access to outer function
    }
    return sun();
}
displayName(); */

//closure
/* function displayName() {
    const name = "Kelly"; //local or function scope

    function sun(){
        console.log(name); //inner function has access to outer function
    }
    return sun;
}
const myFunc = displayName();
myFunc(); */

//Arrays
/* const names = ["Aarthi", "Vicky", "Vincent", "Doyle", "Kelly"];
//names.push("Karen");
names.forEach(name => console.log(name)); */

//spread operator
/* const numbers = [1,2,3,4,5,6];
const add = function(x,y,z,a,b,c){
    return x+y+z+a+b+c;
}
console.log(add(...numbers)); */

let students = ["Riya", "Omor", "Alan", "Jiayu", "Michael", "Lisa", "Richard"];

//"filter" out all students whose names contain <5 characters
const newStudents = students.filter(student => student.length<5);
console.log(newStudents);

// "includes" junshen
console.log(students.includes("Junshen"));

//Alan or Savva included in "some"-->true or false
console.log(students.some(student => student === "Alan" || student === "Savva"));
