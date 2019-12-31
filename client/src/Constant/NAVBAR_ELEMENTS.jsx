import React from "react";
import { FormattedMessage } from "react-intl";

/* import:: CONFIG route names */
import { DEFAULT_PROFESSORS_ROUTE_NAME } from "../Config/routeName";

export const NavLinkElement = [
  {
    id: "navBar.BackToLandingPage",
    type: "global",
    link: "",
    name: (
      <FormattedMessage id="navBar.BackToLandingPage" defaultMessage="Start" />
    )
  },
  {
    id: "navBar.GoToProfessorsPage",
    type: "relative",
    link: `/${DEFAULT_PROFESSORS_ROUTE_NAME}`,
    name: (
      <FormattedMessage
        id="navBar.GoToProfessorsPage"
        defaultMessage="Professors"
      />
    )
  }
];

export default NavLinkElement;
