import React from "react";
import { FormattedMessage } from "react-intl";

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
    link: "/Professors",
    name: (
      <FormattedMessage
        id="navBar.GoToProfessorsPage"
        defaultMessage="Professors"
      />
    )
  }
];

export default NavLinkElement;
