import logo from "../../assets/logo.png";
import { Flex, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { useHistory } from "react-router";
import { Button } from "@chakra-ui/react";
import { useContext } from "react";
import { WatchListContext } from "../../contexts/WatchListContext";

const Header = () => {
  const router = useHistory();
  const { watchList } = useContext(WatchListContext);

  return (
    <Flex
      p="0 1rem"
      align="center"
      justify="space-between"
      w="100%"
      h="4rem"
      bg="primary.500"
    >
      <Image
        h="5rem"
        src={logo}
        objectFit="cover"
        onClick={() => router?.push("/")}
      />
      <Button
        variant="link"
        colorScheme="text"
        onClick={() => router?.push("/watchlist")}
      >
        Watchlist ({watchList?.length || 0})
      </Button>
    </Flex>
  );
};

export default Header;
