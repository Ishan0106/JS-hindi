

const obj = {
    name : "ishan",
    email : "ishan01@gmail.com",
    number : 12345,
    islogin : false,
    lastlogindays : ["mon" , " tues"]
}

console.log(obj.email)
//console.log(obj[email])      ether error aega bacaz email is treated as a string key 
console.log(obj["email"])       // hhaa ether sahi hai

//................symbol

const mySym = Symbol("key1")

const obj1 = {
    name1 : "ishan",
    email1 : "ishan01@gmail.com",
    number1 : 12345,
    [mySym] : "scsscs",                       // symbol ko as a key lene ka tareeka
    islogin1 : false,
    lastlogindays1 : ["mon" , " tues"]
}
console.log(obj1[mySym])    // access the symbol
console.log(obj1)    // output  ---- > {
                                           //   name1: 'ishan',
                                           //   email1: 'ishan01@gmail.com',
                                           //   number1: 12345,
                                           //   islogin1: false,
                                           //   lastlogindays1: [ 'mon', ' tues' ],
                                           //   [Symbol(key1)]: 'scsscs'
                                    // }

obj1.greeting = function(){
    console.log(`hello my name is ${this.name1}`);
}                                    

console.log(obj1.greeting())