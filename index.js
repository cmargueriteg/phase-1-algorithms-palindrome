function isPalindrome(string) {
  const newString = string.split("").reverse().join("")

  if(string === newString){
    return true
  } else {
    return false
  }


}

/* 
  declare function
  set argument to a string
  reverse string (need to convert to array to use .reverse)
  compare string to new string
  return true/false
*/

/*
  i wanted to use .reverse function, but it only works on arrays
  -need to split string into individ elements (into an array)
  -then reverse those individ elements
  -then join individ elements/array back into a string
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {

  console.log(isPalindrome("mom"))
  
  console.log(isPalindrome("dog)"))

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
