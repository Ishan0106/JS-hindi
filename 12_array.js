const arr1 =  ["1","2","3","4"]

const arr2 = ["6","7","8","9"]

//arr1.push(arr2)

//console.log(arr1)    // [ '1', '2', '3', '4', [ '6', '7', '8', '9' ] ]

//const newarr = arr1.concat(arr2)

//console.log(newarr)    // [ '1', '2', '3', '4', '6', '7', '8', '9'  ]

//const aaaa2 = [...arr1,...arr2]
//console.log(aaaa2)                  //[ '1', '2', '3', '4', '6', '7', '8', '9'  ]

const newarr1 = [1,2,3,[4,5,6],7,8,[9]]
const newarr2 = newarr1.flat(Infinity)
console.log(newarr2)                   //[ '1', '2', '3', '4', '6', '7', '8', '9'  ]

let a1 = 100
let a2 = 200
let a3 = 300
 
console.log(Array.of(a1,a2,a3))

console.log(Array.from("jshdfj"))



