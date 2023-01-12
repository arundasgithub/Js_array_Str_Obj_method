// Sample Console For Javascript
console.log("*********** HELLO JAVASCRIPT ARRAY INTRO ***********");

//A pair of square brackets [] represents an array in JavaScript. All the elements in the array are comma(,) separated. 
//1
//  Types Of Creating Array
 var array = [];  // Create a empty Array
 array.name = "rrr";  // Using array.name We can Give a name data into That Empty Array;
 array.id=121;
 console.log(array);

 //2

let books = ["The Key","The World","The Move"];
console.log(books);

//3
// This code we can write on Console Only
new Array();  // This one is a Creating Empty Array
new Array(3); // This one is a giveing lenght of that empty array 
//4
let food = new Array("piza","ice cream","salad"); // This way also we can Creat Array
console.log(food);
//5
// using Array.Of() we can creat A Array
let myFoods = Array.of("piza","Chokolate","Cool drinks"); // This is the another Way of craeting Array
console.log(myFoods);

//ex
let demo = Array.of(5);
console.log(demo);

//6
// using split() method we can Do Like we have a string using split() we can seperate this and it
//will return a Array
const string ="My name is Arun";
console.log(string.split());
console.log(string);
// And if we Use split("") Then it will separate All the characters.
console.log(string.split(""));

//How to Determine if a Value is an Array in JS
//You can determine if a value is an array using the Array.isArray(value) method. The method returns true if the passed value is an array.
// We Can Check The Provided data is an Array or not
//Array.isArray();

var Data = [12,22,33,44,55];
var CheckArray = Array.isArray(Data);
console.log("isArray",CheckArray); // if its Return True then its Array other wise It's not Array.

//In function way
function checkArray1(input){
    return Array.isArray([2,2,1,1,3,3]);
}







