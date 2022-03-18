import { Box, Flex } from "@chakra-ui/react";

import { WorkCard } from "./WorkCard";
import { worksList } from "../../data/works";

export const WorksBox = () => {
  return (
    <Box
      position="relative"
      mt="30px"
      _before={{
        zIndex: 1,
        content: "''",
        position: "absolute",
        top: "0",
        left: "0",
        right: "0",
        h: "20px",
        backgroundImage:
          "linear-gradient(to bottom, rgba(255,255,255,1), rgba(255,255,255,0))",
      }}
      _after={{
        content: "''",
        position: "absolute",
        bottom: "0",
        left: "0",
        right: "0",
        h: "50px",
        backgroundImage:
          "linear-gradient(to top, rgba(255,255,255,1), rgba(255,255,255,0))",
      }}
    >
      <Flex
        flexWrap="wrap"
        justifyContent="space-evenly"
        w={["310px", "450px", "550px", "750px"]}
        h="500px"
        border="0 solid transparent"
        overflowY="scroll"
        css={{
          "::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {worksList.map((work) => (
          <WorkCard
            key={work.id}
            title={work.title}
            description={work.description}
            image={work.image}
            url={work.url}
            repoUrl={work.repoUrl}
            color={work.color}
          />
        ))}
      </Flex>
    </Box>
  );
};
