//1 ) Palindrome number
// + is used to convert string to number
const isPalindrome = function (x) {
    return x < 0 ? false : x === +x.toString().split("").reverse().join("");
}

const res = isPalindrome(19);
console.log(res);