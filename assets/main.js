// 1. Write a function that returns the sum of any two integers passed as arguments
function addTwoNumbers (x, y){
  let total = x + y;
  console.log(total);
  return total;
};

// 2. Write a function that returns the difference of the second argument from the first
function subTwoNumbers (x, y){
  let total = x - y;
  console.log(total);
  return total;
};

addTwoNumbers(10, 11);
subTwoNumbers(19, 2);

// 3. Write a function that allows a user to enter their name as an
// argument and returns a statement greeting them like, `Hello, Homer!`
function greetUser(timeofDay, firstName){
  const greeting = `Good ${timeofDay}, ${firstName}!`;
  console.log(greeting);
  return greeting;
};

greetUser(`Evening`, `Blaise`)

// 4. Write a function that returns the product of any argument
// multiplied by itself.
function multTwoNumbers (x, y){
  let total = x * y;
  console.log(total);
  return total;
};

multTwoNumbers(17, 17);

// 5. Write a  function set equal to a variable called `volume`
// that returns a value of the dimensions of a box (l*w*h) and THEN
// invoke that function in a console.log() with a message of the box's
// dimensions
// ^ 🔥 This is s-tier/big-brain work and not for the faint of heart 🔥

function readAnswer (volume){

  const sentence = `The volume of the box is ${volume} cubic meters`;
  console.log(sentence);
  return sentence;
}
function volume(l, w, h){
  let total = l * w * h;
  console.log(total);
  return total;
};

volume(5, 6, 5);
