import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ItemForm from "../components/ItemForm";

test("renders the name input", () => {
  render(<ItemForm onItemFormSubmit={() => {}} />);
  expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
});
