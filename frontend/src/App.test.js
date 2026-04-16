import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

jest.mock("./pages/Home", () => () => <div>Home Page</div>);
jest.mock("./pages/Courses", () => () => <div>Courses Page</div>);
jest.mock("./pages/Login", () => () => <div>Login Page</div>);
jest.mock("./pages/Register", () => () => <div>Register Page</div>);
jest.mock("./pages/CourseDetails", () => () => <div>Course Details Page</div>);

import App from "./App";

test("renders app navbar brand", () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByText(/smartlearnx/i)).toBeInTheDocument();
  expect(screen.getByText(/home page/i)).toBeInTheDocument();
});
