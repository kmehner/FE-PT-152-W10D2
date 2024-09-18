const greeting = "Why, hello, there";

// Basic string manipulation
console.log(greeting.length); // no () because this is a property
console.log(greeting.toUpperCase()); // python: .upper
console.log(greeting.toLowerCase()); // python: .lower 

// Subsection of string
console.log("Substring")
console.log(greeting.substring(0, 4));  // Why,

// Split string by separator 
console.log("split")
console.log(greeting.split(' ')); // [ 'Why', ' hello', ' there' ]

// Slice 
console.log("slice")
console.log(greeting.slice(-3)); // ere 



let sentence = "the quick brown fox jumps over the lazy dog";

// Check if string includes the word fox 
console.log(sentence.includes("fox")); // true

// Check where the index of the word the is (case sensitive) 
console.log(sentence.indexOf("the")); // 0

// Check where the last index is 
console.log(sentence.lastIndexOf("the")); // 31


// REGEX!!!!

// Case sensitive 
let pattern = /hello/;
console.log(pattern.test("why hello there")); // true 

// Case in-sensitive 
let pattern2 = /hello/i;
console.log(pattern2.test("why Hello there")); // true 



// Digit and 1 or more 
// g is global search (keep going) 
pattern = /\d+/g;
console.log(pattern.test("abc123abc456")); // true 
console.log("abc123abc456".match(pattern)); // [ '123', '456' ]

// Example: Analyzing Social Media Posts
let post = "Hey @JohnDoe_, did you see the new #JavaScript tutorial? #coding";

// Finding the usernames
let mentions = post.match(/@[A-Za-z0-9_]+/g);
console.log("Mentions:", mentions)

// Finding the hashtags 
let hashtags = post.match(/#[A-Za-z0-9_]+/g);
console.log("Hashtags:", hashtags)

