import { render, screen } from "@testing-library/react-native";

import { Input } from "@components/Input";

describe("Component: Input", () => {
  it("deve ser renderizado sem ActivityIndicator se isLoading prop for indefinido", () => {
    render(<Input />);

    const activityIndicator = screen.queryByTestId("activity-indicator");
    expect(activityIndicator).toBeNull();
  });

  it("deve ser renderizado com ActivityIndicator se a propriedade isLoading for verdadeira", () => {
    render(<Input isLoading />);

    const activityIndicator = screen.getByTestId("activity-indicator");
    expect(activityIndicator).toBeTruthy();
  });
});
