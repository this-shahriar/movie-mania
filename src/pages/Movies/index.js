import { Flex, Text } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";
import { useEffect, useState } from "react";
import { apiList } from "../../utils/api-list";
import { getData } from "../../utils/api-service";

const Movies = () => {
  const [genres, setGenres] = useState();

  const getGenres = async () => {
    const res = await getData({
      query: apiList.MOVIE_GENRE_LIST,
    });
    if (res?.data?.genres) {
      setGenres(res.data.genres);
    }
  };

  useEffect(() => {
    getGenres();
  }, []);

  return (
    <Flex w="100%" direction="column">
      <Flex p="1rem" w="100%" justify="center">
        {genres ? (
          <Flex flexWrap="wrap">
            {genres.map((item) => (
              <Flex
                mr="0.5rem"
                mb="0.5rem"
                key={item.id}
                p="1rem 2rem"
                borderRadius="5px"
                bg="primary.500"
              >
                <Text color="text.500">{item.name}</Text>
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
