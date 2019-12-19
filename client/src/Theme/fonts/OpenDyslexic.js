import { css } from "styled-components";

// import:: Main fonts
import openDyslexicRegular from "../../Fonts/openDyslexic/OpenDyslexic-Regular.woff";
import openDyslexicBold from "../../Fonts/openDyslexic/OpenDyslexic-Bold.woff";
import openDyslexicItalic from "../../Fonts/openDyslexic/OpenDyslexic-Italic.woff";

/**
 * @description Roboto Condensed - Main font for all text basic
 * @member openDyslexicItalic using for: Quotation
 * @member openDyslexicRegular using for: subtitle <H2>, Additional Heder <H5>, Topic Name, Caption, OVERLINE, Button Standard <button>, Button Secondary <button>,Button Small <button>
 * @member openDyslexicBold using for: title <H1>, section name <H3>, subsection Name <H4>, Important paragraph <H6>, NavBar button <a>
 */
// font-stretch: 400%;
// unicode-range: U+0000-001F, U+0021-007F;

export const OpenDyslexic = css`
  @font-face {
    font-family: "OpenDyslexic";
    src: url(${openDyslexicRegular}) format("woff");
    font-weight: 400;
    font-style: normal;
    unicode-range: U+0000-001F, U+0021-007F;
  }
  @font-face {
    font-family: "OpenDyslexic";
    src: url(${openDyslexicBold}) format("woff");
    font-weight: 700;
    font-style: normal;
    unicode-range: U+0000-001F, U+0021-007F;
  }
  @font-face {
    font-family: "OpenDyslexic";
    src: url(${openDyslexicItalic}) format("woff");
    font-weight: 400;
    font-style: italic;
    unicode-range: U+0000-001F, U+0021-007F;
  }
`;

export default OpenDyslexic;
