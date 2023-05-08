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
});
