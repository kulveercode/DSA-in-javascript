//anagram 

const isAnagram = function(a,b) {
    a = a.split("").sort().join("");
    b = b.split("").sort().join("");

    return a === b;
}

console.log(isAnagram("listen", "silent")); // true