import { Box, Flex, Icon, Link, Text } from "@chakra-ui/react";

import Hamburger from "hamburger-react";

import { motion, AnimatePresence } from "framer-motion";

import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";

import { useState } from "react";

const FlexMotion = motion(Flex);
const BoxMotion = motion(Box);
const TextMotion = motion(Text);

export const Menu = () => {
  const [open, setOpen] = useState(false);

  const variants = {
    visible: {
      opacity: 1,
    },
    hidden: {
      opacity: 0,
    },
  };

  return (
    <>
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
            flexDir={["column", "column", "row", "row"]}
            justifyContent="space-evenly"
            alignItems="center"
            position="fixed"
            w="100%"
            h="100vh"
            bgColor="rgba(0, 0, 0, .8)"
            zIndex="2"
            onClick={() => setOpen(false)}
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 0.05 }}
            exit={{ opacity: 0 }}
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
            </Flex>
            <FlexMotion
              as="section"
              flexDir="column"
              color="#FFF"
              className="contact"
            >
              <Text m="10px 0">Entre em contato:</Text>

              <Flex justifyContent="space-evenly">
                <Link
                  href="https://github.com/GuiCoutoSt"
                  target="_blank"
                  _focus={{ boxShadow: "none" }}
                >
                  <Icon
                    as={BsGithub}
                    h={8}
                    w={8}
                    _hover={{ color: "blue.100", transition: "0.5s" }}
                    css={{
                      ":not(:hover)": {
                        transition: "0.5s",
                      },
                    }}
                  />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/guilhermecoutodev/"
                  target="_blank"
                  _focus={{ boxShadow: "none" }}
                >
                  <Icon
                    as={BsLinkedin}
                    h={8}
                    w={8}
                    _hover={{ color: "blue.100", transition: "0.5s" }}
                    css={{
                      ":not(:hover)": {
                        transition: "0.5s",
                      },
                    }}
                  />
                </Link>
                <Link
                  href="https://wa.me/5561982342442"
                  target="_blank"
                  _focus={{ boxShadow: "none" }}
                >
                  <Icon
                    as={BsWhatsapp}
                    h={8}
                    w={8}
                    _hover={{ color: "blue.100", transition: "0.5s" }}
                    css={{
                      ":not(:hover)": {
                        transition: "0.5s",
                      },
                    }}
                  />
                </Link>
              </Flex>
            </FlexMotion>
          </FlexMotion>
        )}
      </AnimatePresence>
    </>
  );
};
