import { cleanup } from "@testing-library/react";
import { apiList } from "./api-list";
import { getData } from "./api-service";

afterEach(cleanup);

test("httpGetTest", async () => {
  const res = await getData({
    query: apiList.CONFIG,
  });

  expect(res.status).toBe(200);
  expect(res.data).toBeTruthy();
});

//tests can be defined for specific api operations
//could be more efficient with typescript interfaces
//not including due to time limitation and type of the project