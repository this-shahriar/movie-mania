import { Grid, GridItem, Text } from "@chakra-ui/layout";

const InfoBar = ({ details }) => (
  <Grid
    pt="1rem"
    maxW="1024"
    m="auto"
    w="100%"
    color="back.500"
    templateColumns="repeat(6, 1fr)"
    textAlign="center"
  >
    <GridItem p="1rem" colSpan={{ base: 3, sm: 2, lg: 1 }}>
      <Text
        fontSize="0.8rem"
        fontWeight="800"
        textTransform="uppercase"
        letterSpacing="0.3rem"
        opacity="0.8"
      >
        Popularity
      </Text>
      <Text fontSize="1.2rem">{details.popularity}</Text>
    </GridItem>
    <GridItem p="1rem" colSpan={{ base: 3, sm: 2, lg: 1 }}>
      <Text
        fontSize="0.8rem"
        fontWeight="800"
        textTransform="uppercase"
        letterSpacing="0.3rem"
        opacity="0.8"
      >
        Reviewed
      </Text>
      <Text fontSize="1.2rem">{details.vote_count}</Text>
    </GridItem>
    <GridItem p="1rem" colSpan={{ base: 3, sm: 2, lg: 1 }}>
      <Text
        fontSize="0.8rem"
        fontWeight="800"
        textTransform="uppercase"
        letterSpacing="0.3rem"
        opacity="0.8"
      >
        Status
      </Text>
      <Text fontSize="1.2rem">{details.status}</Text>
    </GridItem>
    <GridItem p="1rem" colSpan={{ base: 3, sm: 2, lg: 1 }}>
      <Text
        fontSize="0.8rem"
        fontWeight="800"
        textTransform="uppercase"
        letterSpacing="0.3rem"
        opacity="0.8"
      >
        Rating
      </Text>
      <Text fontSize="1.2rem">{details.vote_average}</Text>
    </GridItem>
    <GridItem p="1rem" colSpan={{ base: 3, sm: 2, lg: 1 }}>
      <Text
        fontSize="0.8rem"
        fontWeight="800"
        textTransform="uppercase"
        letterSpacing="0.3rem"
        opacity="0.8"
      >
        Budget
      </Text>
      <Text fontSize="1.2rem">{Math.ceil(details.budget / 1000000)}M</Text>
    </GridItem>
    <GridItem p="1rem" colSpan={{ base: 3, sm: 2, lg: 1 }}>
      <Text
        fontSize="0.8rem"
        fontWeight="800"
        textTransform="uppercase"
        letterSpacing="0.3rem"
        opacity="0.8"
      >
        Revenue
      </Text>
      <Text fontSize="1.2rem">{Math.ceil(details.revenue / 1000000)} M</Text>
    </GridItem>
  </Grid>
);

export default InfoBar;
