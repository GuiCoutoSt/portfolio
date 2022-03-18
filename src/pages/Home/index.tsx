import {
  Box,
  Flex,
  Link,
  Modal,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";

import { Section1 } from "./Section1";
import { Section2 } from "./Section2";
import { Section3 } from "./Section3";
import { Section4 } from "./Section4";

import Hamburger from "hamburger-react";

import { motion } from "framer-motion";

const FlexMotion = motion(Flex);
const BoxMotion = motion(Box);

export const Home = () => {
  const { isOpen, onClose, onToggle } = useDisclosure();

  return (
    <Flex flexDir="column" alignItems={["center"]} justifyContent="flex-start">
      <BoxMotion
        as="span"
        bgColor="white"
        position="fixed"
        top="5"
        right="5"
        animate={{ opacity: [0, 1] }}
        boxShadow="0px 0px 10px rgba(0, 0, 0, 0.2)"
        borderRadius="50px"
        _css={{
          "-webkit-tap-highlight-color": "transparent",
        }}
        _first={{
          zIndex: 3,
        }}
      >
        <Hamburger
          toggled={isOpen}
          onToggle={onToggle}
          color="#000"
          distance="sm"
          rounded
          size={25}
          hideOutline={false}
        />
      </BoxMotion>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        blockScrollOnMount={false}
      >
        <ModalOverlay bgColor="rgba(0, 0, 0, .8)" zIndex="2" />
        <ModalContent bgColor="transparent" w="fit-content" boxShadow="none">
          <FlexMotion
            w="fit-content"
            flexDir="column"
            color="white"
            fontSize={["xl", "2xl", "3xl"]}
            fontWeight="semibold"
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 0.8 }}
            exit={{ opacity: 0 }}
          >
            <Link
              href="#about-me"
              onClick={onClose}
              textDecoration="underline 0.15em rgba(0, 0, 0, 0)"
              transition="text-decoration-color 300ms"
              _hover={{ textDecorationColor: "white" }}
            >
              # sobre mim
            </Link>
            <Link
              href="#interests"
              onClick={onClose}
              textDecoration="underline 0.15em rgba(0, 0, 0, 0)"
              transition="text-decoration-color 300ms"
              _hover={{ textDecorationColor: "white" }}
            >
              # meus interesses
            </Link>
            <Link
              href="#skills"
              onClick={onClose}
              textDecoration="underline 0.15em rgba(0, 0, 0, 0)"
              transition="text-decoration-color 300ms"
              _hover={{ textDecorationColor: "white" }}
            >
              # skills
            </Link>
            <Link
              href="#works"
              onClick={onClose}
              textDecoration="underline 0.15em rgba(0, 0, 0, 0)"
              transition="text-decoration-color 300ms"
              _hover={{ textDecorationColor: "white" }}
            >
              # works
            </Link>
            <Link
              onClick={onClose}
              textDecoration="underline 0.15em rgba(0, 0, 0, 0)"
              transition="text-decoration-color 300ms"
              _hover={{ textDecorationColor: "white" }}
            >
              # contato
            </Link>
          </FlexMotion>
        </ModalContent>
      </Modal>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </Flex>
  );
};
