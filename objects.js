//Objects

//how will you declare objects
//1st way


// var customerDetails = {
//     "name": "Tamil", //key:values
//     "age" : 30, //storing it as number
//     "phone" : '9876543', //error is optional for last one
// }
// console.log(customerDetails) //why key doesnt hold any quotes("") in objects? ans=> key will not hold any quotes because quotes are inbuiltly present
// customerDetails["id"]="21ecr999"
// console.log(customerDetails)

//2nd way
// var customerDetails = {}
// customerDetails["name"]="abc"
// customerDetails["age"]="30" //storing it as string
// customerDetails["id"]="21ecr9999"
// console.log(customerDetails)


// //3rd way

// var kongu = new Object()
// kongu["fees"] =100000
// kongu["accomodation"] ="bad"
// kongu["food"] ="worst"
// kongu["HostelCount"] =10
// console.log(kongu)
// console.log(kongu.food)//printing values ny giving key as path 
// console.log(kongu["HostelCount"])

var kongu = new Object() 
kongu["fees"] =100000
kongu["accomodation"] ="bad"
kongu["food"] ="worst"
kongu["hostel count"] =10
console.log(kongu)
console.log(kongu.food)