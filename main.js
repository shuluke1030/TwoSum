function twoSum(numbers, target) {
let sum = 0;
let array = [];
    for( let i = 0; i <numbers.length; i++){
        for(let j = 0; j <numbers.length; j++){
        sum = numbers[i] + numbers[j];
        if(sum === target){
            if(i !== j){
                return [i,j];
            }
        }
    }
}
return array;
}

console.log(twoSum([1, 2, 3], 4));