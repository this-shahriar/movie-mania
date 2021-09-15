import { Image } from "@chakra-ui/image";
import { Button } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/spinner";
import fallbackImg from "../../assets/fallback.gif";
import { useHistory, useParams } from "react-router";
import { Select } from "@chakra-ui/select";
import { useContext, useEffect, useState } from "react";
import { GenreContext } from "../../contexts/GenreContext";
import { ApiConfigContext } from "../../contexts/ApiConfigContext";
import { Divider, Flex, Grid, GridItem, Text } from "@chakra-ui/layout";
import WatchListBtn from "../../components/WatchlistBtn";

const Genres = () => {
  const router = useHistory();
  const { id, name } = useParams();
  const [list, setList] = useState();
  const { getMoviesByGenre } = useContext(GenreContext);
  const { imageBase, posterSizes } = useContext(ApiConfigContext);

  const getList = async () => setList(await getMoviesByGenre(id));

  useEffect(() => {
    getList();
  }, []);

  return (
    <Flex direction="column" w="100%" p="1rem">
      <Flex
        h="10rem"
        align="center"
        justify="center"
        overflow="hidden"
        position="relative"
      >
        <Text color="text.500" fontSize="1.8rem" fontWeight="bold">
          Genre - {name}
        </Text>
        <Text
          opacity="0.1"
          color="text.500"
          fontWeight="800"
          userSelect="none"
          position="absolute"
          fontSize={{ base: "8rem", sm: "24rem" }}
        >
          {name}
        </Text>
      </Flex>
      <Flex align="center" p="1rem 0 2rem 0">
        <Divider borderColor="text.500" />
        <Text whiteSpace="nowrap" color="text.500" p="0 1rem">
          Top 10 movies in {name}
        </Text>
        <Divider borderColor="text.500" />
      </Flex>
      {list ? (
        list.length > 0 ? (
          <Grid templateColumns="repeat(6, 1fr)" gap={10}>
            {list
              .sort((a, b) => (a.vote_average < b.vote_average ? 1 : -1))
              .slice(0, 10)
              .map((movie, idx) => (
                <GridItem
                  w="100%"
                  key={idx}
                  role="group"
                  bg="back.500"
                  cursor="pointer"
                  borderRadius="6px"
                  colSpan={{ base: 6, lg: 3, xl: 2 }}
                >
                  <Grid templateColumns="repeat(2, 1fr)" h="100%">
                    <GridItem
                      h="100%"
                      userSelect="none"
                      transform="scale(1.03)"
                      colSpan={{ base: 2, sm: 1 }}
                      _groupHover={{
                        transform: "scale(1.04)",
                        transition: "all linear 0.1s",
                      }}
                    >
                      <Image
                        h="inherit"
                        objectFit="cover"
                        overflow="hidden"
                        borderRadius="6px"
                        fallbackSrc={fallbackImg}
                        src={imageBase + posterSizes[5] + movie.poster_path}
                      />
                    </GridItem>
                    <GridItem p="2rem" h="100%" colSpan={{ base: 2, sm: 1 }}>
                      <Text
                        w="100%"
                        pb="1rem"
                        lineHeight="1.1"
                        fontWeight="800"
                        color="secondary.500"
                        fontSize={{ base: "1.6rem", sm: "2.2rem" }}
                      >
                        {movie.title}
                      </Text>
                      <Text fontSize="0.8rem" fontWeight="bold">
                        {movie.release_date}
                      </Text>
                      <Text fontSize="0.8rem" fontWeight="bold">
                        Rating : {movie.vote_average} ({movie.vote_count}{" "}
                        reviews)
                      </Text>
                      <Text p="1rem 0">
                        {movie.overview.length > 200
                          ? `${movie.overview.substring(0, 200)}...`
                          : movie.overview}
                      </Text>
                      <Flex direction="column">
                        <Button
                          mb="1rem"
                          colorScheme="primary"
                          onClick={() => router?.push(`/movies/${movie.id}`)}
                        >
                          Learn More
                        </Button>
                        <WatchListBtn
                          variant="link"
                          item={{
                            id: movie.id,
                            title: movie.title,
                            poster_path: movie.poster_path,
                            vote_average: movie.vote_average,
                            release_date: movie.release_date,
                          }}
                        />
                      </Flex>
                    </GridItem>
                  </Grid>
                </GridItem>
              ))}
          </Grid>
        ) : (
          <Text>No movies found</Text>
        )
      ) : (
        <Spinner />
      )}
    </Flex>
  );
};

export default Genres;
