// //VARIABLE HOISTING


// console.log(a) //referenceError-ITS NOT DEFINED
// var a=10 //undefined
// //-----------------------
// var b
// console.log(b)//undefined
// //-----------------------
// console.log(a) //referenceError
// let a=10 //referenceError-CANNOT ACCESS A BEFORE INITIALIZATION


//FUNCTIONAL HOISTING
clg()
console.log(a)
function clg(){
    var a=1// if declared inside function it cant be viewed outside function
   // console.log("svb")
}
