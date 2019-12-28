import React from "react";
import PropTypes from "prop-types";

/* Import:: Theme */
import styled from "styled-components";

import { textHyperlink, primaryDark } from "../Theme/theme";

const MyATag = styled.a`
  text-decoration: none;

  font-style: normal;
  font-weight: normal;
  font-size: 14px;

  :link,
  :visited {
    color: ${textHyperlink};
  }
  :hover {
    color: ${primaryDark};
  }
  :active {
    color: ${textHyperlink};
  }
`;

const aTag = ({ href, children }) => {
  return <MyATag href={href}>{children}</MyATag>;
};

aTag.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
};

export default aTag;
