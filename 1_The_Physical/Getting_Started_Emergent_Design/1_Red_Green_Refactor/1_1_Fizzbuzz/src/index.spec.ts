import fizzbuzz from "./fizzbuzz";

describe("fizzbuzz", () => {
  it("should return the input as string", () => {
    expect(typeof fizzbuzz(1)).toBe("string");
  });
});
