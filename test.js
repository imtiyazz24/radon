let map = new Map();
    let res = [];
    for(let i = 0 ; i < nums.length ; i++){
        if(map.has(target-nums[i])){
            let j = map.get(target-nums[i])); // -----> map[2]--> 0
            res.push(j); // nums[j] + nums[i] ----> 7+2 ==9
            res.push(i);
            return res; 
        }
        else{
            map.set(nums[i], i);
        }
    }
