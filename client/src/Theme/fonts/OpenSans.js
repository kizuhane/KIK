import { css } from 'styled-components';

/* google fonts link */
// <link href="https://fonts.googleapis.com/css?family=Open+Sans:300i,400,700&display=swap" rel="stylesheet">
// @import url('https://fonts.googleapis.com/css?family=Open+Sans:300i,400,700&display=swap');

// import:: Main fonts
import OpenSansLightItalic from '../../Fonts/RobotoCondensed/RobotoCondensed-LightItalic.woff';
import OpenSansRegular from '../../Fonts/RobotoCondensed/RobotoCondensed-Regular.woff';
import OpenSansBold from '../../Fonts/OpenSans/OpenSans-Bold.woff';
/**
 * @description Roboto Condensed - Main font for all text basic
 * @member RobotoCondensedLightItalic using for: Quotation
 * @member RobotoCondensedRegular using for: subtitle <H2>, Additional Heder <H5>, Topic Name, Caption, OVERLINE, Button Standard <button>, Button Secondary <button>,Button Small <button>
 * @member RobotoCondensedBold using for: title <H1>, section name <H3>, subsection Name <H4>, Important paragraph <H6>, NavBar button <a>
 */
export const OpenSans = css`
  @font-face {
    font-family: 'Open Sans', sans-serif;
    src: url(${OpenSansLightItalic}) format('woff');
    font-weight: 300;
    font-style: italic;
  }
  @font-face {
    font-family: 'Open Sans', sans-serif;
    src: url(${OpenSansRegular}) format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Open Sans', sans-serif;
    src: url(${OpenSansBold}) format('woff');
    font-weight: 700;
    font-style: bold;
  }
`;

export default OpenSans;
