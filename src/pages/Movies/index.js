import { useHistory } from "react-router";
import { Spinner } from "@chakra-ui/spinner";
import { useContext, useEffect } from "react";
import { Divider, Flex, Grid, Text } from "@chakra-ui/layout";
import MovieGallery from "../../components/MovieGallery";
import { GenreContext } from "../../contexts/GenreContext";
import { RecentlyVisitedContext } from "../../contexts/VisitedContext";
import MovieItem from "../../components/MovieItem";

const Movies = () => {
  const router = useHistory();
  const { recently } = useContext(RecentlyVisitedContext);
  const { genres, popularList, getGenreList, getPopularList } =
    useContext(GenreContext);

  useEffect(() => {
    getGenreList();
    getPopularList();
  }, []);

  return (
    <Flex w="100vw" overflow="hidden" direction="column">
      {popularList?.length > 0 && (
        <Flex pt="2rem" w="100%" direction="column">
          <Flex p="1rem" justify="center" flexWrap="wrap">
            {popularList.slice(0, 5).map((mov) => (
              <MovieItem dark item={mov} w={{ base: "100vw", sm: "14rem" }} />
            ))}
          </Flex>
        </Flex>
      )}
      {recently?.length > 0 && (
        <Flex pt="2rem" w="100%" direction="column">
          <Flex align="center">
            <Divider borderColor="text.500" />
            <Text color="text.500" whiteSpace="nowrap" p="0 1rem">
              Recently visited movies
            </Text>
            <Divider borderColor="text.500" />
          </Flex>
          <Flex p="1rem" justify="center" flexWrap="wrap">
            {recently.slice(0, 5).map((mov) => (
              <MovieItem dark item={mov} w={{ base: "100vw", sm: "14rem" }} />
            ))}
          </Flex>
        </Flex>
      )}
      <Flex align="center" p="2rem 0 1rem 0">
        <Divider />
        <Text
          p="0 1rem"
          fontWeight="bold"
          color="lightgray"
          whiteSpace="nowrap"
        >
          Select a genre below
        </Text>
        <Divider />
      </Flex>
      <Flex p="1rem" w="100%" justify="center">
        {genres ? (
          <Flex justify={{ sm: "center" }} flexWrap="wrap">
            {genres.map((item) => (
              <Flex
                mr="0.5rem"
                mb="0.5rem"
                key={item.id}
                justify="center"
                cursor="pointer"
                borderRadius="5px"
                background="rgb(91,31,80)"
                flexGrow={{ base: "1", sm: 0 }}
                flexBasis={{ base: "1", sm: 0 }}
                _hover={{ transform: "scale(1.04)" }}
                p={{ base: "0.8rem 1.6rem", sm: "1rem 2rem" }}
                onClick={() => router?.push(`/genres/${item.id}/${item.name}`)}
                background="linear-gradient(180deg, rgba(32,60,92,1) 0%, rgba(17,32,49,1) 75%)"
              >
                <Text fontWeight="bold" whiteSpace="nowrap" color="text.500">
                  {item.name}
                </Text>
              </Flex>
            ))}
          </Flex>
        ) : (
          <Spinner />
        )}
      </Flex>
    </Flex>
  );
};

export default Movies;
