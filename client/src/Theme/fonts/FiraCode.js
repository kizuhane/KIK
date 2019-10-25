import { css } from 'styled-components';

// code comment
import firaCodeLight from '../../Fonts/FiraCode/FiraCode-Light.woff';
// standard for code block
import firaCodeRegular from '../../Fonts/FiraCode/FiraCode-Regular.woff';
// for inline code
import firaCodeRetina from '../../Fonts/FiraCode/FiraCode-Retina.woff';
// replacement for bold
import firaCodeMedium from '../../Fonts/FiraCode/FiraCode-Medium.woff';

/**
 * @description Fira Code font with ligatures for code syntax
 * @member FiraCodeLight code comment in code block
 * @member FiraCodeRegular standard for code block
 * @member FiraCodeMedium replacement for bold in code block
 * @member FiraCodeRetina for inline code
 */
export const FiraCode = css`
  @font-face {
    font-family: 'Fira Code';
    src: url(${firaCodeLight}) format('woff');
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: 'Fira Code';
    src: url(${firaCodeRegular}) format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Fira Code';
    src: url(${firaCodeRetina}) format('woff');
    font-weight: 450;
    font-style: normal;
  }
  @font-face {
    font-family: 'Fira Code';
    src: url(${firaCodeMedium}) format('woff');
    font-weight: 500;
    font-style: normal;
  }
`;

export default FiraCode;
