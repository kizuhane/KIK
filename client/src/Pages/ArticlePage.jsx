import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

/* import:: components */
import PathDirection from "../components/articleComponents/pathDirection";
import Title from "../components/articleComponents/title";
import Section from "../components/articleComponents/Section";
import Paragraphs from "../components/articleComponents/paragraphs";
import SubsectionHeader from "../components/articleComponents/SubsectionHeader";
import Quote from "../components/articleComponents/quote";
import ElementsHeader from "../components/articleComponents/ElementsHeader";
import ImageContainer from "../components/articleComponents/imageContainer";
import Delimiter from "../components/articleComponents/delimiter";
import Note from "../components/articleComponents/note";
import List from "../components/articleComponents/list";
import LinkList from "../components/articleComponents/linkList";
import Embed from "../components/articleComponents/embed";
import CodeBlock from "../components/articleComponents/codeBlock";
import Table from "../components/articleComponents/table";
import RawHtml from "../components/articleComponents/rawHtml";

/* import:: CONSTANT */
import { SHOW_ALL_SECTION } from "../Constant/CONSTANT_STYLE_VALUE";
import { hashLinkScroll } from "../function/hashLinkScroll";

// TODO: create request for json file using props from react router and create rest api
/* import:: JSON DATA */
/* have all elements */
// import Article from "../components/test-comp/ARTICLE";

/* for showcase */
import Article from "../components/test-comp/ARTICLE_";

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

const ArticlePage = ({ history, match }) => {
  const ShowAllSections = useShowAllSections(SHOW_ALL_SECTION);

  /** @description jump do id from hash from link */
  useEffect(() => {
    hashLinkScroll(history.location.hash);
  });

  const sectionsBody = (type, data, key) => {
    switch (type) {
      case "paragraph":
        return <Paragraphs key={key}>{data.text}</Paragraphs>;
      case "subsection":
        return <SubsectionHeader key={key}>{data.text}</SubsectionHeader>;
      case "quote":
        return (
          <Quote author={data.author} key={key}>
            {data.text}
          </Quote>
        );
      case "header":
        return <ElementsHeader key={key}>{data.text}</ElementsHeader>;
      case "image":
        return (
          <ImageContainer
            image={data.url}
            description={data.description}
            key={key}
          />
        );
      case "code":
        return (
          <CodeBlock language={data.language} key={key}>
            {data.text}
          </CodeBlock>
        );
      case "note":
        return (
          <Note type={data.style} key={key}>
            {data.text}
          </Note>
        );
      case "delimiter":
        return <Delimiter key={key} />;
      case "list":
        return (
          <List type={data.style} key={key}>
            {data.items}
          </List>
        );
      case "embed":
        return <Embed {...data} key={key} />;
      case "table":
        return <Table key={key}>{data.content}</Table>;
      case "rawHtml":
        return <RawHtml key={key}>{data.text}</RawHtml>;
      case "linkList":
        return <LinkList key={key}>{data.items}</LinkList>;
      default:
        return null;
    }
  };

  const articleSections = (type, data) => {
    switch (type) {
      case "title":
        return (
          <Title key={type} toggle={ShowAllSections}>
            {data.text}
          </Title>
        );
      case "section":
        return (
          <Section
            key={data.text}
            name={data.text}
            show={ShowAllSections.showAll}
          >
            {data.content.map((content, index) =>
              sectionsBody(content.type, content.data, index)
            )}
          </Section>
        );
      default:
        return null;
    }
  };

  return (
    <article>
      <PathDirection
        baseRoute={match.url}
        section={Article.section}
        course={Article.course}
        lesson={Article.lesson}
        author={Article.author}
      />
      {Article.articleBody.map(sections =>
        articleSections(sections.type, sections.data)
      )}
    </article>
  );
};

ArticlePage.propTypes = {
  history: PropTypes.shape({
    length: PropTypes.number,
    action: PropTypes.string,
    location: PropTypes.object,
    createHref: PropTypes.func,
    push: PropTypes.func,
    replace: PropTypes.func,
    go: PropTypes.func,
    goBack: PropTypes.func,
    goForward: PropTypes.func,
    block: PropTypes.func,
    listen: PropTypes.func
  }).isRequired,
  match: PropTypes.shape({
    path: PropTypes.string,
    url: PropTypes.string,
    isExact: PropTypes.bool,
    params: PropTypes.object
  }).isRequired
};

export default ArticlePage;
