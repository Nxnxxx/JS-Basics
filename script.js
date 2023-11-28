console.log("hello world");

//weird scope - dont use
//var x = 5
//regular old variable
let y = 6;
//you can change the value
const z =7; // this is a constant cant be changed

// z=10 // this throws and erorr

console.log(y,z);
console.log(y+z);
console.log(y-z);
console.log(y*z);
console.log(y/z);
console.log(y%z); //this does division but returns remainder
console.log(y**z);

let fname="Nana ";
let lname="Brempong";

console.log(`${ fname } ${ lname }`);
console.log(`${ fname } ${ 5*9}`)
console.log(lname + 6)



let user = "Nana";
let pass = "foo";

if (user== "Nana") {
    console.log(`you are ` + user)
}


if (user == "Nana" && pass == "foo") {
    console.log(`you are ` + user + ' and your pass is ' + pass)

} else {
    console.error("DENIED")
}


const license = 18;
const jrop = 16
const rental = 25

let myAge = 15;

function checkAge(myAge) {
    console.log(`RUNNING ...`+myAge)
    if (myAge < license && myAge >= jrop) {
        console.log('you can have a jrOp License')
    }

    if (myAge >= license){
        console.log ('you can have a regular license');
    }

    if (myAge >=rental) {
        console.log(`you can rent a car`);
    }
        if (myAge < jrop){
            console.log("youre too young to drive")
        }

}


checkAge(25);
checkAge(18);
checkAge(12);
checkAge(16);