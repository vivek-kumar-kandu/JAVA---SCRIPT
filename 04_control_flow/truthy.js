const userEmail = []
if(userEmail) {   // if userEmail is empty string then it will be falsy value and if it has some value then it will be truthy value
    console.log("got user email");
}else{
    console.log("dont have user email ");
    
}

// falsy values 

// false , 0,-0,BigInt 0n, "",null , undefined ,Nan  (all other is a truthy or truth values )

// truthy values 

// "0" ,'false' , " ",[],{}, function(){}  => empty function without parameter 

//checking for array
if(userEmail.length ===0){
    console.log("Array is empty");
    
}


//checking for obj

const emptyObj = {}
if(Object.keys(emptyObj).length == 0){
    console.log("obj is empty");
    
}


//Nullish coalescing Operator (??)  : null , undefined 

let val1;
// val1 = 5 ?? 10
// console.log(val1);

// val1 = null ?? 10
// console.log(val1);

// val1 = undefined ?? 10  // agar null ya undefined hai to uske baad jo first value hoga wahi assign hoga
// console.log(val1);

val1 = undefined ?? 10 ?? 15  // jo first value hoga wahi assign ho jyega 
console.log(val1);


// terniary operrator 

// conditon  ? ture : false 
 const iceTeaPriice = 100
 iceTeaPriice <= 80 ? console.log("less than 80") : console.log("more than 80" )