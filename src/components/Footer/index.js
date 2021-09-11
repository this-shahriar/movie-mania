import { Divider, Flex, Text } from "@chakra-ui/layout";

const Footer = () => {
  return (
    <Flex w="100%" align="center" justify="center" direction="column">
      <Divider />
      <Text color="gray" fontSize="0.7rem" p="0.6rem">
        2021 - MovieMania all rights reserved
      </Text>
    </Flex>
  );
};

export default Footer;
