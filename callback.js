//CALLBACKS
function abc(welcome,callback){
    setTimeout(function()
    {
        console.log(welcome)
        callback();

    },3000)//seconds

}
function xyz(){
    console.log("hello");
}

abc("hi",xyz)