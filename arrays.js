let heroes = ["hulk", "iron man", "black widow"];

// Accessing hero in array at position 0 
console.log(heroes[0]);

// Python: append 
// Add a hero to the end of the array
heroes.push("spiderman"); 
console.log(heroes); // [ 'hulk', 'iron man', 'black widow', 'spiderman' ]
console.log(heroes.length) // 4 

// Getting the last item in an array
console.log(heroes[heroes.length-1])

// popping the last value out 
lastHero = heroes.pop(); 
console.log(lastHero); // spiderman 
console.log(heroes); 

// ForEach 
// For...of loop but quicker 
heroes.forEach(hero => {
  console.log("Hero:", hero); 
})

// How we would do it for...of loop 
for (let hero of heroes){
  console.log(hero);
}

// Another example 
let codingLanguages = ["html", "css", "javascript"]; 

codingLanguages.forEach(language => {
  console.log(language); 
})

// Map
let amazingHeroes = heroes.map(hero => "The amazing " + hero);
console.log(amazingHeroes)

// [
//   'The amazing hulk',
//   'The amazing iron man',
//   'The amazing black widow'
// ]

let coolLanguages = codingLanguages.map(language => language + " is super cool");
console.log(coolLanguages); 

// [
//   'html is super cool',
//   'css is super cool',
//   'javascript is super cool'
// ]


// filter
// everything that is true in the condition gets put in the new array
let scores = [75, 80, 65, 90, 85, 20, 60];
let cOrAbove = scores.filter( score => score >= 70 );
console.log(cOrAbove);

let failingScores = scores.filter(score => score < 70);
console.log(failingScores); 


// reduce - reducing all the items in the array down to one value 
let expenses = [100, 50, 200, 150];

// accumulator is the parameter that holds the returned compounding value
// the 0 is where it starts accumulating
// expense is the temp var that holds all the values of the array
let total = expenses.reduce((accumulator, expense) => accumulator + expense, 5);
console.log(total);

// 500

// Similar to count function in python 
// count = 5
// for expense in expense: 
//   count += expense
// return count 

// Sort 
let numbers = [33, 3, 1, 6098354, 5, 2, 4, 42, 57, 5756];
let heroesSort = ['hulk', 'iron man', 'black widow'];

console.log(heroesSort.sort()) // [ 'black widow', 'hulk', 'iron man' ]
console.log(heroesSort.sort().reverse()) // [ 'iron man', 'hulk', 'black widow' ]
console.log(numbers.sort()) // [ 1, 2, 3, 33, 4, 42, 5, 57, 5756, 6098354 ]

/* Compare Function
 Sorts the values according to the returned (negative, zero, positive) value.
 If the result is negative, a is sorted before b.
 If the result is positive, b is sorted before a.
 If the result is 0, no changes are done with the sort order of the two values.
*/

numbers.sort(
  function(a, b){
    return a - b;
  }
)
console.log(numbers); // [ 1, 2, 3, 4, 5, 33, 42, 57, 5756, 6098354 ]


// destructuring
let arr = ['hulk', 'iron man', 'black widow', "thor", "spiderman"];
let [hero1, hero2, hero3, hero4] = arr;
console.log(hero1); // hulk
console.log(hero2); // iron man
console.log(hero3); // black widow
console.log(hero4); // thor

let numbersss = [1, 2, 3, 4]
let [number1] = numbersss; 
console.log(number1); // 1


// spread operator
// spreads or unpacks values from an array
let originalHeroes = ['hulk', 'iron man', 'black widow'];
let spreadHeroes = [...originalHeroes, "thor", "black panther"];
let copyOfHeroes = [originalHeroes]; // makes a copy of originalHeroes
console.log(spreadHeroes);
console.log(originalHeroes);
console.log(copyOfHeroes);

let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]

let combinedArr = [arr1 + arr2]
console.log("Combined array:", combinedArr) // [ '1,2,34,5,6' ]

let combinedArr2 = [arr1, arr2]
console.log("Combined Arr2:", combinedArr2) // [ [ 1, 2, 3 ], [ 4, 5, 6 ] ]

let combinedArr3 = [...arr1, ...arr2]
console.log("Combined Arr3:", combinedArr3) // [ 1, 2, 3, 4, 5, 6 ]

// es6 rest parameter (*args)
function fun(...input) {
  let sum = 0;
  for (let i of input) {
      sum += i;
  }
  return sum;
}
console.log(fun(1, 2)); //3
console.log(fun(1, 2, 3)); //6
console.log(fun(1, 2, 3, 4, 5)); //15      