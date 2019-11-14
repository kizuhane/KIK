import React from "react";
import PropTypes from "prop-types";

/* import:: localization provider */
import { FormattedMessage } from "react-intl";

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

const Nav = styled.nav`
  position: sticky;
  display: flex;
  background: ${secondaryBackground};
  color: ${textPrimary};
  top: 0;
  width: 100%;
  min-height: 48px;
  list-style-type: none;
  align-items: center;
  z-index: 100;
`;

function navBar({ match }) {
  return (
    <Nav>
      <NavSearchBar />
      <NavLink to={`${match.url}`}>
        <FormattedMessage
          id="navBar.BackToLandingPage"
          defaultMessage="Start"
        />
      </NavLink>
      <NavLink to={`${match.url}/About`}>
        <FormattedMessage
          id="navBar.GoToProfessorsPage"
          defaultMessage="Professors"
        />
      </NavLink>
      <NavMenu name={navBarIcons.COG} />
    </Nav>
  );
}

navBar.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.object.isRequired,
    path: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  }).isRequired
};

export default navBar;
