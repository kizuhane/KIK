import React, { useState } from "react";
import PropTypes from "prop-types";

import { useLocation } from "react-router-dom";

/* import:: Theme */
import styled from "styled-components";
/* import:: colors */
import {
  textPrimary,
  textBold,
  textHeader,
  textHint,
  activeNavigation
} from "../../../Theme/theme";

import Icon from "../../icons/Icon";
import { SideBarArrows } from "../../icons/ICONS";

import ButtonIcon from "../../buttons/BtnIcon";

/* import:: CONFIG route names */
import { DEFAULT_ARTICLE_ROUTE_NAME as ARTICLE_ROUTE } from "../../../Config/routeName";

const SectionBoxContainer = styled.div`
  padding: 0;
  width: 100%;
`;

const SectionBoxHeaderContainer = styled.div`
  display: flex;
  align-items: center;

  color: ${textHeader};

  padding: 5px 10px;

  font-style: normal;
  font-weight: normal;
  font-size: 14px;

  background: ${props => (props.active ? activeNavigation : "")};

  padding-bottom: ${props => (props.active ? "10px" : "5px")};

  :hover {
    background: ${activeNavigation}7f;
  }
  & button {
    background: none;
  }

  & > span {
    display: block;
    padding-right: 5px;
  }
  & > a {
    display: block;
    width: 100%;

    color: inherit;
    text-decoration: none;
  }
`;
const QuantityNumber = styled.span`
  color: ${textHint};
  font-size: 12px;
`;

/** @description  children container */
const SectionBoxElements = styled.div`
  ${props => (props.show ? "" : "display:none")}
  padding: 0;

  & > a {
    padding-left: 20px;
  }
`;

const SectionBox = ({ id, icon, name, quantity, children }) => {
  const location = useLocation();

  const currentParentUrl = `/${
    location.pathname.split("/")[1]
  }/${ARTICLE_ROUTE}`;

  const defaultShowSection = () => {
    return !!(location.pathname.split("/")[3] === id);
  };

  const [showSectionBox, _setShowSectionBox] = useState(defaultShowSection());

  const toggleShowSectionBox = () => {
    _setShowSectionBox(!showSectionBox);
  };

  return (
    <SectionBoxContainer>
      <SectionBoxHeaderContainer active={defaultShowSection()}>
        <ButtonIcon
          name={
            showSectionBox
              ? SideBarArrows.CARET_DOWN
              : SideBarArrows.CARET_RIGHT
          }
          size={14}
          padding="0 5px 0 0"
          color={showSectionBox ? textBold : textPrimary}
          events={{ onClick: () => toggleShowSectionBox() }}
        />
        {icon && (
          <span>
            <Icon name={icon} size={14} color={textBold} />
          </span>
        )}
        <a href={`${currentParentUrl}/${id}`}>{name}</a>
        <QuantityNumber>{quantity}</QuantityNumber>
      </SectionBoxHeaderContainer>
      <SectionBoxElements show={showSectionBox}>{children}</SectionBoxElements>
    </SectionBoxContainer>
  );
};

SectionBox.propTypes = {
  id: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default SectionBox;
