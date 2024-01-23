// function isAuthenticated() {
//     return Math.random() < 1;
//     }
//     function Login() {
//     return new Promise(function (response, noresponse) {
//     setTimeout(function () {
//     if (isAuthenticated()) {
//     response("Your Authentication is Successful");
//     } else {
//     noresponse("Your Authentication is not Successful");
//     }
//     }, 1000);
//     });
//     }
//     Login()
//     .then(function (message) {
//     console.log(message);
//     })
//     .catch(function (message) {
//     console.log(message);
//     });

//Promise example
//location example

function isValid() {
    var v = "sydney"
    if (v == loc) {
        return true
    }
    else {
        return false
    }
}

function location() {
    return new Promise(
        function(response, errorMsg)
        {
        //new promise is syntax
        setTimeout(function () {
            loc = "sydney"
            console.log(loc);
            if (isValid) {
                return response("locactionFound")//function object
            }
            else {
                return errorMsg("Location is not found")
            }

        }, 2000)
    }
    )
}
location().then(
    function (response) {
        console.log(response)
    }
).catch(
    function (errorMsg) {
        console.log(errorMsg);
    }
)