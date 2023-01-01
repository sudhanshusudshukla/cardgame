import { render } from "@testing-library/react";
import App from "./App";
//import ReactDOM from "react-dom";

//jest.mock("react-dom", () => ({ render: jest.fn() }));

// test("it should renders", () => {
//   const div = document.createElement("div");
//   ReactDOM.render(<App />, div);
//   global.document.id = (id) => id === "root" && div;
//   expect(ReactDOM.render).toHaveBeenCalled();
// });

test("renders learn react link", () => {
  const div = document.createElement("div");
  render(<App />, div);
  global.document.id = (id) => id === "root" && div;
});
