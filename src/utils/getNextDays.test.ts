import { getNextDays } from "./getNextDays";

describe("getNextDays", () => {
  it("Verificar se retorna os próximos 5 dias", () => {
    //executa o nosso teste...
    const days = getNextDays();

    expect(days.length).toBe(5);
  });
});
