import { getNextDays } from "./getNextDays";

describe("getNextDays", () => {
  it("Espero que retorne os proximos 5 dias", () => {
    const days = getNextDays();

    expect(days.length).toBe(5);
  });
});
