import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

const Header = () => <Box bg={"#4B6B56"} color="white" px={4}>
  <Flex h={"90px"} direction={"column"} alignItems={"center"}
        justifyContent={"center"}>
    <Heading>Middle Earth</Heading>
    <Text>🧙‍♂️ There and back again: a chart's
      tale 🧝‍♂️</Text>
  </Flex>
</Box>;

export default Header;
