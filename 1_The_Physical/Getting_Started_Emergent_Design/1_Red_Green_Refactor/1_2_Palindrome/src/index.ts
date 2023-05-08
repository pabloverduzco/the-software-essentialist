export default class PalindromeChecker {
  isPalindrome(word: string): boolean {
    return (
      word.split("").reverse().join("").toLowerCase() === word.toLowerCase()
    );
  }
}
