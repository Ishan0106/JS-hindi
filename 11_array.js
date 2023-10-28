const arr = [1,2,3,4,5];
console.log(arr)

const arr1 = new Array(1,2,3,4)
console.log(arr1)

console.log(arr1[2])   //how to access elements of array

arr.push(22)

console.log(arr)   //push method

// pop() rempve the last ele

arr.unshift(9)   // add 9 to front of arr
console.log(arr)

arr.shift()   //9 hata dega

//arr.includes(9)
//arr.indexOf(3)

const arr2 = arr1.join()
console.log(arr2)       // arr2 ka type string hongya hai

const myarr = [1,2,3,4,5,6,7,8]
const myarr1 = myarr.slice(1,5)   //myarr1 = 2,3,4,5 ........................ here myarr remain same
const myarr2 = myarr.splice(1,5)  //myarr2 = 2,3,4,5 ........................ but here myarr se hi 2,3,4,5 nikl gae 