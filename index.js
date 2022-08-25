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


// ******************* CRUD - Create , Read , Update & Delete in Javascript ******************

// push and pop
// push(x) to enter an element at last index and pop() to delete an element at the last index

// const animals = ["pigs","goat","sheep"];
// console.log(animals);
// let a = animals.push("chicken");
// console.log(animals);
// console.log(a);            // pop(x) returns the updated length of an array  
// let b = animals.pop();
// console.log(animals);
// console.log(b);            // pop() returns the deleted element.
// animals.pop();
// console.log(animals);
// animals.push("cats","dogs");
// console.log(animals);        // can also add multiple elements with push


// shift and unshift
// shift() to delete an element from first index and unshift() to add an element at the first index

// const animals = ["pigs","goat","sheep"];

// let a = animals.shift();
// console.log(animals);
// console.log(a);          // returns the deleted element

// let a = animals.unshift("chicken");
// console.log(animals);
// console.log(a);             // returns the length of the updated array


// *************splice() method*************
// splice() takes 3 arguments
//  splice(index+1 , no. of elements to be deleted , elements to be added)

// const months = ["Jan","march","April","June","July"];

// Adding an element at last index
// // months.splice(5,0,"Dec");
// a = months.splice(months.length,0,"Dec");
// console.log(months);        // returns [ 'Jan', 'march', 'April', 'June', 'July', 'Dec' ]

// splice returns an array of deleted elements
// console.log(a);             // will return [] because no element was deleted


// b = months.splice(5,1)          // will pass only two arguments if only want to delete an element
// console.log(months);            // returns [ 'Jan', 'march', 'April', 'June', 'July' ]
// console.log(b);                 // returns [ 'Dec' ]


// Automatic updation using splice()

// const months = ["Jan","march","April","June","July"];

// Lets update march -> March

// a = months.indexOf("march");
// if (a != -1) {
//     b = months.splice(a,1,"March")
//     console.log(months);
//     console.log(b);
// }else{
//     return "No such data Found";
// }



// Lets delete June from the array

// a = months.indexOf("June");
// if (a != -1) {
//     b = months.splice(a,1);
//     console.log(months);
//     console.log(b);
// }

// *******************************************
// map() , reduce() and filter()      methods

// const myArray = [1, 4 , 3 , 8 , 2];
// console.log(myArray);

// let newArray = myArray.map((element,index,array)=>{
//     return element+5;
// })

// console.log(newArray);



// myArray.forEach((element,index,array)=>{
//     console.log(element+1);                          // revised foreach
// })


// let arr = [25,36,49,64,81];

// // P.S - to find out the square roots of the elements in the given array

// let sqrt = arr.map((element , index , array)=>{
//     return element**0.5;
// });

// console.log(sqrt);            // returns [ 5, 6, 7, 8, 9 ]


// let arr = [2 , 3 , 4 , 6 , 8];

// // P.S. - multiply the array by 2 and return only those elements those are greater than 10

// brr = arr.map((element,index,array)=>{
//     return element*2;
// }).filter((element,index,array)=>{
//     return element>10;
// })

// console.log(brr);




// // ***************** reduce()  method ********************


// There are many applications of reduce() method but mainly it is used to decompose a 2D or 3D array into a single dimensional array.

// reduce() takes 4 arguments i.e. reduce(Accumulator , element , index , array)

// let arr = [ 2 , 4 , 7 , 5 , 3];

// let sum = arr.reduce((accumulator , element , index , array)=>{
//     return accumulator+=element;
// })

// console.log(sum);                    // returns 21

// Along with these 4 arguments we can also define the initial value of the accumulator to work with

// let arr = [ 2 , 4 , 7 , 5 , 3];

// total = arr.reduce((accumulator,element,index,array)=>{
//     return accumulator+=element;
// },100)                                  // defined the initial value as 100

// console.log(total);                     // returns 121


// Let's do some more chaining

// let arr = [ 2 , 4 , 7 , 5 , 3];                          // defined an array

// let total = arr.map((element,index,array)=>{                 
//     return element*10;                                   // used map() to multiply each element by 10
// }).filter((element,index,array)=>{
//     return element<=50;                                  // filtered elements comparing with 50
// }).reduce((accumulator,element,index,array)=>{                   
//     return accumulator+=element;                         // added all those filtered elements
// }, 100)                                                  // also gave an initial value as 100

// console.log(total);


// How to flatten an array?     How to decompose an array to 1D?

// Defining a 2D array or a nested array or an array inside an array


// let pairs = [["papa","mummy"],["beta","beti"],["bhai","behen"]];
// console.log(pairs);

// let flat = pairs.reduce((accumulator,element,index,array)=>{
//     return accumulator.concat(element);
// })

// console.log(flat);                                      // returns [ 'papa', 'mummy', 'beta', 'beti', 'bhai', 'behen' ]

// lets try on a 3D array 

// let arr = [[["a","z"],["b","y"]] , [["c","x"],["d","w"]] , [["e","v"],["f","u"]]]
// // console.log(arr);                   // returns [
//                                     //         [ [ 'a', 'z' ], [ 'b', 'y' ] ],
//                                     //         [ [ 'c', 'x' ], [ 'd', 'w' ] ],
//                                     //         [ [ 'e', 'v' ], [ 'f', 'u' ] ]
//                                     //         ]

// let flat1 = arr.reduce((accumulator,element,index,array)=>{
//             a = accumulator.concat(element);
//             return a;   // returns [
//                         //     [ 'a', 'z' ],
//                         //     [ 'b', 'y' ],
//                         //     [ 'c', 'x' ],
//                         //     [ 'd', 'w' ],
//                         //     [ 'e', 'v' ],
//                         //     [ 'f', 'u' ]
//                         // ]
              
// })                      

// // Multi reduce methode used
// // First 3D was converted to 2D and then 2D to 1D

// let flat2 = a.reduce((accumulator,element,index,array)=>{               
//     return accumulator.concat(element);
// });

// console.log(flat2);              // prints [
//                                  //           'a', 'z', 'b', 'y',
//                                  //           'c', 'x', 'd', 'w',
//                                  //           'e', 'v', 'f', 'u'
//                                  //       ]






// *************************** STRINGS ********************************

// let name = "Arjun Verma"
// console.log(name.length);      // returns 11  contains space too
// let mysurname = new String("Verma");
// console.log(mysurname);             // returns [String: 'Verma']

// Escape Character   ---  \ is an escape character

// let clg = "Cluster "Innovation" Centre"      //returns error
// let clg = "Cluster \"Innovation\" Centre"
// console.log(clg);                               //returns Cluster "Innovation" Centre


// also we can use alternate quotes 

// let clg = 'Cluster "Innovation" Centre';
// console.log(clg);                                //returns Cluster "Innovation" Centre


// finding a string inside a string (returns a single index number)

// let str = "The name of college is Cluster Innovation Centre";
// let a = str.indexOf("Cluster")
// console.log(a);                // returns 23

// let a = str.indexOf("Cluster",24);
// console.log(a);                 // returns -1 as we are starting the search from 24 index.


// let a = str.lastIndexOf("e");
// console.log(a);               // returns 47   i.e. From last

// search()  about same as indexof()

// let a = str.search("Cluster");
// console.log(a);                 // also returns 23 but cannot take multi arguments as from where to start


// ********* Extracting String Parts from String *********
// we have 3 methods : slice(start,end) , substring(start,end) , substr(start,length)

// slice()

// let str = "Cluster Innovation Centre"
// console.log(str.slice(0,6));   // returns Cluste
// console.log(str.slice(0,-2));  // returns full string -2 elements


// substring()      it doesn't support negative indices

// let str = "Cluster Innovation Centre";

// console.log(str.substring(0,6));       // returns Cluste
// console.log(str.substring(0,-2));      // returns NOTHING

// substr()         it takes second argument as length and is quite similar to the upper two but it is feasible if we want to extract a part of string from very start or end

// let clg = "Cluster Innovation Centre";
// console.log(clg.substr(0,4));       // returns Clus                     i.e. starts from 0 and returns accoring to length = 4
// console.log(clg.substr(4));         // returns ter Innovation Centre    i.e. takes start as 4 and takes length as infinity
// console.log(clg.substr(-4));        // returns ntre                     i.e. returns the last 4 elements and negative index was used


// ************** Replacing String Content *************

// replace() method
// let str = "Cluster Innovation Center Center"
// let a = str.replace("Center","Centre");
// console.log(a);                        // returns Cluster Innovation Centre Center

// Lets try replaceAll()                    successful

// let str = "Cluster Innovation Center Center"
// let a = str.replaceAll("Center","Centre");
// console.log(a);                        // returns Cluster Innovation Centre Centre  

// // ********************** Extracting String Characters **********************
// // charAt()  ...  charCodeAt()   ...  Property Index : []


// // ****** charAt() ******
// str = "Cluster Innovation Centre";
// a = str.charAt(5);                   // returns character at specified index
// console.log(a);                     //returns e


// // ****** charCodeAt() ******
// str = "Cluster Innovation Centre";
// a = str.charCodeAt(5);                   // returns unicode of the character at specified index
// console.log(a);                          // returns 101

// // Return the unicode of last character of a String
// str = "Arjun Verma";
// console.log(str.charCodeAt(str.length-1));     // returns 97

// // Property Access in a string []

// let str = "Arjun Verma";
// console.log(str[0]);                // returns A
// console.log(str[1]);                // returns r

// // ************************ Other Useful Methods With Strings ****************************

//    toUpperCase()   &    toLowerCase()

// let str = "Cluster Innovation Centre";
// console.log(str.toUpperCase());                 // returns CLUSTER INNOVATION CENTRE
// console.log(str.toLowerCase());                 // returns cluster innovation centre

// concat() method

// let a = "Arjun";
// let b = "Verma";

// console.log(a.concat(b));                           // returns ArjunVerma
// console.log(a.concat(" ",b));                       // returns Arjun Verma

// Note : It is better to use ECMA script i.e. `...` (backslash)

// c = `${a} ${b}`
// console.log(c);                                     // returns Arjun Verma

// d = `${a} with the surname ${b}`
// console.log(d);                                     // returns Arjun with the surname Verma



// // trim()
// let a = "    Arjun                     "
// console.log(a.trim());                              // returns Arjun without whitespaces
// let b = "     Arjun     Verma     "
// console.log(b.trim());                              // returns \Arjun     Verma\  and doesn't remove spaces from the middle


// Converting String into an Array       using      split()
// split(w.r.t what you want to split)

// let str = "Cluster Innovation Centre";
// console.log(str.split("")); // returns [
                            //     'C', 'l', 'u', 's', 't', 'e',
                            //     'r', ' ', 'I', 'n', 'n', 'o',
                            //     'v', 'a', 't', 'i', 'o', 'n',
                            //     ' ', 'C', 'e', 'n', 't', 'r',
                            //     'e'
                            //   ]
// console.log(str.split(" "));   // returns [ 'Cluster', 'Innovation', 'Centre' ]
  


// ********************* Date & Time in Javascript ***********************

// we need to create date and time object in order to get access to platform independent date and time
// Note: These Date & Time are subjected after 1 Jan 1970 only.

// creating date object as -  new Date()
// It takes maximum 7 arguments - Date(year,month,day,hours,minutes,seconds,milliseconds)

// let myDate = new Date();
// console.log(myDate);                        // return 2022-08-20T10:58:47.817Z
// console.log(myDate.toLocaleString());       // return 8/20/2022, 4:28:47 PM
// console.log(myDate.toString());             // return Sat Aug 20 2022 16:30:08 GMT+0530 (India Standard Time)


// Note : Doesn't Require Object
// console.log(Date.now());                    // returns 1660993390858   (Milliseconds from 1 Jan 1970 (AMAZING))



// creating date object with parameters 
// Date(year,month,day,hours,minutes,seconds,milliseconds)

// let a = new Date(2022);
// console.log(a.toLocaleString());            // returns 1/1/1970, 5:30:02 AM
// // Did not considered argument as year but milliseconds and so returned unexpected date as per milliseconds passed.

// passing month
// let b = new Date(2022,7)
// console.log(b.toLocaleString());            // returns 8/1/2022, 12:00:00 AM
// // returned 1 Aug 2021 as year and month was passed and Note: month[0-11].

// passing day
// let c = new Date(2022,7,20);
// console.log(c.toLocaleString());            // returns 8/20/2022, 12:00:00 AM

// passing hour
// let d = new Date(2022,8,20,5);
// console.log(d.toLocaleString());            // returns 9/20/2022, 5:00:00 AM

// passing minutes
// let e = new Date(2022,8,20,5,5)
// console.log(e.toLocaleString());            // returns 9/20/2022, 5:05:00 AM

// passing seconds
// let f = new Date(2022,8,20,5,5,5)
// console.log(f.toLocaleString());            // returns 9/20/2022, 5:05:05 AM

// passing milliseconds                         all seven arguments
// let g = new Date(2022,8,20,5,5,5,5)
// console.log(g.toLocaleString());            // returns 9/20/2022, 5:05:05 AM


// Creating Date object with datestring
// let a = new Date("October 17 2020");
// console.log(a.toLocaleString());            // returns 10/17/2020, 12:00:00 AM

// let a = new Date("20 Au 2021");
// console.log(a);                             // returns Invalid Date 

// let a = new Date("20 Aug 2022  11:11:11");
// console.log(a);                             // returns 2022-08-20T05:41:11.000Z
// console.log(a.toLocaleString());            // returns 8/20/2022, 11:11:11 AM


// creating objects only with milliseconds

// let a = new Date(0);
// console.log(a.toLocaleString());            // returns 1/1/1970, 5:30:00 AM

// let b = new Date(1660996757035);
// console.log(b.toLocaleString());            // returns 8/20/2022, 5:29:17 PM


// ********* Some methods of Date *********             getters & setters


// getters in Date() object

// let today = new Date();                        // without parameters it consider today's date

// console.log(today.toLocaleString());        // return 8/20/2022, 6:07:40 PM
// console.log(today.getFullYear());           // return 2022
// console.log(today.getMonth());              // return 7
// console.log(today.getDate());               // return 20
// console.log(today.getDay());                // return 6



// setters in Date() object
// returns milliseconds

// let today = new Date();
// let a = today.setFullYear(2022);
// let b = today.setMonth(4);
// let c = today.setDate(4);
// let d = today.toLocaleString();


// console.log(a);                             // returns 1661063910610
// console.log(b);                             // returns 1653115110610
// console.log(c);                             // returns 1651646310610
// console.log(d.toLocaleString());            // returns 5/4/2022, 12:08:30 PM  (The date we setted in a , b & c)



// ********* Some methods of Time *********             getters & setters


// let time = new Date();                      // Date() object instance is same for both date and time thing

// getters in Date() object for time

// console.log(time.toLocaleString());                     // returns 8/21/2022, 12:26:26 PM
// console.log(time.getTime());                            // returns 1661064986802
// console.log(time.getHours());                           // returns 12
// console.log(time.getMinutes());                         // returns 26
// console.log(time.getSeconds());                         // returns 26
// console.log(time.getMilliseconds());                    // returns 802


// setters in Date() object for time

// let time = new Date();                          
// console.log(time.setHours(5));                   // returns 1661384237966  
// console.log(time.setMinutes(5));                 // returns 1661384117966
// console.log(time.setSeconds(5));                 // returns 1661384105966
// console.log(time.setMilliseconds(5));            // returns 1661384105005

// Basic Date to String Methods

// let d = new Date();

// console.log(d.toLocaleDateString());        // returns 8/25/2022
// console.log(d.toLocaleTimeString());        // returns 8:47:27 PM
// console.log(d.toLocaleString());            // returns 8/25/2022, 8:47:27 PM
           