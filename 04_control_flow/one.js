//  Array 
const isUserLoggedIn = true;
if(2=="2"){
    console.log("executed only number not data type");  // data types check krne ke liye === use krna chahiye   
}

if(2==="2"){
    console.log("executed by both value and data type"); 
}


if(2!="2"){
    console.log("executed "); 
}


// <,>,<=,>=,==,!=,===,!==


const temp = 41;
// if(temp === 41 ){
//     console.log("temp is strictly 41");
    
// }
// else {
//     console.log("temp is not 41");
// }

const score = 200;
if(score > 100){    
    const power = "fly"
    console.log(`User Power is ${power}`);
}

const balance = 1000;

// if(balance > 2000)    console.log("test");  // scope only one line of code execute hoga without curly braces bcz we use semicolon after console.log() statement

// const balance = 2220;

// if(balance > 200)    console.log("test"),  // we use comma operator to execute multiple statements without curly braces
// console.log("test2");  


// if(balance <500){
//     console.log("less than 500");
// }
// else if(balance < 750){
//     console.log("less than 750");
// }
// else if (balance < 900){
//     console.log("less than 900");
// }
// else{
//     console.log("balance is less than 1200");
// }


const UserLoggedIn = true;
const debitCard = true;
const LoggedInFromGoogle = false ;
const LoggedInFromEmail = true ;
if(UserLoggedIn && debitCard){
    console.log("allow user to make a purchase");
}

if(LoggedInFromGoogle || LoggedInFromEmail){
    console.log("Allow user to logged in");
}













