import { cleanup, render } from "@testing-library/react";
import Footer from ".";

afterEach(cleanup);

it("checkFooterRender", () => {
  const { queryByTestId } = render(<Footer />);
  const body = queryByTestId("footer-body");
  const text = queryByTestId("footer-text");

  expect(body).toBeTruthy();
  expect(text).toHaveTextContent("2021 - MovieMania all rights reserved");
});
