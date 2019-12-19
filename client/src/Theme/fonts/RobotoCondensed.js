import { css } from "styled-components";

/* google font link */
// <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:300i,400,700&display=swap" rel="stylesheet">
// @import url('https://fonts.googleapis.com/css?family=Roboto+Condensed:300i,400,700&display=swap');

// import:: Main fonts
import RobotoCondensedLightItalic from "../../Fonts/RobotoCondensed/RobotoCondensed-LightItalic.woff";
import RobotoCondensedRegular from "../../Fonts/RobotoCondensed/RobotoCondensed-Regular.woff";
import RobotoCondensedBold from "../../Fonts/RobotoCondensed/RobotoCondensed-Bold.woff";

/**
 * @description Roboto Condensed - Main font for all text basic
 * @member RobotoCondensedLightItalic using for: Quotation
 * @member RobotoCondensedRegular using for: subtitle <H2>, Additional Heder <H5>, Topic Name, Caption, OVERLINE, Button Standard <button>, Button Secondary <button>,Button Small <button>
 * @member RobotoCondensedBold using for: title <H1>, section name <H3>, subsection Name <H4>, Important paragraph <H6>, NavBar button <a>
 */
export const RobotoCondensed = css`
  @font-face {
    font-family: "Roboto Condensed";
    src: url(${RobotoCondensedLightItalic}) format("woff");
    font-weight: 300;
    font-style: italic;
  }
  @font-face {
    font-family: "Roboto Condensed";
    src: url(${RobotoCondensedRegular}) format("woff");
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: "Roboto Condensed";
    src: url(${RobotoCondensedBold}) format("woff");
    font-weight: 700;
    font-style: bold;
  }
`;

export default RobotoCondensed;
