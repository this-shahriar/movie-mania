import { Divider, Flex, Text } from "@chakra-ui/layout";

const Footer = () => {
  return (
    <Flex
      w="100%"
      align="center"
      justify="center"
      direction="column"
      data-testid="footer-body"
    >
      <Divider borderColor="text.500" />
      <Text
        p="0.6rem"
        color="text.500"
        fontSize="0.7rem"
        data-testid="footer-text"
      >
        2021 - MovieMania all rights reserved
      </Text>
    </Flex>
  );
};

export default Footer;
