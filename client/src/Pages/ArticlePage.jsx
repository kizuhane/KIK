/* eslint-disable no-nested-ternary */
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

// loading animation
import Loading from "../components/Loading/LoadingCircleAnimation";
// error pages
import Error404Page from "./errors/404";

/* import:: fetch Data function */
import useFetch from "../hooks/FetchData";

/* import:: CONSTANT */
import { SHOW_ALL_SECTION } from "../Constant/CONSTANT_STYLE_VALUE";
import { hashLinkScroll } from "../function/hashLinkScroll";

// TODO: create request for json file using props from react router and create rest api
/* import:: JSON DATA */
/* have all elements */
// import Article from "../components/test-comp/ARTICLE";

/* for showcase */
// import Article from "../components/test-comp/ARTICLE_";

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
// TODO: ERROR: don't refresh page when changing routing becouse of NavLink
const ArticlePage = ({ history, match }) => {
  // const [ulrState, _setUrlState] = useEffect(window.location);

  const [Article, loading] = useFetch(
    `/api/article/${match.params.department}/${match.params.section}/${match.params.lesson}`
  );

  console.log(Article);

  const ShowAllSections = useShowAllSections(SHOW_ALL_SECTION);

  /** @description jump do id from hash from link */
  useEffect(() => {
    hashLinkScroll(history.location.hash);
  });

  const sectionsBody = (type, DbData, key) => {
    switch (type) {
      case "paragraph":
        return <Paragraphs key={key}>{DbData.text}</Paragraphs>;
      case "subsection":
        return <SubsectionHeader key={key}>{DbData.text}</SubsectionHeader>;
      case "quote":
        return (
          <Quote author={DbData.author} key={key}>
            {DbData.text}
          </Quote>
        );
      case "header":
        return <ElementsHeader key={key}>{DbData.text}</ElementsHeader>;
      case "image":
        return (
          <ImageContainer
            image={DbData.url}
            description={DbData.description}
            key={key}
          />
        );
      case "code":
        return (
          <CodeBlock language={DbData.language} key={key}>
            {DbData.text}
          </CodeBlock>
        );
      case "note":
        return (
          <Note type={DbData.style} key={key}>
            {DbData.text}
          </Note>
        );
      case "delimiter":
        return <Delimiter key={key} />;
      case "list":
        return (
          <List type={DbData.style} key={key}>
            {DbData.items}
          </List>
        );
      case "embed":
        return <Embed {...DbData} key={key} />;
      case "table":
        return <Table key={key}>{DbData.content}</Table>;
      case "rawHtml":
        return <RawHtml key={key}>{DbData.text}</RawHtml>;
      case "linkList":
        return <LinkList key={key}>{DbData.items}</LinkList>;
      default:
        return null;
    }
  };

  const articleSections = (type, DbData) => {
    switch (type) {
      case "title":
        return (
          <Title key={type} toggle={ShowAllSections}>
            {DbData.text}
          </Title>
        );
      case "section":
        return (
          <Section
            key={DbData.text}
            name={DbData.text}
            show={ShowAllSections.showAll}
          >
            {DbData.content.map((content, index) =>
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
      {loading ? (
        <Loading />
      ) : Article.type === "error" ? (
        <Error404Page message={Article.msg} />
      ) : (
        <>
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
        </>
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
