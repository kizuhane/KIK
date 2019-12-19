import React, { useState } from "react";
import PropTypes from "prop-types";

/* import:: localization provider */
import { FormattedMessage } from "react-intl";

/* import:: Theme */
import styled from "styled-components";
/* import:: colors */
import {
  primaryDefault,
  textPrimary,
  textHint,
  absoluteContrast
} from "../../../Theme/theme";

/* import:: CONSTANT VALUE */
import { MOBILE_WIDTH_VALUE } from "../../../Constant/CONSTANT_STYLE_VALUE";

/* import:: icon */
import { SEARCH, TIMES } from "../../icons/ICONS";

/* import:: components */
import BtnIcon from "../../buttons/btnIcon";

const SearchBar = styled.form`
  background: ${absoluteContrast};
  display: flex;
  align-items: center;
  margin: 8px;
  width: 300px;

  @media (max-width: ${MOBILE_WIDTH_VALUE}px) {
    width: 100%;
    transition: 0.2s;
  }
`;

const InputSearchBar = styled.input.attrs({
  /* attrs */
})`
  background: inherit;
  color: ${textPrimary};
  border: none;
  width: 90%;
  font-size: 18px;
  height: calc(40px - 16px);
  padding: 4px 0 4px 16px;
  outline: 0;
  ::placeholder {
    color: ${textHint};
  }

  :focus {
    caret-color: ${primaryDefault};
  }
`;

const useFormInput = initialState => {
  const [value, _setValue] = useState(initialState);

  const handleChange = e => _setValue(e.target.value);
  const resetValue = () => _setValue("");

  return {
    value,
    onChange: handleChange,
    onClick: resetValue
  };
};

// TODO: Search bar logic
const NavSearchBar = () => {
  const search = useFormInput("");

  return (
    <SearchBar value={search.value}>
      <FormattedMessage
        id="navBar.SearchPlaceholder"
        defaultMessage="Search..."
      >
        {placeholder => (
          <InputSearchBar
            placeholder={placeholder}
            value={search.value}
            onChange={search.onChange}
          />
        )}
      </FormattedMessage>
      <BtnIcon
        events={{ onClick: search.onClick }}
        disabled={!search.value.length}
        name={search.value.length ? TIMES : SEARCH}
        size={18}
        padding="5px 10px 5px 0"
      />
    </SearchBar>
  );
};

export default NavSearchBar;
