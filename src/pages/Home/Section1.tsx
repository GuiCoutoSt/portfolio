import { Box, Flex, Image, Text } from "@chakra-ui/react";

import { motion } from "framer-motion";

const FlexMotion = motion(Flex);
const ImageMotion = motion(Image);

export const Section1 = () => {
  return (
    <Flex
      id="section1"
      w="80vw"
      h="105vh"
      flexDir={["column", "column", "column", "column", "column", "row"]}
      justifyContent="space-between"
      alignItems="center"
    >
      <FlexMotion
        w="80vw"
        h="100vh"
        flexDir="column"
        animate={{ opacity: [0, 1], y: [-10, 0] }}
      >
        <Box
          textAlign={["center", "center", "center", "center", "center", "left"]}
          margin="auto 0"
        >
          <Text
            fontSize={["2xl", "4xl", "5xl", "6xl"]}
            fontWeight="bold"
            overflowWrap="break-word"
          >
            Guilherme Couto
          </Text>
          <Text
            color="blue.100"
            fontSize={["xl", "2xl", "4xl", "5xl"]}
            fontWeight="bold"
            fontStyle="italic"
          >
            Web Developer
          </Text>
          <Text
            color="pink.100"
            fontSize={["xl", "2xl", "4xl", "5xl"]}
            fontWeight="bold"
          >
            Front-end
          </Text>
        </Box>
      </FlexMotion>

      <ImageMotion
        src={require("../../assets/bird.png")}
        draggable={false}
        h={["40%", "45%", "55%", "65%", "75%"]}
        alignSelf={[
          "center",
          "center",
          "center",
          "center",
          "center",
          "flex-end",
        ]}
        animate={{ opacity: [0, 1], y: [10, 0] }}
      />
    </Flex>
  );
};