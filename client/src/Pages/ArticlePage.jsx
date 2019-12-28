import React, { useState, useEffect } from "react";

/* import:: components */
import PathDirection from "../components/articleContent/pathDirection";
import Title from "../components/articleContent/title";
import Section from "../components/articleContent/Section";
import Paragraphs from "../components/articleContent/paragraphs";
import SubsectionHeader from "../components/articleContent/SubsectionHeader";
import Quote from "../components/articleContent/quote";
import ElementsHeader from "../components/articleContent/ElementsHeader";
import ImageContainer from "../components/articleContent/imageContainer";
import Delimiter from "../components/articleContent/delimiter";
import Note from "../components/articleContent/note";
import List from "../components/articleContent/list";
import LinkList from "../components/articleContent/linkList";
import Embed from "../components/articleContent/embed";
import CodeBlock from "../components/articleContent/codeBlock";
import Table from "../components/articleContent/table";
import RawHtml from "../components/articleContent/rawHtml";

/* import:: CONSTANT */
import { SHOW_ALL_SECTION } from "../Constant/CONSTANT_STYLE_VALUE";
import { hashLinkScroll } from "../function/hashLinkScroll";
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
 * embed NOTE: YOU ARE HERE
 *
 * */

const ArticlePage = props => {
  /** @description jump do id from hash from link */
  useEffect(() => {
    hashLinkScroll(props.history.location.hash);
  });

  const ShowAllSections = useShowAllSections(SHOW_ALL_SECTION);

  console.log(`ArticlePage`, props);
  console.log("ArticlePage Article", Article);

  // console.log(Article.articleBody[1].data.content[2].data.text);
  console.log("ArticlePage Article Details", Article.articleBody[1].data);

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

        <CodeBlock>
          {Article.articleBody[1].data.content[9].data.text}
        </CodeBlock>

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
        <Note type={Article.articleBody[1].data.content[10].data.style}>
          {Article.articleBody[1].data.content[10].data.text}
        </Note>
        <Note type={Article.articleBody[1].data.content[11].data.style}>
          {Article.articleBody[1].data.content[11].data.text}
        </Note>
        <Note type={Article.articleBody[1].data.content[12].data.style}>
          {Article.articleBody[1].data.content[12].data.text}
        </Note>
        <Delimiter />
        <List type={Article.articleBody[1].data.content[15].data.style}>
          {Article.articleBody[1].data.content[15].data.items}
        </List>
        <List type={Article.articleBody[1].data.content[16].data.style}>
          {Article.articleBody[1].data.content[16].data.items}
        </List>
        <Embed {...Article.articleBody[1].data.content[17].data} />
        <Table>{Article.articleBody[1].data.content[18].data.content}</Table>
        <RawHtml>{Article.articleBody[1].data.content[19].data.text}</RawHtml>
        <LinkList>
          {Article.articleBody[1].data.content[20].data.items}
        </LinkList>
      </Section>
      <div style={{ height: "1000px" }}>TEST BOX</div>
    </article>
  );
};

export default ArticlePage;
