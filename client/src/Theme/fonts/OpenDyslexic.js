import { css } from 'styled-components';

import openDyslexicRegular from '../../Fonts/openDyslexic/OpenDyslexic-Regular.woff';
import openDyslexicBold from '../../Fonts/openDyslexic/OpenDyslexic-Bold.woff';
import openDyslexicItalic from '../../Fonts/openDyslexic/OpenDyslexic-Italic.woff';
import openDyslexicBoldItalic from '../../Fonts/openDyslexic/OpenDyslexic-Bold-Italic.woff';

export const OpenDyslexic = css`
  @font-face {
    font-family: 'OpenDyslexic';
    src: url(${openDyslexicRegular}) format('woff');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'OpenDyslexic';
    src: url(${openDyslexicBold}) format('woff');
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: 'OpenDyslexic';
    src: url(${openDyslexicItalic}) format('woff');
    font-weight: 400;
    font-style: italic;
  }
  @font-face {
    font-family: 'OpenDyslexic';
    src: url(${openDyslexicBoldItalic}) format('woff');
    font-weight: 700;
    font-style: italic;
  }
`;

export default OpenDyslexic;
