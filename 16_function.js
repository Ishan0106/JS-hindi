function addtwonum(num1,num2){
    console.log(num1+num2)
}

addtwonum(2,3)
//////////////////////////////////////////////////////
function addtwonum1(num1,num2){
    return num1+num2
}

const ans = addtwonum(2,3)
console.log(ans)
//////////////////////////////////////////////////////

function myname(username = "sam"){    // default parameters
    if(username === undefined){
        console.log("undefined name")
    }
    console.log(username)
}

console.log(myname("ishan"))
console.log(myname())

//////////////////////////////////////////////////////

