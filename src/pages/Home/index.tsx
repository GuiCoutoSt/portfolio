import { Box, Flex, Link } from "@chakra-ui/react";

import { Section1 } from "./Section1";
import { Section2 } from "./Section2";
import { Section3 } from "./Section3";
import { Section4 } from "./Section4";

import Hamburger from "hamburger-react";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const FlexMotion = motion(Flex);
const BoxMotion = motion(Box);

export const Home = () => {
  const [open, setOpen] = useState(false);

  return (
    <Flex
      flexDir="column"
      alignItems={["center"]}
      justifyContent="flex-start"
      position="relative"
    >
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
          toggled={open}
          toggle={setOpen}
          color="#000"
          distance="sm"
          rounded
          size={30}
          hideOutline={false}
        />
      </BoxMotion>
      <AnimatePresence>
        {open && (
          <FlexMotion
            justifyContent="center"
            alignItems="center"
            position="fixed"
            w="100%"
            h="100vh"
            bgColor="rgba(0, 0, 0, .8)"
            zIndex="2"
            onClick={() => setOpen(false)}
            animate={{ opacity: [0.8, 1] }}
            transition={{ duration: 0.1 }}
            exit={{ opacity: 0.9 }}
          >
            <Flex
              flexDir="column"
              w="fit-content"
              boxShadow="none"
              color="white"
              fontSize={["xl", "2xl", "3xl"]}
              fontWeight="semibold"
            >
              <Link
                href="#about-me"
                onClick={() => setOpen(false)}
                textDecoration="underline 0.15em rgba(0, 0, 0, 0)"
                transition="text-decoration-color 300ms"
                _hover={{ textDecorationColor: "white" }}
              >
                # sobre mim
              </Link>
              <Link
                href="#interests"
                onClick={() => setOpen(false)}
                textDecoration="underline 0.15em rgba(0, 0, 0, 0)"
                transition="text-decoration-color 300ms"
                _hover={{ textDecorationColor: "white" }}
              >
                # meus interesses
              </Link>
              <Link
                href="#skills"
                onClick={() => setOpen(false)}
                textDecoration="underline 0.15em rgba(0, 0, 0, 0)"
                transition="text-decoration-color 300ms"
                _hover={{ textDecorationColor: "white" }}
              >
                # skills
              </Link>
              <Link
                href="#works"
                onClick={() => setOpen(false)}
                textDecoration="underline 0.15em rgba(0, 0, 0, 0)"
                transition="text-decoration-color 300ms"
                _hover={{ textDecorationColor: "white" }}
              >
                # works
              </Link>
              <Link
                onClick={() => setOpen(false)}
                textDecoration="underline 0.15em rgba(0, 0, 0, 0)"
                transition="text-decoration-color 300ms"
                _hover={{ textDecorationColor: "white" }}
              >
                # contato
              </Link>
            </Flex>
          </FlexMotion>
        )}
      </AnimatePresence>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </Flex>
  );
};
