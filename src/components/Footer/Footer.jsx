import { Box, Button, Flex, Link } from "@chakra-ui/react";
import React from "react";

const Footer = () => <Box px={4}>
  <Flex alignItems={"center"}
        justifyContent={"center"} gap={8} h={20}>
    <Button colorScheme="teal" variant="link">
      <Link
        href={"https://github.com/tiagoornelas/middle-earth-charts"}
        target={"_blank"}>
        Github
      </Link>
    </Button>
    <Link href={"https://apexcharts.com/react-chart-demos/"} target={"_blank"}>
      <Button colorScheme="teal" variant="link">
        More
        Apexcharts
        for
        React
      </Button>
    </Link>
    <Button colorScheme="teal" variant="link">
      <Link href={"https://www.npmjs.com/package/apexcharts"} target={"_blank"}>NPM
        Package</Link>
    </Button>
  </Flex>
</Box>;

export default Footer;
