// //asyn dummy eg
// async function asAw() {
//     var promise = new Promise(
//         function(response) {
//             setTimeout(function () {
//                 response("Example of async/await")
//             }, 1000)

//         }
//     );
//     console.log(await promise);
// }

// asAw()


//-------------------------------------------------------------------------------------------

//EXAMPLE INSTAGRAM
async function commentValue() {
    return new Promise(
        function(commentValue)
        {
            setTimeout(function () {
                commentValue("this is 1st comment")

            }, 1000)
        }
    )
}
async function like() {
    return new Promise(
        function(likeValue)
        {
            setTimeout(function () {
                likeValue("this is 1st like icon")

            }, 1000)
        }
    )
}
async function post() {
    var post = new Promise(
        function (postResponse) {
            setTimeout(function () {
                postResponse("this is my first post")

            }, 3000)
        }
    )
    var [feed,comment,likes]=await Promise.all([post,commentValue(),like()])
    console.log(feed) //without await -->error promise is pending
    console.log(likes)
    console.log(comment)
}
post()