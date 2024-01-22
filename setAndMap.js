//obj= new Object()
//set---> collection of unique data and values
//syntax---> variableNamw =newSet()
//variableName.add(value)



// //1st eg
// setExample = new Set("aiadmk","njp","cong")
// console.log(setExample)//only 1st element is op -->aiadk
// setExample = new Set(["aiadmk","njp","cong"])
// console.log(setExample)
// setExample.add("dmk")
// setExample.add("aiadmk")//it wont add the duplicate
// console.log(setExample)

// //using for in loop
// for (key in setExample)
// {
//     console.log(key)
// }//no output for set in for-in loop

// //using for of loop
// for (element of setExample)
// {
//     console.log(element)
// }





//map-->key value pair so 2 parameter
//variableName= new Map()
// variableName.add("12")

// mapEg=new Map([
//     ["id","21ecr068"],
//     ["id1","er"]
// ])
// console.log(mapEg)


// //using for in loop
// for (key in mapEg)
// {
//     console.log(key)
// }//no output for set in for-in loop


//  //using for of loop
// for (element of mapEg)
// {
//     console.log(element)
// }


// console.log(mapEg.has("id1"))

Info=new Map([
    ["id","21ecr068"],
    ["name","ABC"],
    ["Age","00"],
])
console.log(Info)
Info.set("phone","34567")//to add 
console.log(Info)
Info.delete("phone","34567")
console.log(Info)

