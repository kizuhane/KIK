import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { useHistory } from "react-router-dom";

import styled from "styled-components";
/* import:: colors */
import {
  textBold,
  activeContent,
  textHeader,
  textHint,
  textHyperlink
} from "../../Theme/theme";

import ButtonIcon from "../buttons/BtnIcon";
/* import:: Nav icons */
import { LINK, SectionArrows } from "../icons/ICONS";

/* import:: CONSTANT */
import { MOBILE_WIDTH_VALUE } from "../../Constant/CONSTANT_STYLE_VALUE";
import { copyStringToClipboard } from "../../function/copyStringToClipboard";
import { hashLinkScroll } from "../../function/hashLinkScroll";
import { stringToPath } from "../../function/stringToPath";

const SectionContainer = styled.section`
  margin: 8px 0 18px 0;
  padding: 0;

  /* border  */
  background-image: linear-gradient(${textBold}, ${textBold}),
    linear-gradient(${textBold}, ${textBold}),
    linear-gradient(${textBold}, ${textBold}),
    linear-gradient(${textBold}, ${textBold});
  background-repeat: no-repeat;
  background-size: 3px 30px, 30px 3px, 3px 30px, 30px 3px;
  background-position: left top, left top, right bottom, right bottom;
`;

const SectionHeaderContainer = styled.div`
  display: flex;

  padding: 11px 20px;

  & button:nth-of-type(1) {
    :hover path {
      fill: ${textHyperlink};
    }
  }
`;

const SectionHeader = styled.h3.attrs(props => ({
  id: props.id
}))`
  position: relative;
  cursor: pointer;

  margin: 0;

  font-size: 24px;
  text-decoration: none;
  font-weight: bold;

  color: ${textBold};
  background: none;

  color: ${textHeader};

  font-style: normal;
  font-weight: bold;
  font-size: 24px;

  ::before {
    content: "";
    position: absolute;
    height: 15px;
    ${props => (props.show ? "width: Calc(100% + 16px);" : "width: 0;")}

    top: 50%;
    ${props => (props.show ? "left: -8px;" : "left: 20%;")}
    ${props => (props.show ? "opacity: 1;" : "opacity: 0;")}
    
    background-color: ${activeContent};
    z-index: -1;
    
    transform: translate(0, -50%);
    transition: 0.1s;
  }
  :hover::before {
    width: Calc(100% + 16px);
    left: -8px;
    opacity: 1;
  }

  @media (max-width: ${MOBILE_WIDTH_VALUE}px) {
    margin: 14px 0 32px 0;
  }
`;

const SectionElements = styled.div`
  ${props => (props.show ? "" : "display:none")}
  padding: 3px 20px 11px 20px;

  @media (max-width: ${MOBILE_WIDTH_VALUE}px) {
    padding: 3px 15px 11px 15px;
  }
`;

const Section = ({ name, children, show }) => {
  const history = useHistory();
  const elementID = stringToPath(name);

  const defaultShowSection = () => {
    return show ? true : !!(history.location.hash === `#${elementID}`);
  };

  const [showSection, _setShowSection] = useState(defaultShowSection());

  const toggleShowSection = e => {
    _setShowSection(!showSection);
  };

  const updateHref = e => {
    history.push({
      hash: e.currentTarget.parentElement.parentElement.getAttribute("id")
    });
    copyStringToClipboard(window.location);
  };

  useEffect(() => {
    hashLinkScroll(history.location.hash);
  });

  return (
    <SectionContainer id={elementID}>
      <SectionHeaderContainer>
        <SectionHeader show={showSection} onClick={toggleShowSection}>
          {name}
        </SectionHeader>
        <ButtonIcon
          right
          padding="0 10px"
          name={LINK}
          size={24}
          color={textHint}
          events={{
            onClick: updateHref
          }}
        />
        <ButtonIcon
          padding="0 10px"
          toggle={showSection}
          name={
            showSection ? SectionArrows.CHEVRON_UP : SectionArrows.CHEVRON_DOWN
          }
          size={24}
          color={textHeader}
          events={{
            onClick: () => toggleShowSection()
          }}
        />
      </SectionHeaderContainer>
      <SectionElements show={showSection}>{children}</SectionElements>
    </SectionContainer>
  );
};

Section.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  show: PropTypes.bool.isRequired
};

export default Section;
