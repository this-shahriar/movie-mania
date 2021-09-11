import { Flex, Text } from "@chakra-ui/layout";

const Header = () => {
  return (
    <Flex p="0 1rem" align="center" w="100%" h="4rem" bg="primary.500">
      <Text color="text.500" m="0" fontWeight="bold">
        Movie Mania
      </Text>
    </Flex>
  );
};

export default Header;
