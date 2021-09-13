import { useHistory } from "react-router";
import { Spinner } from "@chakra-ui/spinner";
import { useContext, useEffect } from "react";
import { Divider, Flex, Text } from "@chakra-ui/layout";
import MovieGallery from "../../components/MovieGallery";
import { GenreContext } from "../../contexts/GenreContext";

const Movies = () => {
  const router = useHistory();
  const { genres, popularList, getGenreList, getPopularList } =
    useContext(GenreContext);

  useEffect(() => {
    getGenreList();
    getPopularList();
  }, []);

  return (
    <Flex w="100vw" overflow="hidden" direction="column">
      <Flex direction="column">
        {popularList && popularList.length > 0 && (
          <MovieGallery list={popularList.slice(0, 5)} />
        )}
      </Flex>
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
                onClick={() => router?.push(`/genres/${item.id}`)}
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
