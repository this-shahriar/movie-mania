import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const API_KEY = process.env.REACT_APP_KEY;

const handleError = (e) => {
  console.error("HTTP ERROR >>>", e);
};

export const getData = async ({ query, params }) => {
  try {
    const res = await axios({
      method: "get",
      params: {
        ...params,
        api_key: API_KEY,
        language: "en-US",
      },
      url: `${BASE_URL}${query}`,
    });
    return res;
  } catch (e) {
    handleError(e);
    return null;
  }
};
