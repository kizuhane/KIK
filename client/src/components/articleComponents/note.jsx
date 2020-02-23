import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";
/* import:: colors */
import {
  textBold,
  alertCaution,
  alertWarning,
  alertInfo
} from "../../Theme/theme";

/* import:: icons */
import Icon from "../icons/Icon";
import { noteIcon } from "../icons/ICONS";

/* import:: components */
import Paragraphs from "./paragraphs";

const noteType = {
  caution: { icon: noteIcon.INFO, color: alertCaution },
  warning: { icon: noteIcon.EXCLAMATION, color: alertWarning },
  info: { icon: noteIcon.QUESTION, color: alertInfo }
};

const findNoteType = type => {
  return noteType[type];
};

const note = ({ type, children }) => {
  const data = findNoteType(type);

  const Note = styled.div`
    position: relative;
    display: flex;
    margin: 8px 0 10px 0;
    padding: 0;
    border-left: 4px solid ${data.color};

    & div {
      height: 100%;
      padding-right: 8px;
    }
  `;

  return (
    <Note>
      <div>
        <Icon name={data.icon} size={24} color={textBold} />
      </div>
      <Paragraphs>{children}</Paragraphs>
    </Note>
  );
};

note.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
};

export default note;
