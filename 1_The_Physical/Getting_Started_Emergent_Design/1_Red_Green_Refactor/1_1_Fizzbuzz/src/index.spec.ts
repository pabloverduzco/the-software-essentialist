import fizzbuzz from "./fizzbuzz";

describe("fizzbuzz", () => {
  it("should return 'Fizz' when 3 is uses as multiple of three value", () => {
    expect(fizzbuzz(3)).toBe("Fizz");
  });

  it("should return the input as string", () => {
    expect(typeof fizzbuzz(1)).toBe("string");
  });
});
