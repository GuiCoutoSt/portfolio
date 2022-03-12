import {
  Box,
  CircularProgress,
  Flex,
  Image,
  Link,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

import { Section2 } from "./Section2";
import Hamburger from "hamburger-react";

import { motion } from "framer-motion";

const FlexMotion = motion(Flex);
const BoxMotion = motion(Box);
const ImageMotion = motion(Image);
const TextMotion = motion(Text);

export const Home = () => {
  const { isOpen, onClose, onToggle } = useDisclosure();

  return (
    <Flex flexDir="column" alignItems="center">
      {/*First Page */}

      <BoxMotion
        bgColor="white"
        position="fixed"
        top="5"
        right="5"
        animate={{ opacity: [0, 1] }}
        zIndex="1"
        boxShadow="0px 0px 10px rgba(0, 0, 0, 0.2)"
        borderRadius="50px"
      >
        <Hamburger
          toggled={isOpen}
          onToggle={onToggle}
          color="#000"
          distance="sm"
          rounded
        />
      </BoxMotion>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        blockScrollOnMount={false}
      >
        <ModalOverlay bgColor="rgba(0, 0, 0, .8)" zIndex="0" />
        <ModalContent bgColor="transparent" w="fit-content" boxShadow="none">
          <FlexMotion
            w="fit-content"
            flexDir="column"
            color="white"
            fontSize={["xl", "2xl", "3xl"]}
            fontWeight="semibold"
            animate={{ opacity: [0, 1], y: [-10, 0] }}
            exit={{ opacity: 0 }}
          >
            <Link
              href="#section2"
              onClick={onClose}
              textDecoration="underline 0.15em rgba(0, 0, 0, 0)"
              transition="text-decoration-color 300ms"
              _hover={{ textDecorationColor: "white" }}
            >
              # sobre mim
            </Link>
            <Link
              href="#"
              textDecoration="underline 0.15em rgba(0, 0, 0, 0)"
              transition="text-decoration-color 300ms"
              _hover={{ textDecorationColor: "white" }}
            >
              # skills
            </Link>
            <Link
              textDecoration="underline 0.15em rgba(0, 0, 0, 0)"
              transition="text-decoration-color 300ms"
              _hover={{ textDecorationColor: "white" }}
            >
              # works
            </Link>
            <Link
              textDecoration="underline 0.15em rgba(0, 0, 0, 0)"
              transition="text-decoration-color 300ms"
              _hover={{ textDecorationColor: "white" }}
            >
              # contato
            </Link>
          </FlexMotion>
        </ModalContent>
      </Modal>

      <Flex
        w="80vw"
        h="105vh"
        flexDir={["column", "column", "column", "column", "row"]}
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
            textAlign={["center", "center", "center", "center", "left"]}
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
          alignSelf={["center", "center", "center", "center", "flex-end"]}
          animate={{ opacity: [0, 1], y: [10, 0] }}
        />
      </Flex>
      <Section2 />
    </Flex>
  );
};
