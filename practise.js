// // let a = ['savik','suman','rakesh','imtiyaz']

// // a.forEach(function(index,array){
// //     console.log(`${index}`)
// // })

// // a.forEach((ele,index)=>console.log(ele,index))


// // var myFriendNames = [5,7,8,9,5,6];

// // // myFriendNames.indexOf((ele)=> console.log(ele));
// // // console.log(myFriendNames.lastIndexOf("thapa",4));
// // // console.log(myFriendNames.includes("Thapa"));

// // let b = myFriendNames.find((ele)=>{
// //     return ele*2
// // } )

// // console.log(b);




// // const prices = [200,300,350,400,450,500,600];

// // // // price < 400
// // const newPriceTag = prices.filter((elem, index) => elem[0]>200)
// // console.log(newPriceTag);


// // let table = [5,8,7,3,10]

// // // for(let ele of table){
// // //     console.log(function(a,b){return(b-a)})
// // // }

// // let b = table.sort((a,b)=> (a-b))

// // console.log(b)







// // let a = 6;
// // let arr = [1,2,5,2,2,5];
// // let total

// // for(let i=0;i<=a;i++){
// //     for(let j=0;j<=i;j++){

// //         if(arr[i]===arr[j]){

// //             total +=1
// //             console.log(total)
// //         }

// //     }
// // }





// // let arr = [4,8,5,6,7,8,9]

// //  let b = arr.shift()
// // console.log(b)



// // const arr = [1,4,9,16,25]

// // const value = arr.map((elem,index,arr)=>{
// //     return `index of =${elem}`
// // })

// // console.log(value)


// // arr.splice(2,0,25)
// // console.log(arr)


// // const value = arr.map((elem)=>{
// //     return Math.sqrt(elem)
// // })

// // console.log(value);




// // let arr = [[4,[5,[6,8]],9]]

// // let b = arr.reduce((acc, curVal)=>{
// //     return acc.concat(curVal);
// // })

// // console.log(arr.flat(Infinity))
// // console.log(arr.flat(Infinity));

// // const data = new Date().toString()
// // console.log(data)

// // console.log(Date.now());

// // currDate = new Date();
// // console.log(currDate.toLcoalString());
// // console.log(Date.now().toLocalString)

// // let d = new Date();
// // console.log(d.getFullYear())
// // console.log(d.toLocaleString())

// // console.log(Math.PI);

// // console.log(Math.pow(2,6))
// // console.log(2**6);

// // console.log(Math.abs(2-10));
// // console.log(2-10);


// console.log(Math.ceil(99.9));
// // console.log(Math.round(99.6));
// console.log(Math.floor(99.9));

// // console.log(Math.max(100,54,75))


// // console.log(Math.random()*10);
// // console.log(Math.trunc(4.1));
// // console.log(Math.trunc(-99.1));

// // console.log(Math.trunc(-99.1));
// // console.log(Math.ceil(-99.1));
// // console.log(Math.floor(-99.1));


// // console.log(Math.trunc(4.99));


// // console.log(new Date());



// // sum = 0

// // for (let i=0;i<6;i++){
// //     sum +=arr[i]
// // }
// // console.log(sum)

// // function mul(){
// //     for(let i=0;i<6;i++){
// //          arr[i]=2*arr[i]

// //     }return arr
// // }
// // console.log(mul(arr))

// // let arr = [1,2,3,4,5,6]

// // let b = arr.filter(x=>(x%2))
// // conslet
// // let an={k:45,j:{l:25}}
// // let bn=JSON.parse(JSON.stringify(an))
// // // ._=require('lodash')
// // // lodash.copyDeep(an)
// // bn.k=50
// // bn.j.l=10
// // console.log(an)
// // console.log(bn)
// // arr=[1,2,3]
// // arr.push(5)
// // arr1=arr.filter(x=>x%2)
// // console.log(arr)
// // console.log(arr1)
// // console.log(arr);



// // let a = ['h','e','l','l','o','','w','o','r','l','d']
// // let count
// // for(let i=0;i<a.length;i++){
// //     for(let j =0;j<a.length;j++){
// //         if(a[i]!=a[j]){
// //             console.log(a[i])
// //         }
// //         else{
// //             console.log(a[j])
// //         }
// //     }
// // }


// // javascript program to remove duplicate character
// // from character array and print in sorted
// // order

// // function removeDuplicate( str , n)
// // {

// // 	// Create a set using String characters
// // 	// excluding '\0'
// // 	var s = new Set();

// // 	// HashSet doesn't allow repetition of elements
// // 	for (var i = 0;i<n;i++)
// // 		s.add(str[i]);

// // 	// Print content of the set
// // 	for (const v of s) {

// // 		console.log(v)
// // }
// // }

// // // Driver code
// // 	var str = "geeksforgeeks";
// // 	var n = str.length;

// // 	removeDuplicate(str, n);





// // 	const kvArray = [{ key: 1, value: 10 },
// // 		{ key: 2, value: 20 },
// // 		{ key: 3, value: 30 }];

// // const reformattedArray = kvArray.map(({key,value})=> ({[key]:value}))

// // 		console.log(reformattedArray);


// // let myFname = 'abdul'
// // let age = 26

// // const Bio = [age,myFname]
// // console.log(Bio);

// // const add = (a,b)=>{
// //    return a+b;
// // }
// // const subs = (a,b)=>{
// // 	return Math.abs(a-b)
// // }
// // const multi = (a,b)=>{
// // 	return a*b
// // }
// // const divd=(a,b)=>{
// // 	return a/b
// // }

// // const calculator = (num1,num2,operator)=>{
// // 	return operator(num1,num2)
// // }

// // console.log(calculator(5,6,multi))


// // const data = new Date()
// // console.log(data.dateToString({format:YYYY/MM/DD}));
// //  console.log(data.toLocaleDateString("af-ZA"));


// {/* <a href="https://www.latlong.net/c/?lat=23.991854&long=85.365460" target="_blank">(23.991854, 85.365460)</a> */ }


// // function isunique(array){
// // 	if(array.length){
// // 		let i = 0;
// // 		for(let j=1;j<array.length;j++){
// // 			if(array[i]!=array[j]){
// // 				i++;
// // 				array[i]=array[j]
// // 			}
// // 		}
// // 		return i+1;

// // 	}else{
// // 		 throw new Error("array is empty")
// // 	}
// // }







// // const result = isunique([1,1,2,3,3,4,5,6,6,7]) 
// // console.log(result);




// // let name1 = {
// // 	firstname : 'Mohammad',
// // 	lastName : 'Imtiyaz',

// // }
// // let name2 ={
// // 	city:'Kanke',
// // 	District:'jharkhand',
// // }

// // // printAll.call(name1)
// // let save = printAll.bind(name1,name2)
// // save()


// // let mapping = [1,5,8,9,45,46]
// // const result = mapping.forEach((currElrm,index)=>{
// // 	console.log(`value of${currElrm}and${index}`) 
// // })

// // console.log(result)


// Print all numbers of this array
// 	 [[1,2], [3,4], [5,6], [7,8]]
// HINT: use nested loops


// let array = [[1,2],[[3,4],[5,6]],[7,8]];
// let result = 1
// for(let i=0;i<array.length;i++){
//     for(let j=0;j<array[i].length;j++){
//         result *= array[i][j]
//         console.log(result)
//   }

// }

// console.log(array.flat(Infinity))



// function print(array) {
//     let result = [];
//     for (let i = 0; i < array.length; i++) {
//         console.log(array[i])
//         for (let j = 0; j < array[i].length; j++) {
//             result *= array[i][j]
//         }
//     }
//     return result
// }

// console.log(print([[1, 2], [3, 4], [5, 6], [7, 8]]))

// let array = [[1, 2], [3, 4,], [5, 6], [7, 8]];

// for(let i=0;i<array.length;i++){
//     for(let j=0;j<array[i].length;j++){
//     console.log(array[i][j])
//     }

// }

// let name ={
//     firstName : "akash",
//     lastName : "sachi"
// }

// let name2 ={

// }
// let sum =0
// sum = -4+2

// console.log(sum);

// let a = "imtiyaz"
// let obj ={};
// for(let letter of a){
//        (obj[letter]=(obj[letter]||0)+1)
// }
// console.log(obj);


// function isunique(array){

//     if(array.length){
//         let i=0
//         for (let j=1;j<array.length;j++){
//             if(array[i]!=array[j]){
//                 i++
//                 array[i]=array[j]
//             }
//         }
//         return i+1

//     }
//     else{
//         throw new Error("array is empty");
//     }
// }

// let result = isunique([1,1,2,3,4,5,6,7,8,8,9])
// console.log(result);
// 
// 
// function laregestsum(array,num){
// if(num>array){
// throw new Error('array is less then num')
// }
// else {
// let max = 0
// for(let i=0;i<array.length-num+1;i++){
// let temp = 0
// for(j=0;j<num;j++){
// temp += array[i+j]
// }
// if(temp>max){
// max = temp
// }
// }
// return max
// }
// }
// 
// let result = laregestsum([1,2,3,4,5,6,7,8,9,9],4)
// console.log(result);
// 
// 

// let b = { items: [{
//     "productId": 15,
//     "quantity":15
// }]
// }

// //  'items.$[element].quantity'
// console.log(b.items.$.productId)

// const arr = [1,2,3,4]
//  let output = arr.reduce((acc,cumm)=>{
//    return  acc += cumm
   
// })

// console.log(output);

// let b = {'1':1,'5':1}
// let c = {'1':1,'24':1}

// for(let i in b){
//     if(!c[i*i]){
//         // console.log(!c[i*i]);
//         console.log(false); 
//     }
// }
// console.log(true);



// var data = {
//     "prevExists":false,
//     "pubKey":"b5",
//     "ID":"5f1"
// };


// for (let key in data)
//     console.log(key,data[key]);