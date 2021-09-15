import { Image } from "@chakra-ui/image";
import { Divider, Flex, Grid, GridItem, Text } from "@chakra-ui/layout";
import fallbackimg from "../../assets/fallback.gif";

const Cast = ({ cast, imageBase, posterSizes }) => (
  <Flex p="1rem" direction="column">
    <Flex p="1rem 0" align="center">
      <Divider borderColor="text.500" />
      <Text whiteSpace="nowrap" color="text.500" p="0 1rem">
        C A S T S
      </Text>
      <Divider borderColor="text.500" />
    </Flex>

    <Grid maxW="100vw" templateColumns="repeat(18, 1fr)">
      {cast.map((item, idx) => (
        <GridItem p="0.5rem" colSpan={{ base: 9, sm: 6, lg: 2 }} key={idx}>
          <Image
            overflow="hidden"
            borderRadius="6px"
            h="10rem"
            w="100%"
            objectFit="cover"
            src={imageBase + posterSizes[2] + item.profile_path}
            fallbackSrc={fallbackimg}
          />
          <Text pt="0.5rem" color="back.500">
            {item.name}
          </Text>
          <Text fontSize="0.8rem" color="text.500">
            {item.character}
          </Text>
        </GridItem>
      ))}
    </Grid>
  </Flex>
);

export default Cast;
