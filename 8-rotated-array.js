//rotated array by k
// input = [1, 2, 3, 4, 5, 6, 7, 8] , k=2  ->> output = [7, 8, 1, 2, 3, 4, 5, 6]

function rotatedArray(nums, k) {
    let size = nums.length;

    if(size > k) {
        k = k % size;    
    }

    const rotated = nums.splice(size - k, size);       // O(n)
    nums.unshift(...rotated);                          // O(n)

    return nums;
}

console.log(rotatedArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));
