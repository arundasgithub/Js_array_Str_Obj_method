console.log("***********   THISE ARE ALL ARRAY METHORDS   ***********");

//How to Add Elements to an Array in JS

//*******************************************************          1   **/
//Use the push() method to insert an element into an array. The push() method adds an element at the end of the array. 
//push()
const numsPush = [1,2,3,4,5,6,7,8];
numsPush.push(9);
console.log("push()",numsPush);
 
//*******************************************************          2  **/
//you want to add an element to the beginning of the array, you'll need to use the unshift() method.
//unshift()
const numsUnshift = [1,2,3,4,5,6,7,8];
numsUnshift.unshift(9);
console.log("unshift()",numsUnshift);

//How to Remove Elements from an Array in JS

//*******************************************************          3  **/
// pop() it removes an element from the end of the array. 
//pop()

const numsPop = [1,2,3,4,5,6,7,8];
numsPop.pop();
console.log("Pop()",numsPop);
 //*********************************                        4  **/
 //Use the shift() method to remove an element from the beginning of an array. 
 const numsshift = [1,2,3,4,5,6,7,8];
numsshift.shift();
console.log("shift()",numsshift);

//How to Copy and Clone an Array in JS

//**********************************                         5  **/
//You can copy and clone an array to a new array using the slice() method. Note that the slice() method doesn't change the original array. Instead, it creates a new shallow copy of the original array.
//       /////////////////////////////         slice()                //////////////////////
const salad = [11,22,33,44,55];
const saladCopy = salad.slice();
console.log("Using slice",saladCopy);
// Another way is Spred operater for With the spread operator, we can create a clone/copy of an existing array.
const salad1 = [11,22,33,44,55];
const saladCopy1 = [...salad1];
console.log("Using Spred Operater",saladCopy1);

//***********************************                            6  **/
//The concat() array method
//The concat() method merges one or more arrays and returns a merged array. It is an immutable method. This means it doesn't change (mutate)
const first1 = [1, 2, 3];
const second2 = [4, 5, 6];

const merged = first1.concat(second2); //merged 
console.log(merged); // [1, 2, 3, 4, 5, 6]

const first3 = [1, 2, 3];
const second3 = [4, 5, 6];
const third = [7, 8, 9];

const merged2 = first3.concat(second3, third);

console.log(merged2); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

//*****************************                                     7  **/
//The join() array method
//The join() method joins all the elements of the array using a separator and returns a string. The default separator used for joining is comma(,).
const emotions = ['🙂', '😍', '🙄', '😟'];

const joined = emotions.join();
console.log(joined); // "🙂,😍,🙄,😟"
//You can pass a separator of your choice to join the elements. Here is an example of joining the elements with a custom separator:
const joined1 = emotions.join('<=>');
console.log("Join()",joined1); // "🙂<=>😍<=>🙄<=>😟"
//***********************************                               8  **/
//The fill() array method
//The fill() method fills an array with a static value. You can change all the elements to a static value or change a few selected items. Note that the fill() method changes the original array.
const colors = ['red', 'blue', 'green'];

colors.fill('pink');
console.log(colors); // ["pink", "pink", "pink"]

const colors1 = ['red', 'blue', 'green'];
colors1.fill('pink', 1,3); // ["red", "pink", "pink"]
console.log("Fill()",colors1);
//*****************************************                         9**/
//The includes() array method
//You can determine the presence on an element in an array using the includes() method. If the element is found, the method returns true, and false otherwise.
const names = ['tom', 'alex', 'bob', 'john'];

names.includes('tom'); // returns true
names.includes('july'); // returns false
console.log("includes()",names);
//****************************************************              10 **/
//The indexOf() array method
//You may want to know the index position of an element in array. You can use the indexOf() method to get that. It returns the index of the first occurrence of an element in the array. If an element is not found, the indexOf() method returns -1.
const names1 = ['tom', 'alex', 'bob', 'john'];

names.indexOf('alex'); // returns 1
names.indexOf('rob'); // returns -1
//******************************************************           11**/
//The reverse() array method
//As the name suggests, the reverse() method reverses the elements' positions in the array so that the last element goes into the first position and the first one to the last.

const names2 = ['tom', 'alex', 'bob'];

names2.reverse(); // returns ["bob", "alex", "tom"]
//*******************************************************          12  **/
//The sort() array method
//The sort() method is probably one of the most often used array methods. The default sort() method converts the element types into strings and then sorts them. The default sorting order is ascending. The sort() method changes the original array.
const names3 = ['tom', 'alex', 'bob'];

names3.sort(); // returns ["alex", "bob", "tom"]
//ascendingComp
var numbers5 = [2,5,6,0,9,4,3];
numbers5.sort((a, b) => (b-a));
//For descending order, do this:
var numbers5 = [2,,5,6,0,9,4,3];
numbers5.sort((a, b) => (b-a));
//*******************************************************          13  **/
//The splice() array method
//The splice() method helps you add, update, and remove elements in an array. This method may be a bit confusing at the beginning, but once you know how to use it properly, you will get it right.
const names4 = ['tom', 'alex', 'bob'];

names4.splice(1, 0, 'zack');

console.log(names4); // ["tom", "zack", "alex", "bob"]
//*******************************************************          14  **/
//The filter() array method
//The filter() method creates a new array with all the elements that satisfies the condition mentioned in the function. Let's find the student who is female. So the filter condition should be that the gender is equal to 'F'.
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result);// expected output: Array ["exuberant", "destruction", "present"]
//*******************************************************          15  **/

//The map() array method
//The map() method creates a new array by iterating through the elements and applying logic we provided in the function as an argument. We'll create a new array of full names of all the students in the students array.

const arrayDta = [1, 4, 9, 16];

// Pass a function to map
const map1 = arrayDta.map(x => x * 2);

console.log("Maping",map1);// expected output: Array [2, 8, 18, 32]
//*******************************************************          16  **/
//The reduce() array method
//The reduce() method applies a reducer function on each of the array elements and returns an output value.

const Mynumbers = [1, 2, 3, 4, 5, 6];

function sum_reducer(accumulator, currentValue) {  //normal function
  return accumulator + currentValue;
}

let sum = Mynumbers.reduce(sum_reducer);
console.log(sum); // 21

// using arrow function
let summation = Mynumbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
console.log(summation); // 21
//*******************************************************          17  **/
//The some() array method
//The some() method returns a boolean value (true/false) based on at least one element in the array passing the condition in the function.
var arrydta = [20,10,30,40];
arrydta.some(function(vale,index){
    return vale > 20
});  // out put will be True
//*******************************************************          18  **/
//The find() array method
//filter(-), which is used to find an element in the array, based on condition.
//If condition satisfied, it returns an element.
//If condition not satisfied,it returns undefined.
var array=[10,20,30];
array.find(function(value,index){      //Result: 20
return value == 20
})

array.find(function(value,index){       //Result: undefined
return value == 25
})

//*******************************************************          19  **/
//The every() array method
//every(-), which is used to check array elements based on condition, which return boolean value.
//If all elements in the array,satisfied your condtion then returns true.
//If minimum one element in the array, is not satisfied your condtion then returns false.
var array=[10,20,30];
array.every(function(value,index){ //Result: true
return value > 5
})

array.every(function(value,index){    //Result: false
return value > 15
})


//Array Destructuring in JavaScript       ///////////////////////         *********** Array Destructuring in JavaScript
console.log("******* Array Destructuring in JavaScript *******");

//we have some new syntax to extract multiple properties from an array and assign them to variables in one go. It is handy to help you keep your code clean and concise. This new syntax is called destructuring syntax.
let veg = ["tomato", "mushroom", "carrot"];
console.log(veg);
// Destructuring Them
let [vegi1, vegi2, vegi3] = ["tomato", "mushroom", "carrot"];
console.log(vegi1);
console.log(vegi2);
console.log(vegi3);
//How to Assign a Default Value to a Variable
let [vegi4, vegi5="tomato"] = ["mushroom"]; // using this Automatic vegi4 will take the value mushroom
console.log(vegi4,vegi5);
// How to Skip a Value in an Array
let [vegi6, ,vegi7] = ["tomato", "mushroom", "carrot"];//Automatic mushroom will Skip But need to give comma -> ,,
console.log(vegi6,vegi7);

//Nested Array Destructuring in JS
//In JavaScript, arrays can be nested. This means that an array can have another array as an element. Array nesting can go to any depth.

let fruits = ['Apple', 'Pinaple', 'Banana', 'Watermilon', ['graps', 'carrot', 'cocounat']]; // Inside one array another array is Nested Array
 // for this Destructuring 
 const Needfruit = fruits[4]; // out put will be  ['graps', 'carrot', 'cocounat'] 
 console.log(Needfruit);
 const carrot = Needfruit[1]; //if we need only carrot then
 console.log(carrot);
//In other way 
console.log(fruits[4][1]); //fruits[4][2]; using this also we can find the Data
//You can also access it using the destructuring syntax, like this:
let [,,,,[,,cocounat]] = ['Apple', 'Pinaple', 'Banana', 'Watermilon', ['graps', 'carrot', 'cocounat']]; // we can get cocounat

// *********** How to Use the Spread Syntax and Rest Parameter in JavaScript **********

//For the rest parameter, the ... appears on the left side of the destructuring syntax.
//for the spread syntax, the ... appears on the right side of the destructuring syntax.

//How to Use the Rest Parameter in JS
//With Rest Parameter, we can map out the left elements of an array in a new array. The rest parameter must be the last variable in the destructuring syntax.
const [tomato, mushroom, ...rest] = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];

console.log(tomato); // '🍅'
console.log(mushroom); // '🍄'
console.log(rest); // ["🥦", "🥒", "🌽", "🥕", "🥑"]

//How to Use the Spread Operator in JS
//With the spread operator, we can create a clone/copy of an existing array like this:
const saladata = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];

const saladCloned = [...saladata];
console.log(saladCloned); // ["🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑"]

saladata === saladCloned // false

//How to Swap Values with Destructuring
//We can swap the value of two variables easily using the array destructuring syntax.
let first = '😔';
let second = '🙂';
[first, second] = [second, first];

console.log(first);  // '🙂'
console.log(second); // '😔'

//How to Merge Arrays
//We can merge two arrays and create a new array with all the elements from both arrays. Let's take two arrays — one with a couple of smiley faces and another with a few veggies.

const emotion = ['🙂', '😔'];
const veggies = ['🥦', '🥒', '🌽', '🥕'];
// Merge Those Arrays
const emotionalVeggies = [...emotion, ...veggies];
console.log(emotionalVeggies); // ["🙂", "😔", "🥦", "🥒", "🌽", "🥕"]


