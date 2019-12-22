import React, { useState, useEffect, useRef, useContext } from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";

/* import:: Theme */
import styled from "styled-components";
import { useTheme } from "../../../Theme/ThemeContext";

/* import:: dropMenu components */
import BtnIcon from "../../buttons/btnIcon";
import DropMenuContainer from "./dropMenuContainer";

import NavLink from "../elements/navLink";
import DropDownSectionHeader from "./dropDownSectionHeader";
import DropDownToggleBtn from "./dropDownToggleBtn";
import BtnToggle from "../../buttons/btnToggle";

import LoginBtn from "./loginBtn";

/* import:: components */
import Separator from "../../separator";

/* import:: CONSTANT VALUE */
import { NavLinkElement } from "../../../Constant/NAVBAR_ELEMENTS";
import { MobileContext } from "../../../Pages/layout/mobileProvider";
/* import:: ICONS */
import { Options } from "../../icons/ICONS";

/* import:: functions */
import { printContent } from "../../../function/printContent";

const DropDown = styled.div`
  margin-left: auto;
  position: relative;
  display: inline-block;
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

const GoToInfoPage = () => {
  console.log("GoToInfoPage");
};

// TODO: LOGIN Logic
const NavMenu = props => {
  const { name, match } = props;
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
      <BtnIcon
        name={name}
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
            events={{ onClick: () => GoToInfoPage() }}
            toggle={!(themeToggle.fontState.type === "normal")}
          >
            <FormattedMessage
              id="navMenu.PageInfo"
              defaultMessage="Page info"
            />
          </BtnToggle>
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
