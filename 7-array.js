// 6) second largest number
function secondLargestNumber(arr) {
    const uniqueArr = Array.from(new Set(arr));
    uniqueArr.sort((a,b) => b-a)

    if(uniqueArr.length >= 2) {
        return uniqueArr[1];
    } else {
        return -1;
    }
   
}

console.log(secondLargestNumber([12,15,16,17,18]));

//second largest number (better approach according to time and space complexity)
function secondLargestNumberOptmisied(arr) {
    let largest = Number.NEGATIVE_INFINITY;
    let secondLargest = Number.NEGATIVE_INFINITY;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if(arr[i] != largest && arr[i] > secondLargest) {
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}
console.log(secondLargestNumberOptmisied([12,15,16,17,18,20,25,60,90]));