import PalindromeChecker from ".";

let palindromeChecker: PalindromeChecker;

beforeEach(() => {
  palindromeChecker = new PalindromeChecker();
});

describe("palindrome checker", () => {
  it("should return 'true' when 'mom' since 'mom' is a palindrome", () => {
    expect(palindromeChecker.isPalindrome("mom")).toBe(true);
  });

  it("should return 'false' when 'bill' is the input since this is not a palindrome", () => {
    expect(palindromeChecker.isPalindrome("bill")).toBe(false);
  });

  it("should return 'true' when 'Mom' is the input since the word is a palindrome and casing should be ignores", () => {
    expect(palindromeChecker.isPalindrome("Mom")).toBe(true);
  });
});
