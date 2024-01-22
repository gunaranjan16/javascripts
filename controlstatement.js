//Looping
//for looping

//  sum=0
// for(var i=0;i<10;i++){
//     sum+= i
// }
// console.log(sum)

//while loop
// i=0
// while(i<10){
//     sum+=i
//     i++
// }
// console.log(sum)

//do while loop
i=0
do{
    console.log(i)
}while(i>0)


//example1 
// arr=[10,20,30] //----valid
// console.log(arr.length)
// for(var i=0;i<arr.length;i++){
//     console.log(arr[i])
// }

//example2
// arr=[10,20,20.5] //----valid
// console.log(arr.length)
// for(var i=0;i<arr.length;i++){
//     console.log(arr[i])
// }

//example3
// arr=[10,20,true,false] //----valid
// console.log(arr.length)
// for(var i=0;i<arr.length;i++){
//     console.log(arr[i])
// }

//example3
// arr=[10,"string",20,"kongu",true,false] //----valid
// console.log(arr.length)
// for(var i=0;i<arr.length;i++){
//     console.log(arr[i])
// }

//inf:JS CAN HOLD ALL DATATYPES INCLUDING FNS IN ARRAY VALUES


//for in
arr=[10,"string","kongu","20",true]
for( const value in arr)
{
    console.log(value)
}


//for of
arr=[10,"string","kongu","20",true]
for( const value of arr)
{
    console.log(value)
}


//example1
//for each
arr=[10,"string","kongu","20",true]
arr.forEach(value => {
    console.log(value)
});


//example2
var kongu = new Object() 
kongu["fees"] =100000
kongu["accomodation"] ="bad"
kongu["food"] ="worst"
kongu["hostel count"] =10
console.log(kongu)
//for each eg
for(const key in kongu){   //for in -- key
    console.log(key,kongu[key])
}