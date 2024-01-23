// //CALLBACKS
// function abc(welcome,callback){
//     setTimeout(function()
//     {
//         console.log(welcome)
//         callback();

//     },3000)//seconds

// }
// function xyz(){
//     console.log("hello");
// }

// abc("hi",xyz)

//CALLBACKS EXAMPLE
//FORM SUBMISSION


// function ButtonClick(clicked,db){
//     setTimeout(function()
//     {
//         console.log(clicked)
//         db();
//     },2000)
// }

// function done()
// {
//     console.log(("Submitted successfully"))
// }

// ButtonClick("Form button clcked",done)



//example

function card(uname,un,db,db1){
    setTimeout(function()
    {
        uname();
        console.log(un)
        db();
        db1();
    },2000)
}

function user()
{
    console.log("GR")
}
function img()
{
    console.log(("Image is loaded"))
}
function like()
{
    console.log(("You like this image"))
}

card(user,"your",img,like)