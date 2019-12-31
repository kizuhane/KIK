import React, { useState, useEffect, useRef, useContext } from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
/* import:: react router history */
import { useHistory } from "react-router-dom";

/* import:: Theme */
import styled from "styled-components";
import { useTheme } from "../../../Theme/ThemeContext";

/* import:: dropMenu components */
import ButtonIcon from "../../buttons/BtnIcon";
import DropMenuContainer from "./dropMenuContainer";

import NavLink from "../elements/navLink";
import DropDownSectionHeader from "./dropDownSectionHeader";
import DropDownToggleBtn from "./dropDownToggleBtn";
import BtnToggle from "../../buttons/btnToggle";

import LoginBtn from "./loginBtn";

import { textHeader } from "../../../Theme/theme";

/* import:: components */
import Separator from "../../separator";

/* import:: CONSTANT VALUE */
import { NavLinkElement } from "../../../Constant/NAVBAR_ELEMENTS";
import { MobileContext } from "../../../Pages/layout/mobileProvider";
/* import:: ICONS */
import { Options } from "../../icons/ICONS";

/* import:: functions */
import { printContent } from "../../../function/printContent";

/* import:: CONFIG route names */
import { DEFAULT_ABOUT_ROUTE_NAME } from "../../../Config/routeName";

/* import:: CONSTANT */
import { MOBILE_WIDTH_VALUE } from "../../../Constant/CONSTANT_STYLE_VALUE";

const DropDown = styled.div`
  margin-left: auto;
  position: relative;
  display: inline-block;
`;

const BtnSection = styled.div`
  @media (max-width: ${MOBILE_WIDTH_VALUE}px) {
    padding: 0 85px;
    & * {
      margin-left: 0;
    }
  }
`;

const NavLinks = ({ match }) => {
  return NavLinkElement.map(el =>
    el.type === "global" ? (
      <NavLink key={el.id} to={`${el.link}`}>
        {el.name}
      </NavLink>
    ) : (
      <NavLink key={el.id} to={`${match.url}${el.link}`}>
        {el.name}
      </NavLink>
    )
  );
};

const GoToInfoPage = (history, path) => {
  const homeDepartment = `/${path.split("/")[1]}`;
  history.push(`${homeDepartment}/${DEFAULT_ABOUT_ROUTE_NAME}`);
};

// TODO: LOGIN Logic
const NavMenu = ({ name, match }) => {
  const history = useHistory();

  const node = useRef();
  const [display, _setDisplay] = useState(false);
  const mobileVersion = useContext(MobileContext);
  const themeToggle = useTheme();

  const outsideClickHandler = e => {
    if (node.current.contains(e.target)) {
      return;
    }
    _setDisplay(false);
  };

  useEffect(() => {
    display
      ? document.addEventListener("mousedown", outsideClickHandler)
      : document.removeEventListener("mousedown", outsideClickHandler);

    return () => {
      document.removeEventListener("mousedown", outsideClickHandler);
    };
  }, [display]);

  return (
    <DropDown ref={node}>
      <ButtonIcon
        name={name}
        color={textHeader}
        toggle={display}
        events={{ onClick: e => _setDisplay(!display) }}
      />
      {display && (
        <DropMenuContainer>
          {/* <DropDownChildren to="#2">User ...</DropDownChildren> */}
          {mobileVersion && (
            <>
              <NavLinks match={match} />
              <Separator width={90} />
            </>
          )}
          <DropDownSectionHeader>
            <FormattedMessage
              id="navMenu.PageSetting"
              defaultMessage="Page Setting"
            />
          </DropDownSectionHeader>
          <DropDownToggleBtn
            icon={Options.MOON}
            events={{ onClick: () => themeToggle.toggleTheme() }}
            toggle={!!(themeToggle.themeState.mode === "dark")}
          >
            <FormattedMessage
              id="navMenu.DarkMode"
              defaultMessage="Dark Mode"
            />
          </DropDownToggleBtn>
          <DropDownToggleBtn
            icon={Options.TEXT_WIDTH}
            events={{ onClick: () => themeToggle.toggleFont() }}
            toggle={!(themeToggle.fontState.type === "normal")}
          >
            <FormattedMessage
              id="navMenu.TypeFont"
              defaultMessage="Condensed font"
            />
          </DropDownToggleBtn>
          <Separator width={90} />
          <BtnSection>
            <BtnToggle
              icon={Options.PRINT}
              events={{ onClick: () => printContent("ContentPage") }}
              toggle={!(themeToggle.fontState.type === "normal")}
            >
              <FormattedMessage
                id="navMenu.PrintPage"
                defaultMessage="Print Page"
              />
            </BtnToggle>
            <BtnToggle
              icon={Options.INFO_CIRCLE}
              events={{ onClick: () => GoToInfoPage(history, match.url) }}
              toggle={!(themeToggle.fontState.type === "normal")}
            >
              <FormattedMessage
                id="navMenu.PageInfo"
                defaultMessage="Page info"
              />
            </BtnToggle>
          </BtnSection>
          <Separator width={90} />
          <LoginBtn />
        </DropMenuContainer>
      )}
    </DropDown>
  );
};

NavMenu.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.object.isRequired,
    path: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  }).isRequired,
  name: PropTypes.string.isRequired
};

export default NavMenu;
