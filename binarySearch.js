// binary search 
function binary(array, number) {
    let min = 0
    let max = array.length - 1
    while (min <= max) {
        let midIndex = Math.floor(min + max) / 2
        if (array[midIndex] < number) { //8<7
            min = midIndex + 1
        }
        else if (array[midIndex] > number) {
            max = midIndex - 1
        }
        else {
            return midIndex
        }
    }
    return -1
}
let result = binary([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 12)
console.log(result);