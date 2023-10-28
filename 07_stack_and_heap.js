//primitive dta types stored in stack memory 

//non primitive datatypes store in heap memory 

let ans = "edbhjw";
// ans will be in stack memory 

let userone = {
    email : "dkjfgjei",
    name : "wfevf" 
}

// here userone will be defined in stack memory but the data email and name will be there in heap memory that is userone will be taking reference from heap memory

let usertwo = userone

console.log(usertwo)

//here usertwo was made in stack memory but taking reference from heap memory