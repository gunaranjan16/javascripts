//Functions
//Example 1
//function without argument and without return type

function fun1()
{
    console.log("ex")
}
fun1()
//Example 2
//function with argument and without return type
function fun2(a,b)
{
    console.log("function with argument and without return type")
    for(i=a;i<b;i++){
        if(i%2==0){
            console.log("the number "+i+"is even")
             
        }
        else{
            console.log("the number "+i+"is odd")
        }


    }
}
fun2(5,10)

//Example 3
//function with argument and with return type
function fun3(a,b){
    return a,b
}
console.log(fun3(10,5))


//Example 3
//function without argument and with return type

function fun4(){
    var a=10
    return a
}
console.log(fun4())