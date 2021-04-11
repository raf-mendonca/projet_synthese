// Test pour le composant Login
import { render } from "@testing-library/react";

import { Login } from "../components/login";

// Vérifie si le button existe, et s'il est rendu correctement
it("checkButtonRender", () => {
  const { queryByTitle } = render(<Login />);
  const bnt = queryByTitle("buttonMarche");
  expect(bnt).toBeTruthy();
});
