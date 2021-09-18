import { render } from "@testing-library/react";
import MovieItem from ".";

//Since no specific test requirement, nothing much to be tested
//please check Header component tests for most common use cases

it("checkMovieItemRenders", () => {
  const { queryByTestId } = render(<MovieItem />);
  expect(queryByTestId("movie-item-body")).toBeTruthy();
});
