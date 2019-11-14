import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

/* import:: Theme */
import styled from "styled-components";

/* import:: dropMenu components */
import DropMenuContainer from "./dropMenuContainer";
import DropDownChildren from "./dropDownChildren";
import BtnIcon from "../../buttons/btnIcon";

/* import:: components */
import Separator from "../../separator";

const DropDown = styled.div`
  margin-left: auto;
  position: relative;
  display: inline-block;
  line-height: 0;
  z-index: 1;
`;

const NavMenu = ({ name }) => {
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
      <BtnIcon
        name={name}
        toggle={display}
        events={{ onClick: e => _setDisplay(!display) }}
      />
      {display && (
        <DropMenuContainer>
          <DropDownChildren to="#2">User ...</DropDownChildren>
          <DropDownChildren to="#3">One</DropDownChildren>
          <DropDownChildren to="#4">Two</DropDownChildren>
          <Separator />
          <DropDownChildren to="#6">Log Out</DropDownChildren>
        </DropMenuContainer>
      )}
    </DropDown>
  );
};

NavMenu.propTypes = {
  name: PropTypes.string.isRequired
};

export default NavMenu;
