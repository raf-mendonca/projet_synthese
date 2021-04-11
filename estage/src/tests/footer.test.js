import { render, screen } from "@testing-library/react";
import { Footer } from "../components/footer";

// Vérifie si le lein pour le GitHub dans footer marché
test("renders learn react link", () => {
  render(<Footer />);
  const linkElement = screen.getByTitle("footerLink");
  expect(linkElement).toBeInTheDocument();
});
