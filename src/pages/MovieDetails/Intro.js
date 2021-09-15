import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Flex, Text } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";
import { Tag } from "@chakra-ui/tag";
import { useContext } from "react";
import { WatchListContext } from "../../contexts/WatchListContext";

const Intro = ({ details, router }) => {
  const { setWatchList, watchList } = useContext(WatchListContext);

  return (
    <Flex
      direction="column"
      maxW="500px"
      p={{ base: "1rem", sm: "0 0 0 2rem" }}
    >
      <Text
        fontWeight="800"
        lineHeight="1.1"
        color="text.500"
        fontSize={{ base: "2.6rem", sm: "3rem" }}
      >
        {details.title}
      </Text>

      <Flex>
        <Text fontWeight="bold" color="text.500" fontSize="1rem">
          ({details.release_date}) |
        </Text>
        <Flex
          pl="0.4rem"
          cursor="pointer"
          align="center"
          onClick={() =>
            window.open(`https://www.imdb.com/title/${details.imdb_id}`)
          }
        >
          <Text pr="0.5rem" fontWeight="bold" color="text.500">
            IMDB
          </Text>
          <ExternalLinkIcon fontSize="1.1rem" color="text.500" />
        </Flex>
      </Flex>

      {details.genres && (
        <Flex p="1rem 0" flexWrap="wrap" cursor="pointer" userSelect="none">
          {details.genres.map((genre, idx) => (
            <Tag
              key={idx}
              mr="0.5rem"
              mb="0.5rem"
              fontSize="1rem"
              p="0.5rem 1rem"
              color="back.500"
              fontWeight="bold"
              bg="secondary.500"
              _hover={{ transform: "scale(1.04)" }}
              onClick={() => router.push(`/genres/${genre.id}/${genre.name}`)}
            >
              {genre.name}
            </Tag>
          ))}
        </Flex>
      )}
      <Text p="1rem 0" color="back.500">
        {details.overview}
      </Text>
      <Button
        w="min-content"
        onClick={() => {
          if (watchList?.map((wl) => wl.id).includes(details.id)) {
            setWatchList((wl) => wl.filter((mov) => mov.id !== details.id));
          } else {
            const entry = {
              id: details.id,
              title: details.title,
              poster_path: details.poster_path,
              vote_average: details.vote_average,
              release_date: details.release_date,
            };
            setWatchList((wl) => (wl ? [...wl, entry] : [entry]));
          }
        }}
        color="dark.500"
        b="1px solid"
        colorScheme="text"
      >
        {watchList?.map((wl) => wl.id).includes(details.id)
          ? "Remove from watchlist"
          : "Add to watchlist"}
      </Button>
    </Flex>
  );
};

export default Intro;
