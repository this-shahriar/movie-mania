import { Flex, Grid, GridItem, Text } from "@chakra-ui/layout";
import { useHistory } from "react-router";
import { Button } from "@chakra-ui/button";
import MovieItem from "../MovieItem";

const MovieGrid = ({ list, setList }) => {
  return (
    <Grid pb="2rem" templateColumns="repeat(18, 1fr)">
      {list?.map((item, idx) => (
        <GridItem
          key={idx}
          p="1rem 1rem 2rem 1rem"
          cursor="pointer"
          colSpan={{ base: 18, sm: 9, lg: 3 }}
        >
          <MovieItem item={item} />
          {setList && (
            <Button
              w="100%"
              size="sm"
              variant="link"
              colorScheme="secondary"
              onClick={() =>
                setList((wl) => wl.filter((mov) => mov.id !== item.id))
              }
            >
              Remove
            </Button>
          )}
        </GridItem>
      ))}
    </Grid>
  );
};

export default MovieGrid;
