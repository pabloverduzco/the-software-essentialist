import PalindromeChecker from ".";

describe("palindrome checker", () => {
  it("should return 'true' when 'mom' since 'mom' is a palindrome", () => {
    let palindromeChecker = new PalindromeChecker();
    expect(palindromeChecker.isPalindrome("mom")).toBe(true);
  });

  it("should return 'false' when 'bill' is the input since this is not a palindrome", () => {
    let palindromeChecker = new PalindromeChecker();
    expect(palindromeChecker.isPalindrome("bill")).toBe(false);
  });

  it("should return 'true' when 'Mom' is the input since the word is a palindrome and casing should be ignores", () => {
    let palindromeChecker = new PalindromeChecker();
    expect(palindromeChecker.isPalindrome("Mom")).toBe(true);
  });
});
