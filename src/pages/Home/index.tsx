import { Menu } from "../../components/Menu";

import { Section1 } from "./Section1";
import { Section2 } from "./Section2";
import { Section3 } from "./Section3";
import { Section4 } from "./Section4";

import { Flex } from "@chakra-ui/react";

export const Home = () => {
  return (
    <Flex
      flexDir="column"
      alignItems={["center"]}
      justifyContent="flex-start"
      position="relative"
    >
      <Menu />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </Flex>
  );
};
