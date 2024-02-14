import { render, screen } from "@testing-library/react-native";

import { Input } from "@components/Input";

describe("Component: Input", () => {
  it("Deve renderizar nosso input sem o activity indicator - isLoading is undefined", () => {
    render(<Input />);

    const activityIndicator = screen.queryByTestId("activity-indicator");
    expect(activityIndicator).toBeNull();
  });

  it("Deve renderizar nosso input com o activity indicator", () => {
    render(<Input isLoading />);

    const activityIndicator = screen.getByTestId("activity-indicator");
    expect(activityIndicator).toBeTruthy();
  });
});

// Testes são organizados em ordem alfabetica no console por isso colocamos o prefixo 'Component' na frente ja que estou
//testando um componente, sempre use o prefixo daquilo que voce esta testando.
