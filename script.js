// 1)
//    function counter(){
//     var counter = 0;

//     function IncreaseCounter() {
//         return counter += 1;
//     };

//     return IncreaseCounter;
// }

// var counter = counter();
// alert(counter());
// alert(counter());
// alert(counter());
// alert(counter());
// solution -------->4 time alert is shown with counter value 1,2,3,4 respectivly

// 2)
// let count = 0;
// (function () {
//     if (count === 0) {
//       let count = 1;
//       console.log(count); // What is logged?
//     }
//     console.log(count); // What is logged?
//   })();
// solution ------->1 0

// 3)
function ans3Fun(){
    let ans3=document.getElementById('ans3');
    for (var i = 0; i < 3; i++) {
        setTimeout(function log() {
            ans3.innerHTML+=`<div> ${i} </div>`; // What is logged?
        }, 1000);
      }
}


//   solution ----->after 1 second 3 print 3 times

// 4)Write a code to calculate area of a rectangle using inner function. In this case outer function should accept parameter length and inner function should accept parameter breadth.

let Length =document.getElementById('inputAns4Length');
let Breadth =document.getElementById('inputAns4Breadth');
let len =document.getElementById('l');
let bre =document.getElementById('b');
let ans4 =document.getElementById('ans4');
function areaOfRectangle(){
    function findArea(l) {
        return function area(b) {
            ans4.innerHTML= `${Number(l) * Number(b)}`;
            bre.innerHTML=b;
            len.innerHTML=l;
        };
      }
      const func1 = findArea(Length.value);
      func1(Breadth.value);
      
}


// 5)Take a variable in outer function and create an inner function to increase the counter every time it is called
let counterAns5=document.getElementById('counterAns5');
function counter(){
    var counter = 0; 
    function IncreaseCounter() {
        counterAns5.innerHTML= ++counter;
    };
    return IncreaseCounter;
}
 const func2 = counter(0);
function increasecount(){
    
     func2();
}

//6)"Print Output

// var a = 12;
// (function () {
//   alert(a);
// })();
// solution -------->12 is being alert

// 7)
// var a = 10;
// var x = (function () {
//   var a = 12;
//   return function () {
//      alert(a);
//   };
// })();
// x();
// solution -------->12 is being alert

// 8)
// var globalVar = "xyz";

// (function outerFunc(outerArg) {
//     var outerVar = 'a'; 
    
//     (function innerFunc(innerArg) {
//     var innerVar = 'b';
    
//     console.log(
//         "outerArg = " + outerArg + "\n" +
//         "innerArg = " + innerArg + "\n" +
//         "outerVar = " + outerVar + "\n" +
//         "innerVar = " + innerVar + "\n" +
//         "globalVar = " + globalVar);   
//     })(456);
// })(123);
// solution -------->outerArg = 123
// innerArg = 456
// outerVar = a
// innerVar = b
// globalVar = xyz
