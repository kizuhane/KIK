import React from "react";

/* import:: components */
import Title from "../components/articleContents/title";
import Paragraphs from "../components/articleContents/paragraphs";
import ElementsHeader from "../components/articleContents/ElementsHeader";
import LinkList from "../components/articleContents/linkList";
import ATag from "../components/aTag";

const UsedTechnologyList = [
  { text: "ReactJS", href: "https://pl.reactjs.org/" },
  { text: "React router", href: "https://reacttraining.com/react-router/" },
  {
    text: "Styled Components",
    href: "https://www.styled-components.com/"
  },
  { text: "Express", href: "https://expressjs.com/" },
  { text: "Highlight.js", href: "https://highlightjs.org/" }
];

const UsedDependenciesList = [
  { text: "simplebar", href: "https://github.com/Grsmto/simplebar" },
  {
    text: "normalize-strings",
    href: "https://www.npmjs.com/package/normalize-strings"
  }
];

const AboutPage = () => {
  return (
    <article>
      <Title ShowIcon={false}>Baza wiedzy Politechniki Koszalińskiej</Title>
      <ElementsHeader>Informacje o stronie</ElementsHeader>
      <Paragraphs>
        Strona zostało stworzona jako część pracy inżynierskiej przez Artura
        Jakiel dla politechniki koszalińskiej, Wykorzystuje technologie ReactJS.
      </Paragraphs>

      <ElementsHeader>Wykożystane technoligie</ElementsHeader>
      <LinkList>{UsedTechnologyList}</LinkList>

      <ElementsHeader>Wykożystane Bibloteki</ElementsHeader>
      <LinkList>{UsedDependenciesList}</LinkList>

      <ElementsHeader>Pozostałe informacje</ElementsHeader>
      <ATag href="https://github.com/ArturJakiel/KIK">
        Link do pracy na stronie github
      </ATag>
      <ATag href="https://www.figma.com/file/01ejK9gIp90Yhw894RZ25tAR/Praca-Inzynierska-KiK?node-id=0%3A1">
        Zobacz mocap pracy
      </ATag>
    </article>
  );
};

export default AboutPage;
