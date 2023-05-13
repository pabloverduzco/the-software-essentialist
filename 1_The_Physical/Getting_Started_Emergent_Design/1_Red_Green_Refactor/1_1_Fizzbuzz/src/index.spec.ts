import fizzbuzz from "./fizzbuzz";

describe("fizzbuzz", () => {
  describe("given a multiple of three", () => {
    it.each([3, 9, 42])(
      "should return 'Fizz' when %d is used as value",
      (value) => {
        expect(fizzbuzz(value)).toBe("Fizz");
      }
    );
  });

  describe("given a multiple of five", () => {
    it.each([5, 20])(
      "should return 'Buzz' when %d is used as value",
      (value) => {
        expect(fizzbuzz(value)).toBe("Buzz");
      }
    );
  });

  describe("given a multiple of three and five", () => {
    it.each([15, 45])(
      "should return 'FizzBuzz' when %d is used as value",
      (value) => {
        expect(fizzbuzz(value)).toBe("FizzBuzz");
      }
    );
  });

  it("should return '1' as string since the number isn't a multiple of three or five", () => {
    expect(fizzbuzz(1)).toBe("1");
  });

  it("should throw an error when values is -12 since the minimum allowed value is 1", () => {
    expect(() => {
      fizzbuzz(-12);
    }).toThrow(Error);
  });

  it("should throw an error when values is 101 since the max allowed value is 100", () => {
    expect(() => {
      fizzbuzz(101);
    }).toThrow(Error);
  });

  it("should return the input as string", () => {
    expect(typeof fizzbuzz(1)).toBe("string");
  });
});
