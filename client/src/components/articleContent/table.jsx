/* eslint-disable react/no-array-index-key */
import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";
/* import:: colors */
import {
  textPrimary,
  textHint,
  secondaryBackground,
  textBold
} from "../../Theme/theme";

/* import:: CONSTANT */
import { MOBILE_WIDTH_VALUE } from "../../Constant/CONSTANT_STYLE_VALUE";

const Table = styled.table`
  color: ${textPrimary};
  margin: 0 0 8px 0;

  border-collapse: collapse;

  font-style: normal;
  font-weight: normal;
  font-size: 14px;

  & tr {
    text-align: left;

    :nth-child(even) {
      background: ${secondaryBackground}7F;
    }

    :hover {
      background: ${secondaryBackground};
      color: ${textBold};
    }
  }

  & td {
    padding: 5px 10px;
    text-align: left;
    border: 1px solid ${textHint};
  }

  @media (max-width: ${MOBILE_WIDTH_VALUE}px) {
    width: 100%;
  }
`;

const table = ({ children }) => {
  return (
    <Table>
      <tbody>
        {children.map((trElem, trIndex) => (
          <tr key={trIndex}>
            {trElem.map((tdElem, tdIndex) => (
              <td
                key={tdIndex}
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{
                  __html: tdElem
                }}
              />
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

table.propTypes = {
  children: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array])
  ).isRequired
};

export default table;
