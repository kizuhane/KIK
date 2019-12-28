/* eslint-disable react/no-danger */
/* eslint-disable react/no-array-index-key */
import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";
/* import:: colors */
import { textPrimary } from "../../Theme/theme";

const List = styled.div`
  color: ${textPrimary};

  font-style: normal;
  font-weight: normal;
  font-size: 14px;
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
