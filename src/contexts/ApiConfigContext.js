import { apiList } from "../utils/api-list";
import { getData } from "../utils/api-service";
import { createContext, useEffect, useState } from "react";
import { useToast } from "@chakra-ui/toast";
import { useBreakpointValue } from "@chakra-ui/media-query";

export const ApiConfigContext = createContext({});

const ApiConfigContextProvider = ({ children }) => {
  const toast = useToast();
  const [imageBase, setImageBase] = useState();
  const [posterSizes, setPosterSizes] = useState([]);

  const getApiConfiguration = async () => {
    const res = await getData({
      query: apiList.CONFIG,
    });
    if (res?.data?.images) {
      setImageBase(res.data.images?.secure_base_url);
      setPosterSizes(res.data.images?.poster_sizes);
    } else toast({ title: "Failed to get API config", position: "top" });
  };

  useEffect(() => {
    getApiConfiguration();
  }, []);

  return (
    <ApiConfigContext.Provider value={{ imageBase, posterSizes }}>
      {children}
    </ApiConfigContext.Provider>
  );
};

export default ApiConfigContextProvider;
