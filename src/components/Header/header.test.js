import { cleanup, render } from "@testing-library/react";
import Header from ".";
import { WatchListContext } from "../../contexts/WatchListContext";

afterEach(cleanup);

it("checkHeaderRenders", () => {
  const { queryByTestId } = render(<Header />);
  expect(queryByTestId("header-body")).toBeTruthy();
});

describe("checkWatchList", () => {
  it("checkWatchListDefault", () => {
    const { queryByTestId } = render(<Header />);
    expect(queryByTestId("header-btn")).toHaveTextContent("Watchlist (0)");
  });

  it("checkWatchListChange", () => {
    const watchList = [1, 2, 3];
    const { queryByTestId } = render(
      <WatchListContext.Provider value={{ watchList }}>
        <Header />
      </WatchListContext.Provider>
    );
    expect(queryByTestId("header-btn")).toHaveTextContent("Watchlist (3)");
  });
});
