// let arr = [1, 2, 3, 6, 7, 8, 9];
// let len = arr.length;
// let firstnumber = arr[0];
// let lastnumber = arr[arr.length - 1]
// let all = 0
// for (i = 0; i < arr.length; i++) {
//     all += arr[i];
// }
// let allSum = (len + 1) * (firstnumber + lastnumber) / 2;
// let total = allSum - all
// console.log(total)


// var numbers = [0,1,3,4,5,7,8]; // Missing 2,6
// var missing = [];

// // Find the missing array items
// for ( var i = 0; i < numbers.length;i++) {
//     console.log(numbers[i+1])
//     console.log("next")
//     console.log(numbers[i])
//     console.log("if bloack")
//     if ( (numbers[i+1] - numbers[i]) > 1 ) {
//         missing.push( numbers[i+1] - numbers[1] );   
//     }
// }
// console.log( missing );

// if ((1)>1){
//     console.log(true)
// }else{
//     console.log(false)
// }


let arr = [1,3,4,8,12,9];
let missing=[];

for(i=0;i<arr.length;i++){
    if((arr[i+1]-arr[i])>1){
         missing.push(arr[i+1]-1)
    }
}

console.log(missing)