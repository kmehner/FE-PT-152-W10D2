function greet(fullName) { // parameter
  return "Hello " + fullName + "!";

  // this is ignored because its after the return
  console.log("I will not run");
}

// greet("George")
console.log(greet("George")); 


// Closures 
// Child(inner) function has access to parent(outer) variables 
function outer() {
  let message = "I am from the outer function";

  // Child function has access to parent variables 
  function inner() {
    console.log(message); // Accesses 'message' from outer scope 
  }

  return inner; // return the inner function 
}

let closureFunc = outer(); 
console.log(closureFunc);
closureFunc(); 


// ARROW FUNCTIONS 

// as normal 
function add(a,b){
  // return a + b; 
  return console.log(a+b)
}

// console.log(add(3,5))
add(3,5)

// as arrow 
// the return is implied/built in
// return => 
const addArrow = (a, b) => a + b;
console.log(addArrow(3,5));

const addArrow2 = a => a*5; 
console.log(addArrow2(3)); 

// f"Hello, {fullName}""
const greet2 = fullName => `Hello, ${fullName}`
console.log(greet2("Adam Cain"))

