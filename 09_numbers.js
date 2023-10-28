const score = 100
console.log(score)

const balance = new Number(100)
console.log(balance)

let str = score.toString()
console.log(str)
console.log(typeof(str))    // it will return string 

console.log(balance.toFixed(2)) //  100.00

//........................................Math library...................

console.log(Math)
console.log(Math.abs(-4))    //4
console.log(Math.round(4.3))    //4
console.log(Math.round(4.7))    //5
console.log(Math.floor(4.6))    //4
console.log(Math.ceil(4.5))     //5

//math.random()    


const  min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min - 1)) + min)   // yeh formula yaad krlo it will give numbers btw 10 and 20
