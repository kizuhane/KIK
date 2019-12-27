import React, { useEffect } from "react";
import PropTypes from "prop-types";

import { useHistory } from "react-router-dom";

import styled from "styled-components";
/* import:: colors */
import { textHeader, textHint, textHyperlink } from "../../Theme/theme";

import ButtonIcon from "../buttons/BtnIcon";
/* import:: Nav icons */
import { LINK } from "../icons/ICONS";

/* import:: CONSTANT */
import { copyStringToClipboard } from "../../function/copyStringToClipboard";
import { hashLinkScroll } from "../../function/hashLinkScroll";
import { stringToPath } from "../../function/stringToPath";

const Subsection = styled.h4.attrs(props => ({
  id: props.id
}))`
  margin: 18px 0 14px 0;
  padding: 0;

  color: ${textHeader};

  font-style: normal;
  font-weight: bold;
  font-size: 18px;

  & button {
    display: none;
  }

  :hover {
    & button {
      margin-left: -20px;
      display: inline-block;
      & :hover path {
        fill: ${textHyperlink};
      }
    }
  }
`;

const SubsectionHeader = ({ children }) => {
  const history = useHistory();

  const updateHref = e => {
    history.push({
      hash: e.currentTarget.parentElement.getAttribute("id")
    });
    copyStringToClipboard(window.location);
  };

  useEffect(() => {
    hashLinkScroll(history.location.hash);
  });

  return (
    <Subsection id={stringToPath(children)}>
      <ButtonIcon
        padding="0 6px 0 0px"
        name={LINK}
        size={14}
        color={textHint}
        events={{
          onClick: updateHref
        }}
      />
      {children}
    </Subsection>
  );
};

SubsectionHeader.propTypes = {
  children: PropTypes.string.isRequired
};

export default SubsectionHeader;
