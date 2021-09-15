import { useContext } from "react";
import { Image } from "@chakra-ui/image";
import { useHistory } from "react-router";
import { Button } from "@chakra-ui/button";
import { StarIcon } from "@chakra-ui/icons";
import { Flex, Text } from "@chakra-ui/layout";
import fallbackimg from "../../assets/fallback.gif";
import { ApiConfigContext } from "../../contexts/ApiConfigContext";
import { WatchListContext } from "../../contexts/WatchListContext";
import WatchListBtn from "../WatchlistBtn";

const MovieItem = ({ item, w, dark }) => {
  const router = useHistory();
  const { imageBase, posterSizes } = useContext(ApiConfigContext);
  const { setWatchList, watchList } = useContext(WatchListContext);

  return (
    <Flex
      w={w}
      align="center"
      cursor="pointer"
      direction="column"
      position="relative"
      h={w ? "min-content" : "100%"}
      _hover={{ transform: "scale(1.01)", transition: "all linear 0.05s" }}
    >
      <Flex
        top="1rem"
        left="0.5rem"
        align="center"
        p="0.1rem 0.8rem"
        bg="secondary.500"
        position="absolute"
        borderRadius="4px"
      >
        <StarIcon fontSize="0.6rem" color="back.500" />
        <Text pl="0.2rem" fontWeight="bold" fontSize="0.8rem" color="back.500">
          {item.vote_average}
        </Text>
      </Flex>
      <Image
        h="100%"
        w={w ? "80%" : ""}
        overflow="hidden"
        objectFit="cover"
        borderRadius="6px"
        fallbackSrc={fallbackimg}
        onClick={() => router?.push(`/movies/${item.id}`)}
        src={imageBase + posterSizes[5] + item.poster_path}
      />
      <Flex minH="5rem" pt="1rem" direction="column">
        <Text
          fontWeight="800"
          color="text.500"
          fontSize="1.1rem"
          textAlign="center"
        >
          {item.title}
        </Text>

        <Text pb="1rem" color="back.500" fontSize="0.9rem" textAlign="center">
          {item.release_date}
        </Text>
      </Flex>
      {w && <WatchListBtn variant="link" item={item} dark={dark} />}
    </Flex>
  );
};

export default MovieItem;
