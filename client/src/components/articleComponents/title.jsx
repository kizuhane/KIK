import React, { useContext } from "react";
import PropTypes from "prop-types";

import styled from "styled-components";
/* import:: colors */
import { textHeader, primaryDefault } from "../../Theme/theme";

/* import:: components */
import ButtonIcon from "../buttons/BtnIcon";
/* import:: Nav icons */
import { PRINT, toggleArticleIcons } from "../icons/ICONS";

/* import:: CONSTANT */
import { MOBILE_WIDTH_VALUE } from "../../Constant/CONSTANT_STYLE_VALUE";
import { MobileContext } from "../../Pages/layout/mobileProvider";
import { printContent } from "../../function/printContent";

const H1Title = styled.h1`
  display: flex;
  align-items: flex-end;

  margin: 14px 0 32px 0;
  padding: 0 20px 0 20px;

  color: ${textHeader};
  border-bottom: 2px solid ${primaryDefault};

  font-style: normal;
  font-weight: bold;
  font-size: 48px;

  @media (max-width: ${MOBILE_WIDTH_VALUE}px) {
    margin: 14px 0 32px 0;
    padding: 0 20px;
  }
`;

const Title = ({ children, toggle, ShowIcon }) => {
  const mobileVersion = useContext(MobileContext);

  return (
    <H1Title>
      {children}
      {ShowIcon && !mobileVersion && (
        <>
          <ButtonIcon
            name={PRINT}
            right
            size={24}
            events={{ onClick: () => printContent("ContentPage") }}
          />
          <ButtonIcon
            name={
              toggle.showAll
                ? toggleArticleIcons.ANGLE_DOUBLE_UP
                : toggleArticleIcons.ANGLE_DOUBLE_DOWN
            }
            size={24}
            events={{ onClick: toggle.toggleArticle }}
          />
        </>
      )}
    </H1Title>
  );
};

Title.propTypes = {
  children: PropTypes.string.isRequired,
  toggle: PropTypes.shape({
    showAll: PropTypes.bool,
    toggleArticle: PropTypes.func
  }),
  ShowIcon: PropTypes.bool
};
Title.defaultProps = {
  ShowIcon: true,
  toggle: {
    showAll: false,
    toggleArticle: null
  }
};

export default Title;
