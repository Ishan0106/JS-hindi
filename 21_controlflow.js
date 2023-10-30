if(2 == "2"){
    console.log("executed")                 // compairing value only == 
}


if(2 === "2"){
    console.log("executed")                 // comparing data type also === 
}


const balance = 100

if(balance > 50){
    console.log("meri maam")
}else{
    console.log("meri not ,aan")
}

if(balance > 150){
    console.log("meri maam")
}else if(balance < 0){
    console.log("meri not ,aan")
}else{
    console.log("vfbkdbvkj")
}


///////////////////////////////////////////////////

const email = "dfjhvdivk"

if(email){
    console.log("yes we log in")
}else{
    console.log("we not log in")
}

const gmail = ""
if(gmail){
    console.log("yes we log in")
}else{
    console.log("we not log in")
}

//////////////////////////////////////////////////////////

const array1 = []

if(array1.length === 0){
    console.log("empty aaray")
}

////////////////////////////////////////////////////////////

const obj = {

}

if(Object.keys(obj).length === 0){
    console.log("empty object")
}

///////////////////////////////////////////////////////////

const price = 100

price >= 150 ? console.log("maa ch") : console.log("fjd")

/////////////////////////////////////////////////////////////

const month = "aprail"

switch(month){
    case "jan" :
        console.log("1")
        break
    case "aprail" :
        console.log("2")
        break
    default :
      console.log("gaand marao")
      break
}
////////////////////////////////////////////////////////////////

const myobj = {
    name : "ishan",
    age : 12,
    price : 2000,
    class : 4,
    gaand : 56
}

for(const key in myobj){
    console.log(myobj[key])               // console.log(key)   for keys only
}


////////////////////////////////////

const array2 = ["ishan" , "jouli" , "dfj" , "lfnle"]

for(const item in array2){
    console.log(array2[item])
}

/////////////////////////////////////forEach method ///////////////////////////////////////////

const array3 = ["ishan" , "jouli" , "dfj" , "lfnle"]

array3.forEach(function(val){
    console.log(val)                                  // foreach method me apko ek function as a parameter dena hota hai i.e ek callback dena hota hai
})

array3.forEach(function(val , index , arr){
    console.log(val , index ,arr)                                  // foreach me function ke index aur array pura bhi aata hai 
})

// ishan 0 [ 'ishan', 'jouli', 'dfj', 'lfnle' ]
// jouli 1 [ 'ishan', 'jouli', 'dfj', 'lfnle' ]
// dfj 2 [ 'ishan', 'jouli', 'dfj', 'lfnle' ]
// lfnle 3 [ 'ishan', 'jouli', 'dfj', 'lfnle' ]

////////////////////////////////////////////// how to access array of objects //////////////////////////////

const objarray = [
    {
        username : "ishan",
        price :100
    },
    {
        username : "jshdbc",
        price : 232
    },
    {
        username :"dlfjd",
        price:3497
    }
]

objarray.forEach((item)=>{
    console.log(item)
})

objarray.forEach((samaan)=>{
    console.log(samaan.username)
})