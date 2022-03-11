import { Box, Flex, Image, Text } from "@chakra-ui/react";
import Hamburger from "hamburger-react";
import { motion } from "framer-motion";

const FlexMotion = motion(Flex);
const BoxMotion = motion(Box);
const ImageMotion = motion(Image);

export const Home = () => {
  return (
    <>
      <BoxMotion
        position="absolute"
        right="0"
        padding="0 20px"
        animate={{ opacity: [0, 1] }}
      >
        <Hamburger />
      </BoxMotion>
      <Flex
        w="100vw"
        h="100vh"
        flexDir={["column", "column", "row"]}
        justifyContent="space-between"
        alignItems="center"
      >
        <FlexMotion
          w="100%"
          h="100%"
          flexDir="column"
          alignItems="center"
          animate={{ opacity: [0, 1], y: [-10, 0] }}
        >
          <Box textAlign={["center", "left"]} margin="auto 0">
            <Text
              fontSize={["xl", "2xl", "4xl", "5xl"]}
              fontWeight="bold"
              overflowWrap="break-word"
            >
              Guilherme Couto
            </Text>
            <Text
              color="blue.100"
              fontSize={["lg", "xl", "2xl", "4xl"]}
              fontWeight="bold"
              fontStyle="italic"
            >
              Web Developer
            </Text>
            <Text
              color="pink.100"
              fontSize={["lg", "xl", "2xl", "4xl"]}
              fontWeight="bold"
            >
              Front-end
            </Text>
          </Box>
        </FlexMotion>
        <ImageMotion
          src={require("../../assets/bird.png")}
          draggable={false}
          h={["50%", "55%", "65%", "70%", "80%"]}
          alignSelf={["center", "flex-end"]}
          animate={{ opacity: [0, 1], y: [10, 0] }}
        />
      </Flex>
    </>
  );
};
