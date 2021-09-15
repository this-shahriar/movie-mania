import { useContext } from "react";
import { Flex, Text } from "@chakra-ui/layout";
import { WatchListContext } from "../../contexts/WatchListContext";
import MovieItem from "../../components/MovieItem";

const WatchList = () => {
  const { watchList } = useContext(WatchListContext);

  return watchList?.length > 0 ? (
    <Flex pt="2rem" w="100vw" maxW="1920px" direction="column">
      <Flex p="1rem" justify="center" flexWrap="wrap">
        {watchList.map((mov, idx) => (
          <Flex key={idx} direction="column">
            <MovieItem
              dark
              item={mov}
              w={{ base: "100vw", sm: "14rem" }}
              h={{ base: "30rem", sm: "22rem" }}
            />
          </Flex>
        ))}
      </Flex>
    </Flex>
  ) : (
    <Text p="6rem 0" color="text.500">
      No movie added
    </Text>
  );
};

export default WatchList;
