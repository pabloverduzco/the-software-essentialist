export default function fizzbuzz(value: number): string {
  if (value < 1) {
    throw new Error("value is out of the valid range");
  }

  if (value % 3 === 0 && value % 5 === 0) return "FizzBuzz";
  if (value % 3 === 0) return "Fizz";
  if (value % 5 === 0) return "Buzz";

  return value.toString(10);
}
