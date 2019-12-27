import React, { useState } from "react";

/* import:: components */
import PathDirection from "../components/articleContent/pathDirection";
import Title from "../components/articleContent/title";
import Section from "../components/articleContent/Section";
import Paragraphs from "../components/articleContent/paragraphs";
import SubsectionHeader from "../components/articleContent/SubsectionHeader";
import Quote from "../components/articleContent/quote";
import ElementsHeader from "../components/articleContent/ElementsHeader";
import ImageContainer from "../components/articleContent/imageContainer";
import Embed from "../components/articleContent/embed";

/* import:: CONSTANT */
import { SHOW_ALL_SECTION } from "../Constant/CONSTANT_STYLE_VALUE";

// db
import Article from "../components/test-comp/ARTICLE";

const useShowAllSections = bool => {
  const [showAll, _setShowAll] = useState(bool);

  const toggleArticle = () => {
    _setShowAll(!showAll);
  };

  return {
    showAll,
    toggleArticle
  };
};

/** TODO: article elements
 * code
 * note [caution, warning,info]
 * delimiter
 * list [ordered, unordered]
 * embed NOTE: YOU ARE HERE
 * table
 *
 * */

const ArticlePage = props => {
  const ShowAllSections = useShowAllSections(SHOW_ALL_SECTION);

  console.log(`ArticlePage`, props);
  console.log("ArticlePage Article", Article);

  // console.log(Article.articleBody[1].data.content[2].data.text);
  console.log(Article.articleBody[1].data);

  return (
    <article>
      <PathDirection
        baseRoute={props.match.url}
        section={Article.section}
        course={Article.course}
        lesson={Article.lesson}
        author={Article.author}
      />

      <Title toggle={ShowAllSections}>TEST Content</Title>
      <Section
        name={Article.articleBody[1].data.text}
        show={ShowAllSections.showAll}
      >
        <Paragraphs>
          {Article.articleBody[1].data.content[0].data.text}
        </Paragraphs>
        <SubsectionHeader>
          {Article.articleBody[1].data.content[1].data.text}
        </SubsectionHeader>
        <Paragraphs>
          {Article.articleBody[1].data.content[2].data.text}
        </Paragraphs>
        <Paragraphs>
          {Article.articleBody[1].data.content[3].data.text}
        </Paragraphs>
        <SubsectionHeader>
          {Article.articleBody[1].data.content[4].data.text}
        </SubsectionHeader>
        <Paragraphs>
          {Article.articleBody[1].data.content[5].data.text}
        </Paragraphs>
        <Quote author={Article.articleBody[1].data.content[6].data.author}>
          {Article.articleBody[1].data.content[6].data.text}
        </Quote>
        <ElementsHeader>
          {Article.articleBody[1].data.content[7].data.text}
        </ElementsHeader>
        <ImageContainer
          image={Article.articleBody[1].data.content[8].data.url}
          description={Article.articleBody[1].data.content[8].data.description}
        />
        <Embed {...Article.articleBody[1].data.content[17].data} />
      </Section>
      <div style={{ height: "1000px" }}>TEST BOX</div>
    </article>
  );
};

export default ArticlePage;
