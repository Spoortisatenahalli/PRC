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



//Promises

// let Hell = () => {
//    setTimeout(()=>{
//        console.log("1");
//         setTimeout(()=>{
//           console.log("2");
//            setTimeout(()=>{
//               console.log("3");
//                setTimeout(()=>{
//                   console.log("4");
//                     setTimeout(()=>{
//                       console.log("5");
//                       setTimeout(()=>{
//                           console.log("6");
//                           setTimeout(()=>{
//                               console.log("7");
//                           },1000)
//                       },1000)
//                  },1000)
//              },1000)
//          },1000)   
//      },1000)
//  },1000)
// }
// Hell()     //the triangle formed is known as call back hell of pyramid of doom---it prints 1 after 1sec and so on


// function CallPromise(num){
//    return new Promise((resolve,reject)=>{
//        setTimeout(()=>{
//            console.log(num);
//            resolve('promise done')
//        },1000)
//    })
// }
// CallPromise("1").then(()=>CallPromise("2")).then(()=>CallPromise("3")).then(()=>CallPromise("4"))
// .then(()=>CallPromise("5")).then(()=>CallPromise("6")).then(()=>CallPromise("7"))


//Create a promise function accepting a argument, if yes is passed to the function then it should go to resolved state
//and print Promise Resolved,and if nothing is passed then it should go to reject state and catch the error and print Promise Rejected 

// function PrintNum(num){
//     return new Promise((resolve,reject)=>{
//        if(num%2 == 0){
//            console.log("Promise Resolved");
//        } 
//        else{
//            console.log("Promise Rejected");
//        }
//     })
// }
// PrintNum(24).then((result)=>{console.log(result);}).catch((result)=>{console.log(result);})
// PrintNum(27).then((result)=>{console.log(result);}).catch((result)=>{console.log(result);})


//Create examples to explain async await function

// function PrintLetter(alphabet){
//     return new Promise((resolve,reject)=>{
//          setTimeout(()=>{
//              console.log(alphabet);
//              resolve(alphabet)
//          },1000)
//     })
// }
// async function PrintAlphabets(){
//     await PrintLetter("A")
//     await PrintLetter("B")
//     await PrintLetter("C")
//     await PrintLetter("D")
//     await PrintLetter("E")
//     await PrintLetter("F")
// }
// PrintAlphabets()
