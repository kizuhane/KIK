/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-array-index-key */
import React, { useEffect } from "react";
import PropTypes from "prop-types";

import { FormattedMessage } from "react-intl";

/* import:: components */
import Title from "../components/articleComponents/title";
import SubtitleHeader from "../components/articleComponents/subtitleHeader";
import ElementsHeader from "../components/articleComponents/ElementsHeader";

import SectionChildrenHeader from "../components/lessonsList/sectionChildrenHeader";
import LinkList from "../components/articleComponents/linkList";

import Loading from "../components/Loading/LoadingCircleAnimation";
import Error404Page from "./errors/404";

/* import:: fetch Data function */
import UseFetch from "../hooks/UseFetch";

/* import:: CONSTANT */
import { stringToPath } from "../function/stringToPath";
import { nameToUrl } from "../function/nameToUrl";
import { hashLinkScroll } from "../function/hashLinkScroll";

const pushToArr = (arr, section) => {
  const ObjArr = [];
  arr.forEach(el =>
    ObjArr.push({
      text: el.name,
      href: `${section}/${nameToUrl(el.name)}`
    })
  );
  return ObjArr;
};

const SectionPage = props => {
  const { location, match } = props;
  const { data, loading, fetchDataFromUrl } = UseFetch();

  useEffect(() => {
    let currentPage = true;
    if (currentPage) {
      fetchDataFromUrl(
        match
          ? `/api/section/${match.params.department}/${match.params.section}`
          : null
      );
    }
    return () => {
      currentPage = false;
    };
  }, [location.pathname]);

  /** @description jump do id from hash from link */
  useEffect(() => {
    hashLinkScroll(location.hash ? location.hash : match.params.course);
  });

  return loading ? (
    <Loading />
  ) : data.type === "error" ? (
    <Error404Page message={data.msg} />
  ) : (
    <>
      <Title ShowIcon={false}>{data.name}</Title>
      <SubtitleHeader>
        <FormattedMessage
          id="LessonsListHeader.LessonsList"
          defaultMessage="Full lessons list"
        />
      </SubtitleHeader>
      {data.elements.map((el, index) =>
        el.type === "lesson" ? (
          <div key={index}>
            <SectionChildrenHeader
              key={el.id}
              href={`${location.pathname}/${nameToUrl(el.name)}`}
            >
              {el.name}
            </SectionChildrenHeader>
          </div>
        ) : (
          <div key={index} id={stringToPath(el.name)}>
            <ElementsHeader key={el.id}>{el.name}</ElementsHeader>
            <LinkList>{pushToArr(el.lessons, location.pathname)}</LinkList>
          </div>
        )
      )}
    </>
  );
};

SectionPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
    search: PropTypes.string,
    hash: PropTypes.string,
    state: PropTypes.any,
    key: PropTypes.string
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.object.isRequired,
    path: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  }).isRequired
};

export default SectionPage;

/* {lessonListComponent()} */
