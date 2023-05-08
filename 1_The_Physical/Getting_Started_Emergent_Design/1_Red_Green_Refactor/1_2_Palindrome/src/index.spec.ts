import PalindromeChecker from ".";

describe("palindrome checker", () => {
  it("should return 'true' when 'mom' since 'mom' is a palindrome", () => {
    let palindromeChecker = new PalindromeChecker();
    expect(palindromeChecker.isPalindrome("mom")).toBe(true);
  });
});
