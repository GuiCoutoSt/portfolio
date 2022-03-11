import { Box, Flex, Image, Text } from "@chakra-ui/react";

export const Home = () => {
  return (
    <>
      <Flex
        w="100vw"
        h="100vh"
        flexDir={["column", "column", "row"]}
        justifyContent="space-between"
        alignItems="center"
      >
        <Flex w="100%" h="100%" flexDir="column" alignItems="center">
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
        </Flex>
        <Image
          src={require("../../assets/bird.png")}
          draggable={false}
          h={["50%", "55%", "65%", "70%", "80%"]}
          alignSelf={["center", "flex-end"]}
        />
      </Flex>
    </>
  );
};
