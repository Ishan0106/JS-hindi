const myname = "kdhgcisci";

console.log(typeof(myname))

const name = "hotest";

const repocount = 50

console.log(name + repocount + "Value"); // purane zamane me aese likha jata tha

let vards = 'hello my name is ${myname} and my ${repocount}'

console.log(name[0]);

console.log(name.length);   //only length hai.....length() nhi hai

// toUpperCase()
//charAt('index number')
//indexOf('')

const newstr = name.substring(0,4)   //from index number 0 to 3..........4 is not included  //negative values not give in parameters

console.log(newstr)

// similarly we are having a slice function..    name.slice(-2,5)     slice me negative values de skte hai

const nnewstr = name.substring(-8,4)   
console.log(nnewstr)

// trim method
// string = "    jhfjb"
// string.trim() ---------> jhfjb

//replace method
// string.replace(kisko,kisse)

// yeh sb string ke method aapko help karenge front and backend me bahut

//string.includes('hot') ----------->return true if string is having 'hot' inside it

// string.split('-')  -----------> return a array of splitting the string acc to '-'
// string = "ishan-is-good"      ----> ["ishan" , "is"  , "good"]
