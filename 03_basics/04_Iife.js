// Immediately Invoked function Expression (IIFE)

// global scope ke pollution se problem hoti hai to usse  bachane ke liye hum iffe use krr sakte   ()()

(function chai() {               // named iife  
    console.log(`DB CONNECTED `)
})();


(() => {                                // arrow function ke sath bhi iife bana sakte hai
    console.log(`DB CONNECTED TWO`)
})();

(function aurcode() {    // agar aap function expression ke sath name bhi de dete ho to uska scope sirf usi function ke andar hota hai aur bahar se access nhi kar sakte
    console.log(`DB CONNECTED THREE`)
})();


((name) => {                                //  (arrow iife)yaha unnamed iife bana hai aur usme parameter bhi pass kiya hai
    console.log(`DB CONNECTED TWO , ${name}`)
})("vivek");




