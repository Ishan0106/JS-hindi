function one(){
    const username = "ishan"

    function two(){
        const email = "sdcbdsj"
        console.log(username)               // will not give error
    }

    //console.log(email)    // this will give error bcaz email ka scope is inside two function only
    two()
}

one()


/////////////////////////////////////////

// myfunc()       yaha pr aap ese call nhi kr skte upar myfunc ke agar neche ke tarah declare kr rhe ho toh  

const myfunc = function(num){                      // function ko aese bhi declare kr skte hai
    return num + 2
}

console.log(myfunc(4))

