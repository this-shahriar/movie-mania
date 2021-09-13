import logo from "../../assets/logo.png";
import { Flex, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { useHistory } from "react-router";

const Header = () => {
  const router = useHistory();
  return (
    <Flex p="0 1rem" align="center" w="100%" h="4rem" bg="primary.500">
      <Image
        h="5rem"
        src={logo}
        objectFit="cover"
        onClick={() => router?.push("/")}
      />
    </Flex>
  );
};

export default Header;
