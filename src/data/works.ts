import { v4 as uuidv4 } from "uuid";

import { getRandomColor } from "../utils/random-color";

export const worksList = [
  {
    id: uuidv4(),
    title: "Hamburgueria",
    description:
      "A hamburgueria consiste em uma simples aplicação de marketplace desenvolvida para fixar conceitos de TypeScript. Tem Login, Cadastro, Dashboard e um Carrinho.",
    image: require("../assets/work-frames/hamburgueria.png"),
    url: "https://hamburgueria-pied.vercel.app/",
    repoUrl: "https://github.com/GuiCoutoSt/hamburgueria-2",
    color: getRandomColor(),
  },

  {
    id: uuidv4(),
    title: "Kenzie Shop",
    description:
      "Simples marketplace, desenvolvido para praticar conceitos de ContextAPI. Foi feito em ReactJS.",
    image: require("../assets/work-frames/kenzie-shop.png"),
    url: "https://kenzieshop-contextapi-theta.vercel.app/",
    repoUrl: "https://github.com/GuiCoutoSt/kenzie-shop-contextapi",
    color: getRandomColor(),
  },

  {
    id: uuidv4(),
    title: "Space Maze",
    description:
      "Space Maze é um jogo 2D feito com HTML5, CSS3 e JavaScript. Consiste em comandar sua espaçonave por um labirinto até o planeta 9.",
    image: require("../assets/work-frames/space-maze.png"),
    url: "https://guicoutost.github.io/space-maze/",
    repoUrl: "https://github.com/GuiCoutoSt/space-maze",
    color: getRandomColor(),
  },

  {
    id: uuidv4(),
    title: "Magic 8-Ball",
    description:
      "Esse projeto consiste em uma representação virtual do brinquedo Magic 8-Ball.",
    image: require("../assets/work-frames/magic-8-ball.png"),
    url: "https://guicoutost.github.io/magic-8-ball/",
    repoUrl: "https://github.com/GuiCoutoSt/magic-8-ball",
    color: getRandomColor(),
  },
];
