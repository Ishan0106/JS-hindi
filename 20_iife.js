// immediately invoked function expression

// function chai(){
//     console.log(`DB CONNECTED`)
// }

// chai()  

(function chai(){
    console.log(`DB CONNECTED`)
})();                                           // semi colon lga dena iife ke case me

(function unchai(name){
    console.log(`my name is ${name}`)
})('ishan')