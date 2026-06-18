import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Ganesh Sharma portfolio", () => {
  render(<App />);
  expect(screen.getAllByText(/Ganesh Sharma/i).length).toBeGreaterThan(0);
  expect(screen.getByText(/MCA Student \| Full Stack Developer/i)).toBeInTheDocument();
});
