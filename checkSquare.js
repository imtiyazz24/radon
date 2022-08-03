function square(array1,array2){
    let map1 = {};
    let map2 = {};
    for(let item of array1){
        map1[item]=(map1[item]||0)+1;
    }
    for(let item2 of array2){
        map2[item2]=(map2[item2]||0)+1
    }
console.log('map1',map1);
console.log('map2',map2);
// console.log(map2[16]);

    for(let key in map1){
        // arr.push(map2[key*key])
        if(!map2[key*key]){ // compare obj key in terms of sqaure 
            // console.log([key*key]);
            return false
        }
        if(map1[key]!==map2[key*key]){ // map1 value copare to map2 value
            // console.log('.......');
            return false
        }
    }
    return true
    return true
}


let result = square([1,2,4,2],[1,4,16,4])
console.log(result);