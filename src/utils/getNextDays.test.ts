import { getNextDays } from "./getNextDays";

describe("getNextDays", () => {
  it("Espero que retorne os proximos 5 dias", () => {
    const days = getNextDays();

    expect(days.length).toBe(5);
  });

  it("Espero não me retorne os proximos 5 dias quando for fim de semana", () => {
    const days = getNextDays(true);

    expect(days.length).toBe(0);
  });
});
