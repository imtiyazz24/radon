function isunique(array){
	if(array.length){
		let i = 0;
		for(let j=1;j<array.length;j++){
			if(array[i]!=array[j]){
				i++;
				array[i]=array[j]
			}
		}
		return i+1;


	}else{
		 throw new Error("array is empty")
	}
}

const result = isunique([1,1,2,3,3,4,5,6,6,7]) 
console.log(result);