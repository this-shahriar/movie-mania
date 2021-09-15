import { Image } from "@chakra-ui/image";
import { Box, Divider, Flex, Grid, GridItem, Text } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";
import { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { ApiConfigContext } from "../../contexts/ApiConfigContext";
import { MovieDetailContext } from "../../contexts/MovieDetailsContext";
import fallbackImg from "../../assets/fallback.gif";
import { StarIcon } from "@chakra-ui/icons";
import Intro from "./Intro";
import InfoBar from "./InfoBar";
import Cast from "./Cast";
import Crew from "./Crew";
import MovieGallery from "../../components/MovieGallery";
import { RecentlyVisitedContext } from "../../contexts/VisitedContext";

const MovieDetails = () => {
  const { id } = useParams();
  const router = useHistory();
  const [details, setDetails] = useState();
  const [credits, setCredits] = useState();
  const [related, setRelated] = useState();
  const { imageBase, posterSizes } = useContext(ApiConfigContext);
  const { setRecently } = useContext(RecentlyVisitedContext);
  const { getMovieDetails, getMovieCredits, getRelatedMovies } =
    useContext(MovieDetailContext);

  const getDetails = async () => {
    setDetails(await getMovieDetails(id));
    setCredits(await getMovieCredits(id));
    setRelated(await getRelatedMovies(id));
  };

  useEffect(() => {
    setDetails();
    setCredits();
    setRelated();

    getDetails();
  }, [id]);

  useEffect(() => {
    if (details) {
      const entry = {
        id: details.id,
        poster_path: details.poster_path,
        title: details.title,
        release_date: details.release_date,
        vote_average: details.vote_average,
      };

      setRecently((rv) => {
        if (rv) {
          if (rv.map((mov) => mov.id).includes(details.id)) {
            return rv;
          } else {
            return [entry, ...rv];
          }
        } else return [entry];
      });
    }
  }, [details]);

  return (
    <Flex direction="column">
      {details ? (
        <Flex position="relative" direction="column">
          <Image
            w="100vw"
            h="34rem"
            maxW="1920px"
            objectFit="cover"
            objectPosition="50% 5%"
            filter={{ base: "brightness(0.4)", sm: "brightness(0.25)" }}
            src={`${imageBase}${posterSizes[5]}${
              window.innerWidth > 480
                ? details.backdrop_path
                : details.poster_path
            }`}
            fallbackSrc={fallbackImg}
          />
          <Flex
            direction={{ base: "column", sm: "row" }}
            p="1rem"
            w="100%"
            justify="center"
            position="absolute"
          >
            <Flex position="relative">
              <Flex
                align="center"
                bg="secondary.500"
                left={{ base: "1rem", sm: "-1.8rem" }}
                top={{ base: "1rem", sm: "1.5rem" }}
                position="absolute"
                p={{ base: "0.4rem 1.6rem", sm: "0.5rem 1rem" }}
                borderRadius="6px"
              >
                <StarIcon color="back.500" fontSize="0.8rem" />
                <Text
                  ml="0.4rem"
                  fontSize="1rem"
                  fontWeight="bold"
                  color="back.500"
                >
                  {details.vote_average}
                </Text>
              </Flex>
            </Flex>
            <Image
              h="32rem"
              objectFit="cover"
              borderRadius="6px"
              overflow="none"
              src={`${imageBase}${posterSizes[5]}${details.poster_path}`}
            />
            <Box display={{ base: "none", sm: "block" }}>
              <Intro details={details} router={router} />
            </Box>
          </Flex>
          <Box display={{ base: "block", sm: "none" }}>
            <Intro details={details} router={router} />
          </Box>
          <InfoBar details={details} />
          {credits && (
            <Flex direction="column">
              <Cast
                imageBase={imageBase}
                posterSizes={posterSizes}
                cast={credits?.cast?.slice(0, 9)}
              />
              <Crew
                imageBase={imageBase}
                posterSizes={posterSizes}
                crew={credits?.crew?.slice(0, 9)}
              />
            </Flex>
          )}
          {related?.results?.length > 0 && (
            <Flex direction="column">
              <Flex p="0 1rem 2rem 1rem" align="center">
                <Divider borderColor="text.500" />
                <Text whiteSpace="nowrap" p="0 1rem" color="text.500">
                  Similar Movies
                </Text>
                <Divider borderColor="text.500" />
              </Flex>
              <Flex
                m="auto"
                w={{ base: 300, sm: 600, lg: 1024 }}
                maxW="90vw"
                direction="column"
              >
                <MovieGallery list={related.results.slice(0, 5)} />
              </Flex>
            </Flex>
          )}
        </Flex>
      ) : (
        <Flex w="100" h="100%" justify="center" align="center">
          <Spinner color="text.500" />
        </Flex>
      )}
    </Flex>
  );
};

export default MovieDetails;
