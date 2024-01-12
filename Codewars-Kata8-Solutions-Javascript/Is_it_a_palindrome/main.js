const Is_it_a_palindrome = (str) => {
  return str.toLowerCase() == str.split("").toReversed().join("").toLowerCase()
    ? `the ${str} it's a palindrome word`
    : `the ${str} it's not a palindrome word`;
};
console.log(Is_it_a_palindrome("hello")); //not a palindrome word
console.log(Is_it_a_palindrome("Step on no pets")); //palindrome word
