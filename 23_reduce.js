const mynums = [1,2,3]

const total1 = mynums.reduce(function(acc,curval){
      return acc + curval
},0)

console.log(total1)                       // 6 output


///////////////////////////

const total = mynums.reduce(function(acc,curval){
    console.log(`${acc} , ${curval}`)
    return acc * curval
},2)                                                           // 2 is the initial value of accumulator i.e acc

console.log(total)                                //12

// 2 , 1
// 2 , 2
// 4 , 3
// 12

///////////////////////////////////////////////////////////////////////

const shopping = [
    {
        item : " bat",
        price : 5000
    },
    {
        item : "ball",
        price : 56
    },
    {
        item : "tshirt",
        price : 500
    }
]

const mytotal = shopping.reduce((acc,itemName) => acc + itemName.price , 0)

console.log(mytotal)      // 5556