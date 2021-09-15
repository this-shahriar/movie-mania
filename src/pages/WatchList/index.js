import { useContext } from "react";
import { Image } from "@chakra-ui/image";
import { useHistory } from "react-router";
import { Button } from "@chakra-ui/button";
import fallbackimg from "../../assets/fallback.gif";
import { Flex, Grid, GridItem, Text } from "@chakra-ui/layout";
import { WatchListContext } from "../../contexts/WatchListContext";
import { ApiConfigContext } from "../../contexts/ApiConfigContext";
import MovieGrid from "../../components/MovieGrid";

const WatchList = () => {
  const { watchList, setWatchList } = useContext(WatchListContext);

  return watchList?.length > 0 ? (
    <MovieGrid list={watchList} setList={setWatchList} />
  ) : (
    <Text p="6rem 0" color="text.500">
      No movie added
    </Text>
  );
};

export default WatchList;
