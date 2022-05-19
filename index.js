function sum(a,b){
    console.log(a+b)
 }
 sum(3,4)
 
 
 
 // Create one function which takes three parameter as first name and last name and age and return the statement as "A is 99 years old"
 
 
 function threepara(fname,lname,age){
     console.log(fname+" "+lname+" "+"is"+" "+age+" "+"years"+" "+"old")
 }
 threepara("wami","que" , 10)
 
 
 // Create one arrow function
 let greets=()=>console.log("wamique")
 greets()
 
 
 
 // "Print output: 
 var x = 21;
 var girl = function () {
     console.log(x);
     var x = 20;
 };
 girl ();
 
 // output
 // undefined
 // "Print output: 
 var x = 21;
 girl ();
 console.log(x)
 function girl() {
     console.log(x);
     var x = 20;
 };
 
 
 // output
 // 21
 
 
 
 // "Print output
 
 var x = 21;
 a();
 b();
 console.log(a);
 function a () {
     
     var x = 20;
 console.log(x);
 };
 
 function b () {
     
     var x = 40;
 console.log(x);
 };
 // output
 // 20,40,function a(){
 //     var x=20;
 //  console.log(x);
 // }
 // "Print output
 
 var x = 21;
 a();
 b();
 console.log(a);
 a = function() {
     
    x = 20;
   console.log(x);
 };
 b = function() {
     
     x = 40;
    console.log(x);
 };
 // output
 // // 20,40,function a(){
 //     var x=20;
 //  console.log(x);
 // }
 // "Print output
 
 
 // Write a function that accepts parameter n and returns factorial of n
 
 function factorial(n){
     if(n == 0 || n == 1){
         return 1;
     }else{
         return n * factorial(n-1);
     }
 }
 result=factorial(4);
 console.log(result);




//Closures



//    function Counter(){
//     var counter = 0;

//     function IncreaseCounter() {
//         return counter += 1;
//     };

//     return IncreaseCounter;
// }

// var counter = Counter();
//  alert(counter()); 
// alert(counter());
// alert(counter());
// alert(counter());
// output
// 1,2,3,4

let count = 0;
(function immediate() {
  if (count === 0) {
    let count = 1;
    console.log(count); // What is logged? 1
  }
  console.log(count); // What is logged? 0
})();



for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log(i); // What is logged? 3 
    }, 1000);
  }

//   Write a code to calculate area of a rectangle using inner function. In this case outer function should accept parameter length and inner function should accept parameter breadth.

function OuterFunction() {

    var  length= 10;

    function InnerFunction() {
        var width=2;
        var area;
        console.log(area=length*width);
    }

    return InnerFunction;
}
var innerFunc = OuterFunction();

innerFunc(); 


// Print Output

var a = 12;
(function () {
  alert(a);
})();
// output
// 12


var a = 10;
var x = (function () {
  var a = 12;
  return function () {
    alert(a);
  };
})();
x();
// output
// 12

var globalVar = "xyz";
(function outerFunc(outerArg) {
    var outerVar = 'a';
    
    (function innerFunc(innerArg) {
    var innerVar = 'b';
    
    console.log(
        "outerArg = " + outerArg + "\n" +
        "innerArg = " + innerArg + "\n" +
        "outerVar = " + outerVar + "\n" +
        "innerVar = " + innerVar + "\n" +
        "globalVar = " + globalVar);
    
    })(456);
})(123);

// outerArg = 123
// innerArg = 456
// outerVar = a
// innerVar = b
// globalVar = xyz
