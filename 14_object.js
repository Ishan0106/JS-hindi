const obj1 = {
    name : "ckhbjks",
    age : 12 ,
    obj2 : {
        firstname : "dscs",
        secname : "dscsc"
    }
}

console.log(obj1.obj2.firstname)

const a1 = {
    a :1,
    b:2
}

const a2 = {
    c :3,
    d:4
}

//const obj3 = Object.assign({},a1,a2)
//console.log(obj3)                              // { a: 1, b: 2, c: 3, d: 4 }

// syntax Object.assign(target , source)

const obj3 = {...a1,...a2}
console.log(obj3)

console.log(Object.keys(obj3))      //[ 'a', 'b', 'c', 'd' ]   return array of keys

// similarly for values
console.log(obj3.hasOwnProperty('a'))   // true