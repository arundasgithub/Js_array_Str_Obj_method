console.log("*******************  STRING METHODE       **************************");
console.log("*******************  STRING METHODE       **************************");

//******************************************   String Methode  *************************************************** *//

//**************************************  1 */
//length
//length property is used to get the length of string.
var name="Arun"
console.log(name.length); //Result: 4
//*************************************     2 */
//indexOf(-)
//indexOf(-) , it gives an starting index of charactor(s) in the string.
//It take one arguement.
//Using indexOf(), we can check charactor(s) is there or not in the string. If there it return that charactor(s) starting index, if not it returns -1.
var name="sachin";
name.indexOf('ch'); //Result: 2
name.indexOf('z');  //Result: -1
//Note: If you observe above one, if the charactor(s) is there it return that starting index of the charactor(s), if not there, it always returns -1.
//Return type: number.
//*************************************     3 */
//lastIndexOf(-)
//lastIndexOf(-) , it gives last matching charactor(s) index, in the string.
//It take one arguement.
var name="sachin tendulkar";
name.lastIndexOf('a');//Result: 14
//Return type: number.
//*************************************     4 */
//includes(-)
//Using includes(), we can check charactor(s) is there or not in the string. If there it return true, if not it returns false.
//It take one arguement.
var name="sachin";
name.includes('ch');////Result: true
name.includes('z');//Result: false
//Note: If you observe above one, if the charactor(s) there it returns true, if not it returns false.
//Return type: boolean.
//*************************************     5 */
//chartAt(-)
//chartAt(-) ,which gives the charactor at that positions.
var name="sachin";
name.charAt(2); //Result: c
//*************************************     6 */
//charCodeAt(-)
//charCodeAt(-) ,which gives the ASCII value of charactor at that positions.
var name="sachin";
name.charCodeAt(2); //Result:115
//*************************************     7 */
//startsWith(-)
//startsWith(-) ,which is used to check that string is starts with given charactor(s).
//It returns boolean value
//It check for case sensitive.
var name="sachin";
name.startsWith('sa'); //Result:true
var name="sachin";
name.startsWith('Sa'); //Result:false
//*************************************     8 */
//endsWith(-)
//endsWith(-) ,which is used to check that string is ends with given charactor(s).
//It returns boolean value
//It check for case sensitive.
var name="sachin";
name.endsWith('in'); //Result:true
var name="sachin";
name.endsWith('In'); //Result:false
//*************************************     9 */
//concat(--)
//concat(--), which is used to combine two strings.
var name1="sachin"; 
var name2="dhoni"; 
var results=name1.concat(name2); 
console.log(results); // Result: sachindhoni
//*************************************     10 */
//slice(-,-)
//slice(-,-), which is used to get the part of a string
//slice(-,-), take 2 arguements, whose types are number.
//First arguement represents your starting index, from there we can take n(difference of first and second arguement) charactor(s).
//In slice method, first arguement always less than second arguement.
var name='sachin'
name.slice(1,3);//Result:"ac"'
name.slice(3,1);//Result:""
//*************************************     11 */
//substring(-,-)
//substring(-,-), which is used to get the part of a string
//substring(-,-), take 2 arguements, whose types are number.
//First arguement represents your starting index, from there we can take n(difference of first and second arguement) charactor(s).
var name='sachin'
name.substring(1,3);//Result:"ac"
name.substring(3,1);//Result:"ac"
//*************************************     12 */
//substr(-,-)
//substr(-,-), which is used to get the part of a string
//substr(-,-), take 2 arguements, whose types are number.
//First arguement represents your starting index, from there we can take n(second arguement) charactor(s).
var name='sachin'
name.substr(1,3);
console.log("substr",name.substr(1,3))//Result:"ach"
//*************************************     13 */
//toUpperCase()
//toUpperCase(), which is used to convert your string into uppercase letters.
var name='sachin'
name.toUpperCase();
console.log("toUpperCase",name.toUpperCase());//Result:"SACHIN"
//*************************************     14 */
//toLowerCase()
//toUpperCase(), which is used to convert your string into lowercase letters.
var name='SACHIN'
name.toLowerCase();
console.log("toLowerCase",name.toLowerCase())//Result:"sachin"
