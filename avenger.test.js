const tickets = require("./avenger");

describe("Avenger", () => {
  test("[25, 25, 25]", () => {
    const people = [25, 25, 25];
    const response = tickets(people);
    expect(response).toBe("SI");
  });

  test("[50, 25, 25]", () => {
    const people = [50, 25, 25];
    const response = tickets(people);
    expect(response).toBe("NO");
  });

  test("[25, 25, 100]", () => {
    const people = [25, 25, 100];
    const response = tickets(people);
    expect(response).toBe("NO");
  });

  test("[25, 25, 25, 100]", () => {
    const people = [25, 25, 25, 100];
    const response = tickets(people);
    expect(response).toBe("SI");
  });

  test("[25, 50, 100]", () => {
    const people = [25, 50, 100];
    const response = tickets(people);
    expect(response).toBe("NO");
  });

  test("[25, 25, 50, 100]", () => {
    const people = [25, 25, 50, 100];
    const response = tickets(people);
    expect(response).toBe("SI");
  });
});
