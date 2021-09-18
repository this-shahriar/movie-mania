//Since no specific test requirement, nothing much to be tested
//please check Header component tests for most common use cases

import { render } from "@testing-library/react";
import WatchListBtn from ".";

it("checkWatchlistBtnRenders", () => {
  const { queryByTestId } = render(<WatchListBtn />);
  expect(queryByTestId("watchlist-btn")).toBeTruthy();
});
