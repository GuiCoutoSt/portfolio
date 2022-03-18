import { Box, Button, Flex, Text } from "@chakra-ui/react";

import { WorksBox } from "../../components/WorksBox";

import { motion } from "framer-motion";

const FlexMotion = motion(Flex);
const TextMotion = motion(Text);
const ButtomMotion = motion(Button);

export const Section4 = () => {
  const variants = {
    visible: {
      opacity: 1,
    },
    hidden: {
      opacity: 0,
    },
  };

  const handleClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <FlexMotion as="section" flexDir="column">
      <Box
        w={["310px", "450px", "550px", "750px"]}
        padding={["20px", "20px", "10px", "50px"]}
      >
        <TextMotion
          id="works"
          fontSize={["2xl", "4xl", "4xl", "5xl"]}
          fontWeight="bold"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={variants}
          transition={{ duration: 1 }}
        >
          Works
        </TextMotion>

        <TextMotion
          m="10px 0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={variants}
          transition={{ duration: 0.8 }}
        >
          Aqui estão alguns dos meus principais trabalhos. Para conhecer mais,
          por favor, visite meu <b>GitHub</b>:
        </TextMotion>

        <ButtomMotion
          onClick={() => {
            handleClick("https://github.com/GuiCoutoSt");
          }}
          bgColor="white"
          color="black"
          border="3px solid black"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={variants}
          transition={{ duration: 0.8 }}
          whileHover={{ backgroundColor: "black", color: "white" }}
        >
          GitHub
        </ButtomMotion>
      </Box>
      <WorksBox />
    </FlexMotion>
  );
};
