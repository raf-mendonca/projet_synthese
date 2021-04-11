// Test pour le composant Inscription
import { render, fireEvent } from "@testing-library/react";

import Inscription from "../views/inscription";

// Vérifie si les input sont rendu correctement
it("checkInput1", () => {
  const { queryByTitle } = render(<Inscription />);
  const input1 = queryByTitle("input1");
  expect(input1).toBeTruthy();
});
it("checkInput2", () => {
  const { queryByTitle } = render(<Inscription />);
  const input2 = queryByTitle("input2");
  expect(input2).toBeTruthy();
});
it("checkInput3", () => {
  const { queryByTitle } = render(<Inscription />);
  const input3 = queryByTitle("input3");
  expect(input3).toBeTruthy();
});
it("checkInput4", () => {
  const { queryByTitle } = render(<Inscription />);
  const input4 = queryByTitle("input4");
  expect(input4).toBeTruthy();
});
it("checkInput5", () => {
  const { queryByTitle } = render(<Inscription />);
  const input5 = queryByTitle("input5");
  expect(input5).toBeTruthy();
});
// Vérifie si quand on digite l'input prends la valeur
describe("changeInInput1", () => {
  it("onChange", () => {
    const { queryByTitle } = render(<Inscription />);
    const input1 = queryByTitle("input1");
    fireEvent.change(input1, { target: { value: "testValue" } });
    expect(input1.value).toBe("testValue"); //On attend que input soit = à testValue
  });
});
describe("changeInInput2", () => {
  it("onChange", () => {
    const { queryByTitle } = render(<Inscription />);
    const input2 = queryByTitle("input2");
    fireEvent.change(input2, { target: { value: "testValue" } });
    expect(input2.value).toBe("testValue"); //On attend que input soit = à testValue
  });
});
describe("changeInInput3", () => {
  it("onChange", () => {
    const { queryByTitle } = render(<Inscription />);
    const input3 = queryByTitle("input3");
    fireEvent.change(input3, { target: { value: "testValue" } });
    expect(input3.value).toBe("testValue"); //On attend que input soit = à testValue
  });
});
describe("changeInInput4", () => {
  it("onChange", () => {
    const { queryByTitle } = render(<Inscription />);
    const input4 = queryByTitle("input4");
    fireEvent.change(input4, { target: { value: "testValue" } });
    expect(input4.value).toBe("testValue"); //On attend que input soit = à testValue
  });
});
describe("changeInInput5", () => {
  it("onChange", () => {
    const { queryByTitle } = render(<Inscription />);
    const input5 = queryByTitle("input5");
    fireEvent.change(input5, { target: { value: "testValue" } });
    expect(input5.value).toBe("testValue"); //On attend que input soit = à testValue
  });
});
