import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

/* import:: Theme */
import styled from "styled-components";
// colors
import {
  textPrimary,
  secondaryBackground,
  primaryHover,
  primaryDefault,
  shadows
} from "../../../Theme/theme";
/* import:: Icon */
import Icon from "../../icons/Icon";
/* import:: Nav icons */
import { NavBar as navBarIcons } from "../../icons/ICONS";

/* import:: components */
import Separator from "../../separator";
import DropDownChildren from "./dropDownChildren";
import navBarIcon from "../../buttons/btnIcon";

const DropDown = styled.div`
  margin-left: auto;
  position: relative;
  display: inline-block;
  line-height: 0;
`;

const DropDownButton = styled.button`
  background: initial;
  color: white;
  padding: 0;
  line-height: 0;
  border: none;
  cursor: pointer;
  outline: 0;
  & > span {
    background: ${props => (props.show ? primaryDefault : textPrimary)};
  }
`;

const DropMenu = styled.div`
  display: block;
  position: absolute;
  background-color: ${secondaryBackground};
  padding: 10px 0;
  min-width: 160px;
  box-shadow: 0px 3px 5px ${shadows};
  right: 0;
  z-index: 1;
`;

const NavMenuIcon = ({ name }) => {
  const node = useRef();
  const [display, _setDisplay] = useState(false);

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
      <DropDownButton onClick={e => _setDisplay(!display)} show={display}>
        <Icon name={name} size={24} color={[textPrimary, primaryHover]} />
      </DropDownButton>
      {display && (
        <DropMenu>
          <DropDownChildren to="#2">Name ...</DropDownChildren>
          <DropDownChildren to="#3">Admin Panel</DropDownChildren>
          <DropDownChildren to="#4">Option</DropDownChildren>
          <DropDownChildren to="#5">statistics</DropDownChildren>
          <Separator />
          <DropDownChildren to="#6">Log Out</DropDownChildren>
        </DropMenu>
      )}
    </DropDown>
  );
};

NavMenuIcon.propTypes = {
  name: PropTypes.string.isRequired
};

export default NavMenuIcon;
