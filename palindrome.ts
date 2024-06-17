// A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward (ignoring spaces,
// punctuation, and capitalization). Examples of palindromic words include "radar," "level," and "madam." Palindromic phrases include 
// "A man, a plan, a canal, Panama!" and "Able was I ere I saw Elba." Palindromes are often used in puzzles and word games because of 
// their unique symmetrical property.

function reverseString(str: string): string {
    return str.split('').reverse().join('');
}

const originalString = "nurses run";
const reversedString = reverseString(originalString);

console.log(reversedString);