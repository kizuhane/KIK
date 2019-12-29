import { css } from "styled-components";

import {
  hljscolor,
  hljsBackground,
  hljsQuote,
  hljsFormula,
  hljsSubst,
  hljsLiteral,
  hljsString,
  hljsClass,
  hljsNumber,
  hljsTitle
} from "./theme";

export const highlightJS = css`
  .hljs {
    display: block;
    overflow-x: auto;
    padding: 10px;
    color: ${hljscolor};
    background: ${hljsBackground};
  }
  .hljs-comment,
  .hljs-quote {
    color: ${hljsQuote};
    font-style: italic;
  }
  .hljs-doctag,
  .hljs-keyword,
  .hljs-formula {
    color: ${hljsFormula};
  }
  .hljs-section,
  .hljs-name,
  .hljs-selector-tag,
  .hljs-deletion,
  .hljs-subst {
    color: ${hljsSubst};
  }
  .hljs-literal {
    color: ${hljsLiteral};
  }
  .hljs-string,
  .hljs-regexp,
  .hljs-addition,
  .hljs-attribute,
  .hljs-meta-string {
    color: ${hljsString};
  }
  .hljs-built_in,
  .hljs-class .hljs-title {
    color: ${hljsClass};
  }
  .hljs-attr,
  .hljs-variable,
  .hljs-template-variable,
  .hljs-type,
  .hljs-selector-class,
  .hljs-selector-attr,
  .hljs-selector-pseudo,
  .hljs-number {
    color: ${hljsNumber};
  }
  .hljs-symbol,
  .hljs-bullet,
  .hljs-link,
  .hljs-meta,
  .hljs-selector-id,
  .hljs-title {
    color: ${hljsTitle};
  }
  .hljs-emphasis {
    font-style: italic;
  }
  .hljs-strong {
    font-weight: bold;
  }
  .hljs-link {
    text-decoration: underline;
  }
`;

export default highlightJS;
