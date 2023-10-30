// const coding = ["js" , "ruby" , "java" , "python" , "cpp"]

// const values = coding.forEach((item)=>{
//     console.log(item);
// })

// console.log(values)                // forEach method will not return anything  

// js
// ruby
// java
// python
// cpp
// undefined

///////////////////////////////////////////////////////////////filter method se aap return kara skte ho

const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNums1 = myNums.filter((num) => num > 5)
console.log(newNums1)                                           //[ 5, 6, 7, 8, 9, 10 ]

const newNums = myNums.filter((num) => {
    return num > 4                                                           // curly braces me return dena padhta hai
})
console.log(newNums)                                               //[ 5, 6, 7, 8, 9, 10 ]

//////////////////////upar vala kaam forEach se kaise kre vo dekhte hai

const newarr = []

myNums.forEach((num)=>{
    if(num > 4){
        newarr.push(num)    ////u can see ki if vagera use krna pada forEach se krne pe  ,,,,  filter me easily ho jata hai 
    }
})
console.log(newarr)

//////////////////////////////////////////////////////////

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

let userBooks = books.filter( (bk) => bk.genre === 'History')

console.log(userBooks);

// upar ka output
// [
//     {
//       title: 'Book Three',
//       genre: 'History',
//       publish: 1999,
//       edition: 2007
//     },
//     {
//       title: 'Book Seven',
//       genre: 'History',
//       publish: 1986,
//       edition: 1996
//     }
// ]

userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})                                                                         //here u have open a scope i.e { } so u have to use return
console.log(userBooks);

///////////////////////////////////////////////////////////////////////MAP METHOD

const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})

const newA = myNumers.map((num) => num * 10 )
       // const newA = myNumers.map((num) => {return num * 10} )
console.log(newA);

const newNum = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNum);                          //[41,51,61,71,81,91,101]









