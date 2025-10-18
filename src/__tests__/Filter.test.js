
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Filter from "../components/Filter";

test("renders the search input", () => {
  render(<Filter search="" onSearchChange={() => {}} />);
  expect(screen.getByPlaceholderText(/Search/)).toBeInTheDocument();
});
