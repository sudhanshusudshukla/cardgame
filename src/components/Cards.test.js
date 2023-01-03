import Cards from "./Cards";
import renderWithRedux from "../utils/renderWithRedux";
import { cleanup, fireEvent, screen } from "@testing-library/react";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

//const onShuffle = jest.fn();

describe("to test Cards component with Redux", () => {
  afterEach(() => {
    cleanup();
  });

  beforeEach(() => {
    jest.resetAllMocks();
  });

  test("it should shuffle the cards", () => {
    renderWithRedux(<Cards />);
    expect(screen.getByTestId("shuffle-button")).toBeDefined();
    fireEvent.click(screen.getByText("Shuffle"));
  });

  test("it should withdraw  anyone selected cards", () => {
    renderWithRedux(<Cards />);
    expect(screen.getByTestId("withdraw-1")).toBeDefined();
    fireEvent.click(screen.getByTestId("withdraw-1"));
  });

  test("it should check picked card", () => {
    renderWithRedux(<Cards />);
    expect(screen.getAllByTestId("picked-card")).toBeDefined();
  });
});
