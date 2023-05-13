export default class PalindromeChecker {
  private reverseWord(word: string): string {
    return word.split("").reverse().join("");
  }

  public isPalindrome(pharse: string): boolean {
    const words = pharse.split(" ");
    for (const word of words) {
      const reversedWord = this.reverseWord(word).toLowerCase();
      if (reversedWord === word.toLowerCase()) return true;
    }

    return false;
  }
}
