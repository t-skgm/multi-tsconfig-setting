import { pick } from "./utils";

describe("pick", () => {
  it("should return an object with the specified keys", () => {
    const obj = { name: "John", age: 30, city: "New York" };

    const result = pick(obj, ["name", "age"]);

    expect(result).toEqual({ name: "John", age: 30 });
  });

  it("should handle empty keys array", () => {
    const obj = { name: "John", age: 30, city: "New York" };

    const result = pick(obj, []);

    expect(result).toEqual({});
  });

  it("should handle non-existent keys", () => {
    const obj = { name: "John", age: 30, city: "New York" };

    const result = pick(obj, [
      "name",
      // @ts-expect-error -- city does not exist in obj
      "email",
    ]);

    expect(result).toEqual({ name: "John" });
  });
});
