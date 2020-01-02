import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";
/* import:: colors */
import {
  textPrimary,
  secondaryBackground,
  primaryHover
} from "../../Theme/theme";

import Icon from "../icons/Icon";
/* import:: Nav icons */
import { QUOTE_RIGHT } from "../icons/ICONS";
/* import:: components */
import Paragraphs from "./paragraphs";

/* import:: CONSTANT */
import { MOBILE_WIDTH_VALUE } from "../../Constant/CONSTANT_STYLE_VALUE";

const Quote = styled.blockquote.attrs(props => ({
  cite: props.id
}))`
  position: relative;
  margin: 0 0 0 40px;
  padding: 20px 0 28px 23px;

  color: ${textPrimary};

  font-style: italic;
  font-weight: 300;
  font-size: 14px;

  & svg {
    position: absolute;
    margin: -20px 0 0 -23px;
    z-index: -1;
  }

  :hover {
    & path {
      fill: ${primaryHover};
      opacity: 0.1;
    }
  }

  & cite {
    padding: 0 80px 6px 0;
    float: right;

    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    ::before {
      content: "~";
    }
  }

  @media (max-width: ${MOBILE_WIDTH_VALUE}px) {
    margin: 0;
    & cite {
      padding: 0 20px 6px 0;
    }
  }
`;

const quote = ({ children, author }) => {
  return (
    <Quote cite={author}>
      <Icon name={QUOTE_RIGHT} size={80} color={secondaryBackground} />
      <Paragraphs>{children}</Paragraphs>
      <cite>{author}</cite>
    </Quote>
  );
};

quote.propTypes = {
  children: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
};

export default quote;
