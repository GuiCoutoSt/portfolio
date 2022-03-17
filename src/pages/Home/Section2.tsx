import { Box, Flex, Image, Text } from "@chakra-ui/react";

import { motion } from "framer-motion";

const FlexMotion = motion(Flex);
const ImageMotion = motion(Image);
const TextMotion = motion(Text);

export const Section2 = () => {
  const variants = {
    visible: {
      opacity: 1,
    },
    hidden: {
      opacity: 0,
    },
  };

  return (
    <FlexMotion
      id="section2"
      as="section"
      flexDir={["column", "column", "column", "column", "column", "row"]}
      justifyContent={[
        "flex-start",
        "flex-start",
        "flex-start",
        "flex-start",
        "center",
      ]}
      alignItems="center"
      w="80vw"
      h={[
        "fit-content",
        "fit-content",
        "fit-content",
        "fit-content",
        "fit-content",
        "100vh",
      ]}
      padding="60px 0"
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
          Sobre Mim
        </TextMotion>

        <TextMotion
          m="10px 0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={variants}
          transition={{ duration: 0.8 }}
        >
          Olá, tudo bem? Sou o Guilherme, tenho 26 anos, moro em Brasília-DF e
          sou <b>Desenvolvedor Web Front-end</b>.
        </TextMotion>

        <TextMotion
          m="10px 0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={variants}
          transition={{ duration: 0.8 }}
        >
          Minha trajetória na tecnologia se iniciou de fato em 2019, quando tive
          o primeiro contato com algumas tecnologias de desenvolvimento, como{" "}
          <b>HTML</b>, <b>CSS</b> e <b>Python</b>, além de{" "}
          <b>lógica de programação</b>.
        </TextMotion>

        <TextMotion
          m="10px 0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={variants}
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
          variants={variants}
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
          variants={variants}
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
          variants={variants}
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
          variants={variants}
          transition={{ duration: 0.8 }}
        >
          Atualmente continuo meus estudos no Back-end, e continuo me
          apaixonando diariamente pela tecnologia e programação.
        </TextMotion>
      </Box>
      <Box>
        <ImageMotion
          src={require("../../assets/images/plant-1.png")}
          alt="A generic plant"
          h={["400px", "400px", "500px", "500px", "700px"]}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={variants}
          transition={{ duration: 2 }}
        />
      </Box>
    </FlexMotion>
  );
};
