import { Box, Flex, Image, Text } from "@chakra-ui/react";

import { motion } from "framer-motion";

const FlexMotion = motion(Flex);
const ImageMotion = motion(Image);
const TextMotion = motion(Text);

export const Section2 = () => {
  const variants1 = {
    visible: {
      opacity: 1,
    },
    hidden: {
      opacity: 0,
    },
  };

  const variants2 = {
    visible: {
      opacity: 1,
      y: 0,
    },
    hidden: {
      opacity: 0,
      y: -10,
    },
  };

  return (
    <FlexMotion
      id="section2"
      flexDir={["column", "column", "column", "row"]}
      w="80vw"
      h="100vh"
      padding="30px 0"
      justifyContent={["flex-start", "flex-start", "flex-start", "center"]}
      alignItems="center"
      // animations
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
          variants={variants1}
          transition={{ duration: 1 }}
        >
          Sobre Mim
        </TextMotion>

        <TextMotion
          m="10px 0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={variants1}
          transition={{ duration: 0.8 }}
        >
          Olá, tudo bem? <br />
          Sou o Guilherme, tenho 26 anos, moro em Brasília e sou{" "}
          <b>Desenvolvedor Web Front-end</b>.
        </TextMotion>

        <TextMotion
          m="10px 0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={variants1}
          transition={{ duration: 0.8 }}
        >
          Minha tragetória na tecnologia se iniciou de fato em 2019, quando tive
          o primeiro contato com algumas tecnologias de desenvolvimento, como{" "}
          <b>HTML</b>, <b>CSS</b> e <b>Python</b>, além de{" "}
          <b>lógica de programação</b>.
        </TextMotion>

        <TextMotion
          m="10px 0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={variants1}
          transition={{ duration: 0.8 }}
        >
          Em 2020, aprofundei meus conhecimentos em <b>Data Science</b>. Porém,
          vi que me sentia melhor desenvolvendo aplicações.
        </TextMotion>

        <TextMotion
          m="10px 0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={variants1}
          transition={{ duration: 0.8 }}
        >
          Procurei por várias fontes de conhecimento, porém sentia falta de um
          direcionamento que me mostrasse o caminho para o mercado de trabalho.
        </TextMotion>

        <TextMotion
          m="10px 0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={variants1}
          transition={{ duration: 0.8 }}
        >
          Nessa busca, em 2021, encontrei a <b>Kenzie Academy Brasil</b>. Gostei
          da proposta e iniciei meus estudos para me tornar um{" "}
          <b>Desenvolvedor Web Full-stack</b>.
        </TextMotion>

        <TextMotion
          m="10px 0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={variants1}
          transition={{ duration: 0.8 }}
        >
          Após vários processos, desde o aprender a aprender, até conhecer
          Frameworks e Bibliotecas em JavaScript, concluí, em Janeiro de 2022, a
          primeira parte do meu aprendizado, recebendo o{" "}
          <Text as="span" color="blue.100" fontWeight="bold">
            certificado de Desenvolvedor Front-end.
          </Text>
        </TextMotion>

        <TextMotion
          m="10px 0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={variants1}
          transition={{ duration: 0.8 }}
        >
          No momento continuo meus estudos no Back-end, e continuo me
          apaixonando diariamente pela tecnologia e programação.
        </TextMotion>
      </Box>

      <ImageMotion
        src={require("../../assets/plant-1.png")}
        h={["50%", "60%", "70%", "80%", "85%"]}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={variants2}
        transition={{ duration: 2 }}
      />
    </FlexMotion>
  );
};
