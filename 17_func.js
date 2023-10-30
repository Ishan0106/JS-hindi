function calculatecartprice(...num){                 // ...  rest operator
    console.log(num)                                //[ 200, 300, 400 ]
}

calculatecartprice(200,300,400)

/////////////////////////////////////////////////////////////

const object = {
    username : "ishan",
    price : 200
}

function handleobject(anyobject){
    console.log(`my name is ${anyobject.username} and my price is ${anyobject.price}`)
}

handleobject(object)

//////////////////////////////////////////////////////////////


function returnsecvalue(getarray){
    console.log(getarray[1])
}
returnsecvalue([1,2,3,4])