function isPalindrome(s) {
    s = s.toLowerCase().replaceAll(" ", "");

    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        if (s[left] !== s[right]) {
            return false;
        }

        left++;
        right--;
    }

    return true;
}

console.log(isPalindrome("racecar"));          // true
console.log(isPalindrome("hello"));            // false
console.log(isPalindrome("Never odd or even")); // true
