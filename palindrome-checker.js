function palindrome(str) {
  // change to lowercase
  var newString = str.toLowerCase()
  
  // remove special characters and spaces
  var regex = /[^A-Za-z0-9]/g;
  newString = newString.replace(regex, "");
  
  // split, reverse and join string
  var reversedString = newString.split("").reverse().join("");

  // check if string is a palindrome
  var isPalindrome = newString === reversedString ? true : false;

  return isPalindrome;
}

console.log(palindrome("A man, a plan, a canal. Panama"));