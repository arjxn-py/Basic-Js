// console.log("Hello I am Learning Javascript.")

// var myName = 'Arjun';
// var myAge = 19;
// var my_name = 'arjun';
// var _last__name = 'Verma';

// console.log(myName);
// console.log(myAge);
// console.log(my_name);
// console.log(_last__name);

// console.log(typeof(myAge));

// console.log(10 + "20");
// console.log(9 - "5");
// console.log("Java" + "Script");
// console.log(" " + " ");
// console.log("Arjun" - "Verma");
// console.log(true + true);
// console.log(true+false);
// console.log(false - true);
// console.log(NaN === NaN);

// a = 15;
// console.log(++a);
// console.log(typeof(a));

// console.log("Hello"+"World");

// Swapping Two Numbers
// var a = 20;
// var b = 30;
// var c;
// c = b;
// b = a;
// a = c;
// console.log(a);
// console.log(b);


// // Swapping Two variables without using third variable
// var a = 20;
// var b = 30;

// a = a + b; //a = 50
// b = a - b; //b = 20
// a = a - b; //a = 30

// console.log(a);
// console.log(b);

// var year = 2100;

// if(year%4 == 0 && year%100 != 0){
//     console.log("Yes");
// }
// else if(year%4 == 0 && year%100 == 0 && year%400 != 0){
//     console.log("No");
// }
// else if(year%4 == 0 && year%400 == 0){
//     console.log("Yes");
// }
// else{
//     console.log("No");
// }

// // Falsy Values
// if(n = true){
//     console.log("hue hue hue");
// }
// else{
//     console.log("sup");
// }

// //Ternary Operators
// var age = 19;
// console.log((age>=18)? "Can Vote":"Cant Vote");

// // Switch Case
// var area = 'rectangle';
// var pi = 3.14 , l = 5 , b = 4 , r = 7;

// switch (area) {
//     case 'circle':
//         console.log("The area of Circle is : " + pi*r**2 + " metre square");
//         break;
//     case 'triangle':
//         console.log("The area of Triangle is : " + (l*b)/2 + " metre square");
//         break;
//     case 'rectangle':
//         console.log("The area of Rectangle is : " + l*b + " metre square");
//         break;

//     default:
//         console.log("Please Enter Valid Data");
//         break;
// }


// Loops

// // while loop

// var n = 1;
// while (n<=10) {
//     console.log(n*8);
//     ++n;
// }

// // do while loop
// var n = 1;
// do{
//     console.log(n + " * 8 = "+ n*8);
//     n++;
// }while (n<=10)

// // for loop 

// for(n = 1; n <=10 ; n++){
//     console.log("8 * "+n + " = " + n*8);
// }


// // ********************** Functions **************************

// function sum(a , b) {
//     var a , b;
//     console.log("Sum = " , a+b);
// }
// sum(4,6)

// total = function(a , b){
//     return a + b;
// }
// console.log(total(5,6)); 
// console.log(total); 

// // *****************   ECMA Script   ****************


// let & const are block level elements while var is an element with global scope


// let name = "Arjun";
// if (true) {
//     let surname = "Verma";
//     console.log(name);
//     console.log(surname);
// }
// console.log(surname);             // wil show error


// Template Literals   ::: Formatted String


// for(n = 1; n <=10 ; n++){
//     // console.log("8 * "+n + " = " + n*8);
//     console.log(`8 * ${n} = ${8*n}`);
// }


// // default parameters

// product = function(a , b = 1){
//     return a*b;
// }
// console.log(product(3,4));   //   12
// console.log(product(3));     //   3

// // fat arrow function (Cannot call a function before definition)

// // console.log(product(5,4));  //  will show error.

// const product = (a,b) => {
//     return `The product of given two numbers is ${a*b}`;
// }
// console.log(product(5,4));

// // ***************  Single Line Function with Fat Arrow ****************
// const product = (a,b) => `The product of given two numbers is ${a*b}`
// console.log(product(4,8));

// *************************** ARRAYS ******************************
// let brother = ['Arjun','Nakul','Rohit'];
// console.log(brother[0]);

// // length property of an array
// console.log(brother.length);            // 3



// Traversing the array through for loop

// ***********            for  || for..in || for..of     loop ***********

// let brother = ['Arjun','Nakul','Rohit'];

// // for loop
// for (let i = 0; i < brother.length; i++) {
//     const element = brother[i];
//     console.log(element);
// }

// // for in loop
// for(let i in brother){
//     console.log(i);
// }

// // for of loop 
// for(let i of brother){
//     console.log(i);
// }

// foreach loop
// let brother = ['Arjun','Nakul','Rohit'];


// Traditional Foreach

// brother.forEach(function(element,index,array){
//     console.log(element + " is at " + index + " Index");
// })

// Foreach using fat arrow

// brother.forEach((element,index,array) => {
//     console.log(element + " is at " + index + " Index");
// });

// ********** Operations on Arrays **********

// const myNames = ["Arjun","Nakul","Rohit","Verma","Nakul"];

// indexof() 
// console.log(myNames.indexOf("Nakul" , 0));

// lastIndexOf()  ...  returns index from last
// console.log(myNames.lastIndexOf("Nakul",3));

// includes()     ...  returns boolean value
// console.log(myNames.includes("Rohit"));
// console.log(myNames.includes("AAA"));



// // filtering in Arrays     // array.find(()=>{})

// const nums = [100,400,300,200,600];
// // const found = nums.find((element,index,array) => {
// //     return element<400;
// // })

// const found = nums.filter((elements, index , array)=>{return elements<400;})
// console.log(found);

// // Sorting in Arrays       // sort()     *** Does function correctly on strings
// const nums = [100,400,300,200,600];
// console.log(nums.sort());

// const alphas = ["a","y","e","p","v","k","c","u","g","h"]
// console.log(alphas.sort());

// // Modifying Arrays
// const months = ["Jan","March","April","June","July"];
// console.log(months);

// // months.push("Dec");
// // console.log(months);


// const months = ["Jan","march","April","June","July"];
// console.log(months.sort());


// // *********  sort() doesnt produce correct results with integers
// const numbers = [ 1 , 3 , 100 , 460 , 1000 , 3000 , 70];
// console.log(numbers.sort());