import { Box, Flex, Image, Text } from "@chakra-ui/react";

import { motion } from "framer-motion";

const BoxMotion = motion(Box);
const ImageMotion = motion(Image);
const TextMotion = motion(Text);

export const Section3 = () => {
  const variants = {
    visible: {
      opacity: 1,
    },
    hidden: {
      opacity: 0,
    },
  };

  return (
    <Flex
      id="section3"
      as="section"
      w="80vw"
      padding="30px 0"
      flexDir="column"
      justifyContent={["center"]}
      alignItems="center"
    >
      <Flex
        justifyContent="flex-start"
        flexDir={["column", "column", "column", "column", "column", "row"]}
      >
        <Box
          w={["310px", "450px", "550px", "750px"]}
          padding={["20px", "20px", "10px", "50px"]}
        >
          <TextMotion
            fontSize={["2xl", "4xl", "4xl", "5xl"]}
            fontWeight="bold"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={variants}
            transition={{ duration: 1 }}
          >
            Meus interesses
          </TextMotion>

          <TextMotion
            m="10px 0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={variants}
            transition={{ duration: 0.8 }}
          >
            Gosto de desenvolver produtos de qualidade, que tragam princípios
            minimalistas, tanto visualmente quanto tecnicamente e que agreguem
            valor, podendo trazer transformação e facilidade para vida das
            pessoas.
          </TextMotion>

          <TextMotion
            m="10px 0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={variants}
            transition={{ duration: 0.8 }}
          >
            Além do Desenvolvimento Web em si, me interesso por Web Design,
            UX/UI e por me conectar com pessoas, principalmente em prol de um
            objetivo em comum.
          </TextMotion>
        </Box>
        <BoxMotion
          w={["310px", "450px", "550px", "750px"]}
          padding={["20px", "20px", "10px", "50px"]}
          fontSize={["2xl", "4xl", "4xl", "5xl"]}
          fontWeight="bold"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={variants}
          transition={{ duration: 1 }}
        >
          <TextMotion>Skills</TextMotion>

          <Box>
            <Text fontWeight="semibold" fontSize="xl" color="blue.100">
              React.Js • Typescript • Redux &amp; ContextAPI • Git • HTML5 •
              CSS3 • JavaScript{" "}
              <Text
                as="span"
                fontWeight="semibold"
                fontSize="xl"
                color="pink.100"
              >
                • Chakra UI • MUI • styled-components • Framer Motion • Cypress
                • Scrum • Figma • Photoshop
              </Text>
            </Text>
          </Box>
        </BoxMotion>
      </Flex>
      <ImageMotion
        src={require("../../assets/plant-2.png")}
        h={["350px", "300px", "500px", "500px", "500px"]}
        margin="20px 0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={variants}
        transition={{ duration: 2 }}
      />
    </Flex>
  );
};
