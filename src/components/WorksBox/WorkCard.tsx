import {
  Box,
  Flex,
  Image,
  Link,
  LinkBox,
  LinkOverlay,
  Text,
} from "@chakra-ui/react";

import { motion } from "framer-motion";

const LinkBoxMotion = motion(LinkBox);

const variants = {
  visible: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
  },
};

interface WorkCardProps {
  title: string;
  description: string;
  image: string;
  url: string;
  repoUrl: string;
  color: string;
}

export const WorkCard = ({
  title,
  description,
  image,
  url,
  repoUrl,
  color,
}: WorkCardProps) => {
  return (
    <LinkBoxMotion
      flexDir="column"
      w="fit-content"
      h="fit-content"
      border="2px solid"
      borderRadius="10px"
      margin="10px 0"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={variants}
      transition={{ duration: 0.8 }}
      whileHover={{
        y: -2,
        x: 2,
        boxShadow: "-3px 3px black",
        transition: { ease: "easeOut", duration: 0.3 },
      }}
    >
      <Box borderBottom="2px solid black" padding="10px">
        <LinkOverlay href={url} target="_blank">
          <Text fontSize="lg" fontWeight="semibold">
            {title}
          </Text>
        </LinkOverlay>

        <Text
          fontSize="xs"
          w="260px"
          display="-webkit-box"
          css={{
            "-webkit-line-clamp": "3",
            "-webkit-box-orient": "vertical",
          }}
          overflow="hidden"
        >
          {description}
        </Text>

        <Link
          href={repoUrl}
          target="_blank"
          fontSize="xs"
          fontWeight="medium"
          color="#FF8AAE"
          textDecoration="underline 0.15em rgba(0, 0, 0, 0)"
          transition="text-decoration-color 300ms"
          _hover={{ textDecorationColor: "#FF8AAE" }}
        >
          Repositório
        </Link>
      </Box>
      <Flex
        flexDir="column"
        alignItems="center"
        bgColor={color}
        padding="20px"
        borderRadius="0 0 7px 7px"
      >
        <Image
          src={image}
          alt="A small frame of the web app."
          w="250px"
          borderRadius="10px"
          boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)"
        />
      </Flex>
    </LinkBoxMotion>
  );
};
