import React, { useContext } from "react";
import PropTypes from "prop-types";

/* import:: Theme */
import styled from "styled-components";
/* import:: colors */
import { secondaryBackground, textPrimary } from "../../Theme/theme";

/* import:: Nav icons */
import { NavBar as navBarIcons } from "../icons/ICONS";

/* import:: navigation bar components */
import NavLink from "./elements/navLink";
import NavMenu from "./menu/navMenu";
import NavSearchBar from "./elements/navSearchBar";
import ButtonIcon from "../buttons/BtnIcon";

/* import:: CONSTANT VALUE */
import { NavLinkElement } from "../../Constant/NAVBAR_ELEMENTS";
import { MobileContext } from "../../Pages/layout/mobileProvider";

const Nav = styled.nav`
  position: sticky;
  top: 0;

  width: 100%;
  min-height: 48px;

  display: flex;
  align-items: center;
  z-index: 100;

  background: ${secondaryBackground};
  color: ${textPrimary};
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

function NavBar({ match, displaySidebar, toggleSidebarEvent }) {
  const mobileVersion = useContext(MobileContext);
  return (
    <Nav id="NavBar">
      {mobileVersion && (
        <ButtonIcon
          name={navBarIcons.BARS}
          toggle={displaySidebar}
          events={{ onClick: toggleSidebarEvent }}
        />
      )}
      <NavSearchBar />
      {!mobileVersion && <NavLinks match={match} />}
      <NavMenu name={navBarIcons.COG} match={match} />
    </Nav>
  );
}

NavBar.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.object.isRequired,
    path: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  }).isRequired,
  toggleSidebarEvent: PropTypes.func.isRequired,
  displaySidebar: PropTypes.bool.isRequired
};

export default NavBar;
