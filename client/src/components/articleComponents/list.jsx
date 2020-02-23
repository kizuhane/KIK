/* eslint-disable react/no-danger */
/* eslint-disable react/no-array-index-key */
import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";
/* import:: colors */
import {
  textPrimary,
  paragraphInlineCodeBG,
  textInlineCode,
  paragraphMarker,
  textBold,
  textHyperlink,
  primaryDark
} from "../../Theme/theme";

const List = styled.div`
  color: ${textPrimary};

  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  code {
    font-family: "Fira Code", monospace;

    font-weight: 450;
    background: ${paragraphInlineCodeBG};
    color: ${textInlineCode};
    border-radius: 4px;
  }
  mark {
    background: ${paragraphMarker};
    color: ${textBold};
  }
  a {
    text-decoration: none;

    :link,
    :visited {
      color: ${textHyperlink};
    }
    :hover {
      text-decoration: underline;
      color: ${primaryDark};
    }
    :active {
      color: ${textHyperlink};
    }
`;

const UnorderedList = styled.ul`
  margin: 8px 0 4px 0;
  padding-inline-start: 30px;
`;

const OrderedList = styled.ol`
  margin: 8px 0 4px 0;
  padding-inline-start: 30px;
`;

const list = ({ type, children }) => {
  return (
    <List>
      {type === "ordered" ? (
        <OrderedList>
          {children.map((el, elIndex) => (
            <li
              key={elIndex}
              dangerouslySetInnerHTML={{
                __html: el
              }}
            />
          ))}
        </OrderedList>
      ) : (
        <UnorderedList>
          {children.map((el, elIndex) => (
            <li
              key={elIndex}
              dangerouslySetInnerHTML={{
                __html: el
              }}
            />
          ))}
        </UnorderedList>
      )}
    </List>
  );
};

list.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    ),
    PropTypes.string
  ]).isRequired
};

export default list;
