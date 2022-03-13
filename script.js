/*

/////////////
I. Variables & Datatypes
/////////////



A. Q + A

- How do we assign a value to a variable?

   => You  can assign a value to the variable either while declaring the variable (with var, const or let) or after declaring the variable with the assignment operator (= /the equal sign).

        Ex: const variableName = "Mano";

        or

        let variableName;

        variableName = "Mano";



- How do we change the value of a variable?

    => Re-assign the value of the specific variable using the assignment operator (=). But it must be with a var or let declaration. 
    // Also the variable must be gobally declared. If declared within a function (locally scoped with in curly brackets) it can only be changed within that same function or scope. 
    // If declared with with a const declaration you will not be able to re-assign.

        Ex: let variable = 10;
            variable = 20;



- How do we assign an existing variable to a new variable?
    => You can declare a new variable and with the assingment operator (=) you can have it equal to the existing variable.

        Ex: let variable = 10;
            let numberVariable = variable

            (the numberVariable will now have the value contained in the variable called variable)


- Remind me, what are declare, assign, and define?
    => to declare a variable is to create a variable using the keywords var, const and let (in JavaScript)

        Ex: let x;

    => to assign a variable is to assign a value to a variable using the assignment operator.

        Ex: let x = 10;

    => to define a variable basically means to define what type/kind of variable it will be depending on the keyword used.

        Ex: var: when defining a variable with keyword var your variable will be hoisted and can also change values or be reassigned.
            let: when defining a variable with the keyword let your variable will be able to change values. (Also not hoisted)
            const: the const keyword does not allow the variableto be reassigned to another value. (Also not hoited)



- What is pseudocoding and why should you do it?

    => It is a way to write a sequence of action or code instructions (not the code itself) that is easy for people to understand. 
       // It can be greatly useful to plan a course of action or what needs to be achieved in order to accomplish a goal but without having to worry about the computer code syntax itself.
       // It works like an outline of instructions or a plan. It's like a form of free flow writing without the strict syntax of coding (to then only be translated later on). 



- What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?

    => (Undefined) It can depend greatly on the individual and or the team, there's no right answer to this. 
       // But it can be greatly helpful to spend a considerable amount of time figuring out a solution, or planning something in pseudocode before actually starting to write the hard syntax coding.



*/
/////////////



// B. Strings

// 1. Create a variable called firstVariable

let firstVariable;


// Assign it the value of the string "Hello World"

firstVariable = "Hello World";
console.log(firstVariable)


// Change the value of this variable to some number

firstVariable = 10;
console.log(firstVariable)


// Store the value of firstVariable in a new variable called secondVariable

let secondVariable = firstVariable
console.log(secondVariable)


// Change the value of secondVariable to any string.

secondVariable = "Hi there!"
console.log(secondVariable)


// What is the value of firstVariable?

console.log(firstVariable)


// => 10



// 2. Create a variable called yourName and set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourName so that it returns a new string with them concatenated. Ex: Hello, my name is Jean Valjean

let yourName = "Germano Kuerten"

console.log("Hello, my name is " + yourName)

// or alternative method.
// const expression = "Hello, my name is "   
// console.log(expression + yourName) 



/////////////


/*
C. Booleans

- Using the provided variable definitions, replace the blanks so that all log statements print true in the console. Answers should all be valid JS syntax and not weird things that don't make sense but happen to print true to the console.

*/

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name' === 'Name');

// FOR THE NEXT TWO, USE ONLY && OR ||

console.log(true || false);
console.log(false && false && false && false && false || true);

console.log(false === false)
console.log(e === 'Kevin');

console.log(a + b === c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
console.log(a * a == d); // note: the answer is a simple arithmetic equation, not something "weird"
console.log(48 !== '48');
//or
console.log(48 == '48');



/////////////



// D. The farm

// 1. Declare a variable animal. Set it to be either "cow" or something else

let animal = "horse"
console.log(animal)


// 2. Write code that will print out "mooooo" if the it is equal to cow

// (if I understood the question) Use a conditional statement to print out "mooooo"

if (animal === "horse") {
    let horse = "ihaaaaw"
    console.log(horse)
}


// 3. Change your code so that if the variable animal is anything other than a cow, it will print "Hey! You're not a cow."

if (animal !== "horse") {
    let horse = "ihaaaaw"
    console.log(horse)
} else {
    console.log("Hey! You're not a horse.")
  }


// 4. Commit (I don't understand what is being asked.)



/////////////



// E. Driver's Ed

// 1. Make a variable that holds a person's age; be semantic.

let personsAge = 25;


// 2. Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."

if (personsAge > 16) {
    console.log("Here are the keys!")
} else {
    console.log("Sorry, you're too young.")
  }


/*
/////////////
II. Loops
/////////////



Remember: USE let when you initialize your for loops!

This is GOOD: for(let i = 0; i < 100; i++)

This is NO GOOD: for(i = 0; i < 100; i++)

*/

// A. The basics

// 1. Write a loop that will print out all the numbers from 0 to 10, inclusive

for (let i = 0; i <= 10; i++) {
    console.log (i)
}


// 2. Write a loop that will print out all the numbers from 10 up to and including 400

for (let i = 0; i <= 400; i++) {
    console.log (i)
}


// 3. Write a loop that will print out every third number starting with 12 and going no higher than 4000

for (let i = 12; i <= 400; i++) {
    if (i % 3 === 0)
       console.log(i)
}



/////////////



// B. Get even

// 1. Print out the numbers that are within the range of 1 - 100

for (let i = 1; i <= 100; i++) {
       console.log(i)
}


// 2. Adjust your code to add a message next to even numbers only that says: "<-- is an even number"

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0)
    console.log(i + "<-- is an even number")
}



/////////////



// C. Give me Five

// 1. For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five.

for (let i = 0; i <= 100; i++) {
    if (i % 5 === 0)
    console.log("I found a " + i + ". High five!")
}


// 2. Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three

for (let i = 0; i <= 100; i++) {
    if (i % 5 === 0)
    console.log("I found a " + i + ". High five!")
    if (i % 3 === 0)
    console.log("I found a " + i + ". Three is a crowd")
}



/////////////



// D. Savings account

// 1. Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
    // Check your work! Your bank_account should have $55 in it.

let bank_account = 0;

for (let num = 1; num <= 10; num++) {
    bank_account = bank_account + num;
}

console.log(bank_account)
    
    


// 2. You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2. 
    // Check your work! Your bank_account should have $10,100 in it.


for (let num = 1; num <= 100; num++) {
    bank_account = bank_account + num *2;
}

console.log(bank_account)

/*
/////////////
III. Arrays & Control flow
/////////////



A. Talk about it:

1. What are the things in an array called?

    => Elements (a list of values)



2. Do Arrays guarantee those things will be in order?

    => Yes. (it follows an index in sequeancial order starting from 0 and up.)



3. What real-life thing could you model with an array?

    => Anything that can go in a ordered list.
        Ex: a list of ingredients in a recipe.
            a list of pets staying in a pet hotel. 
            a list of favourite artists.
            a list of groceries

   
*/



/////////////



// B. Easy Does It

// 1. Create an array that contains three quotes and store it in a variable called quotes

const myArray = ["Hi there!", "Hello World", "Good Morning!"]

console.log(myArray)



/////////////



// C. Accessing elements

// Given the following array const randomThings = [1, 10, "Hello", true]

const randomThings = [1, 10, "Hello", true]


// 1. How do you access the 1st element in the array?

console.log(randomThings[0])


// 2. Change the value of "Hello" to "World"

randomThings[2] = "World"


// 3. Check the value of the array to make sure it updated the array. How? Why, yes! console.log();

console.log(randomThings)



/////////////



// D. Change values

// Given the following array const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]

const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]

console.log(ourClass)


// 1. What would you write to access the 3rd element of the array?

console.log(ourClass[2])


// 2. Change the value of "Github" to "Octocat"

ourClass[4] = "Octocat"

console.log(ourClass)


// 3. Add a new element, "Cloud City" to the array

ourClass.push("Cloud City")

console.log(ourClass)



/////////////



// E. Mix It Up

// Note: You don't really need .splice()for these. You could use it, but there are simpler array methods that are more appropriate.

// Given the following array: const myArray = [5, 10, 500, 20]

const myArray1 = [5, 10, 500, 20]


// 1. Add the string "Egon" to the end of the array. Add another string of your choice to the end of the array.

myArray1.push ("Egon")

console.log(myArray1)

myArray1.push ("Natiruts")

console.log(myArray1)


// 2. Remove the 5 from the beginning of the array.

myArray1.shift()

console.log(myArray1)


// 3. Add the string "Bob Marley" to the beginning of the array.

myArray1.unshift("Bob Marley")

console.log(myArray1)


// 4. Remove the string of your choice from the end of the array.

myArray1.pop()

console.log(myArray1)


// 5. Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse() method return anything?


myArray1.reverse();

    // => Yes, .reverse mutates the original Array.

    // => Mutate means that it changes the original Array.

    // => No, the .reverse method did not return anything. I had to console.log myArray1 in order to get a return.

    
    // Ps. in order to not mutate the original Array you can use the .concat() method, or the spread operator. 

    // Ex. const newReversedArray = myArray1.concat().reverse();
    // Ex. const newReverseArray2 = [...myArray1].reverse();



/////////////



// F. Biggie Smalls

// Create a variable that contains an integer.

newInteger = 10

// Write an if ... else statement that:

// 1. console.log()s "little number" if the number is entered is less than 100

// 2. console.log()s big number if the number is greater than or equal to 100.


if (newInteger < 100) {
    console.log("little number")
} else {
    console.log("big number")
  }



/////////////  



// G. Monkey in the Middle

// Write an if ... else if ... else statement:

// 1. console.log() little number if the number entered is less than 5.

// 2. If the number entered is more than 10, log big number.

// 3. Otherwise, log "monkey".


if (newInteger < 5) {
    console.log("little number")
} else if (newInteger > 10) {
    console.log("big number")
  } else {
    console.log("monkey")
  }



  // H. What's in Your Closet?

  // Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript.

  const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];


// 1. What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.

console.log([kristynsCloset])

console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!")


// 2. Kristyn just bought some sweet shades! Add "raybans" to her closet after "yellow knit hat".

kristynsCloset.splice(6, 0, 'raybans')

console.log([kristynsCloset])


// 3. Kristyn spilled coffee on her hat... modify this item to read "stained knit hat" instead of yellow.
  // Note: You can use a simple array access and reassign at the index value.

kristynsCloset[5] = "stained knit hat"

console.log([kristynsCloset])


// 4. Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirtsarray.

console.log([thomsCloset[0][0]])


// 5. In the same way, access one item from Thom's pants array.

console.log([thomsCloset[1][1]])


// 6. Access one item from Thom's accessories array.

console.log([thomsCloset[2][1]])


// 7. Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"

console.log("Thom is looking fierce in a " + thomsCloset[0][0] + ", " + thomsCloset[1][1] + ", and " + thomsCloset[2][1] + "!")


// 8. Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.

thomsCloset[1][2] = "Footie Pajamas"

console.log (thomsCloset)



/////////////
// IV. Functions
/////////////



// A. printGreeting

// Do you think you could write a function called printGreeting with a parameter name that returns a greeting with the argument interpolated into the greeting?

// Like so?

function printGreeting(name) {
    return(`Hello there, ${name}!`)
}

console.log(printGreeting("Slimer"));

// => Hello there, Slimer!


// B. printCool

// Write a function printCool that accepts one parameter, name as an argument. The function should print the name and a message saying that that person is cool.

function printCool(name) {
    return(`${name} is cool`)
}

console.log(printCool("Captain Reynolds"));

// => "Captain Reynolds is cool";


// C. calculateCube

// Write a function calculateCube that takes a single number and prints the volume of a cube made from that number.

function calculateCube(number) {
    return(Math.pow(number, 3))
}

console.log(calculateCube(5));


// D. isVowel

// Write a function isVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case. Test your function on every vowel and make sure it's working. In general, when you write functions, take a minute to test them with different values to make sure they behave the way you want.


function isVowel(character) {
    if (character.length !== 1) {
    console.log("Please write only 1 character.")
    } else {
        const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
        return vowels.includes(character)
    }
}

console.log(isVowel("a"));

    // => true


// E. getTwoLengths

// Write a function getTwoLengths that accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.

function getTwoLengths(x, y) {
    let myArray = []
    myArray.push(x.length)
    myArray.push(y.length)
    return myArray
      }

console.log(getTwoLengths("Hank", "Hippopopalous"));

    // => [4, 13]


// F. getMultipleLengths

// Write a function getMultipleLengths that accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.

function getMultipleLengths(a) {
    let myArray5 = []
    for (let i = 0; i < a.length; i++) {
    myArray5.push(a[i].length)
    }
    return myArray5
      }


console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));

    // => [5, 4, 2, 2, 4]



// G. maxOfThree

// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned. Be sure to test it with larger values in each of the three locations.

// function getMultipleLengths()


function maxOfThree(x, y, z) 
    { max_val = 0;
    if (x > y) {
        max_val = x;
    } else {
        max_val = y;
    } if (z > max_val) {
        max_val = z;
    }
    return max_val;
   }
   

console.log(maxOfThree(6, 9, 1));

    // => 9

// Did you use Google and find Math.max()? If so, great job! Very resourceful—keep looking stuff up! However, for this particular question, we need you to submit a solution that does not use Math.max().



// H. printLongestWord

// Write a function printLongestWordthat accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.

const printLongestWord =  (arrayOfStrings) => {
    const result = arrayOfStrings.reduce((currentWinner, nextWord) => {
        if (currentWinner.length >= nextWord.length){
            return currentWinner
        } else {
            return nextWord
        }
    }, "");
    return result
};

// currentWinner | nextWord | return value
// "" | "BoJack" | ""


console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));

    // => "Peanutbutter"


    
/////////////
// IV. Objects
/////////////

// Let's set up an object data structure. Let's say we have a website that sells products, and we have a user of our website, and we want to store that user's data. The object data structure is a good way to organize the data from our user.


// A. Make a user object

// 1. Create an object called user.

// 2. Write in to the object the key-value pairs for name, email, age, and purchased. Set the value of purchased to an empty array []. Set the other values to whatever you would like.

let user = {
    name: "Gustavo", 
    email: "gustavokuerten@gmail.com", 
    age: 45, 
    purchased: [],
};

console.log(user)

// B. Update the user

// 1. Our user has changed his or her email address. Without changing the original user object, update the email value to a new email address.

user.email = "gustavokuerten@me.com"

console.log(user)


// 2. Our user has had a birthday! Without changing the original user object, increment the age value using the postfix operator. Hint: age++

user.age++

console.log(user)


// C. Adding keys and values

// You have decided to add your user's location to the data that you want to collect.

// 1. Without changing the original user object, add a new key location to the object, and give it a value or some-or-other location (a string).

user.location = "Floripa"

console.log(user)


// D. Shopaholic!

// 1. Our user has purchased an item! They have purchased some "carbohydrates". Using .push(), add the string "carbohydrates" to the purchasedarray.

user.purchased.push("carbohydrates")

console.log(user)


// 2. Our user has purchased an item! They have purchased some "peace of mind". Using .push(), add the string "peace of mind" to the purchasedarray.

user.purchased.push("peace of mind")

console.log(user)


// 3. Our user has purchased an item! They have purchased some "Merino jodhpurs". Using .push(), add the string "Merino jodhpurs" to the purchasedarray.

user.purchased.push("Merino jodhpurs")

console.log(user)


// 4. Console.log just the "Merino jodhpurs" from the purchasedarray.


console.log(user.purchased[2])




// E. Object-within-object

// Remember that you can add an object to an existing object in the same way that you can add any new property/value pair.

// If we want to give our user a friend with a name and age, we could write:

user.friend = {
    name: "Grace Hopper",
    age: 85
}

// When we console.log user, we would see the friend object added to our user object.

console.log(user)


// 1. Write a friend object into your user object and give the friend a name, age, location, and purchased array (empty for now)

user.friend2 = {
    name: "Amanda",
    age: 30,
    location: "Curitiba",
    purchasedArray: []
}

console.log(user)

// 2. Console.log just the friend's name

console.log(user.friend2.name)

// 3. Console.log just the friend's location

console.log(user.friend2.location)

// 4. CHANGE the friend's age to 55

user.friend2.age = 55

console.log(user.friend2.age)


// 5. The friend has purchased "The One Ring". Use .push()to add "The One Ring" to the friend's purchasedarray.

user.friend2.purchasedArray.push("The One Ring")

console.log(user.friend2.purchasedArray)


// 6. The friendhas purchased "A latte". Use .push() to add "A latte" to the friend's purchased array.

user.friend2.purchasedArray.push("A latte")

console.log(user.friend2.purchasedArray)


// 7. Console.log just "A latte" from the friend's purchasedarray.

console.log(user.friend2.purchasedArray[1])


// F. Loops

// 1. Write a for loop that iterates over the User's purchased array (NOT the friend's purchased array), and prints each element to the console.

for (let i = 0; i < user.purchased.length; i++) {
    console.log(user.purchased[i])
    }
    

// 2. Write a for loop that iterates over the Friend's purchasedarray, and prints each element to the console.

for (let i = 0; i < user.friend2.purchasedArray.length; i++) {
    console.log(user.friend2.purchasedArray[i])
    }


// G. Functions can operate on objects

// 1. Write a single function updateUser that takes no parameters. When the function is run, it should:

// * it should increment the user's age by 1

// * make the user's name uppercase

// function updateUser() {
//     let upperCased = text.toUpperCase();
//     user.age++ 
//     console.log(upperCased)
// }

let updateUser = () => {
    user.age++
    user["name"] = user["name"].toUpperCase()
    console.log(user)
  }
  updateUser()


// The function does not need a return statement, it will merely modify the user object.

// 2. Write a function oldAndLoud that performs the exact same tasks as updateUser, but instead of hard-coding it to only work on our user object, make it take a parameter person, and have it modify the object that is passed in as an argument when the function is called. Call your oldAndLoud function with user as the argument.

let oldAndLoud = (person) => {
    user.age++
    user["name"] = user["name"].toUpperCase()
    console.log(user)
  }
  
  oldAndLoud(user)