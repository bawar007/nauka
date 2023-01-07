import React from "react";
import Article from "../components/Article.js";

const articles = [
  {
    id: 1,
    title: "Czym jest teoria strun",
    author: "Jan Nowak",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi minima enim similique dolorem in reprehenderit aliquam beatae facere? Inventore non sint, nulla labore nisi quia mollitia? Recusandae asperiores ipsa voluptatibus.",
  },
  {
    id: 2,
    title: "Czym jest  strun",
    author: "Jan Nowaczek",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi minima enim similique dolorem in reprehenderit aliquam beatae facere? Inventore non sint, nulla labore nisi quia mollitia? Recusandae asperiores ipsa voluptatibus.",
  },
  {
    id: 3,
    title: "Czym teoria strun",
    author: "Jan Nowa",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi minima enim similique dolorem in reprehenderit aliquam beatae facere? Inventore non sint, nulla labore nisi quia mollitia? Recusandae asperiores ipsa voluptatibus.",
  },
];

const HomePage = () => {
  const artList = articles.map((item) => <Article key={item.id} body={item} />);
  return <div>{artList}</div>;
};

export default HomePage;
