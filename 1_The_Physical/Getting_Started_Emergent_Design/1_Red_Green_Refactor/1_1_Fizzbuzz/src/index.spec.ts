import fizzbuzz from "./fizzbuzz";

describe("fizzbuzz", () => {
  it("should return 'Fizz' when 3 is used as multiple of three value", () => {
    expect(fizzbuzz(3)).toBe("Fizz");
  });

  it("should return 'Buzz' when 5 is used as multiple of five value", () => {
    expect(fizzbuzz(5)).toBe("Buzz");
  });

  it("should return 'FizzBuzz' when a value is both multiple of three and multiple of three", () => {
    expect(fizzbuzz(30)).toBe("FizzBuzz");
  });

  it("should return '1' as string since the number isn't a multiple of three or five", () => {
    expect(fizzbuzz(1)).toBe("1");
  });

  it("should throw an error when values is 0 since the minimum allowed value is 1", () => {
    expect(() => {
      fizzbuzz(0);
    }).toThrow(Error);
  });

  it("should return the input as string", () => {
    expect(typeof fizzbuzz(1)).toBe("string");
  });
});
