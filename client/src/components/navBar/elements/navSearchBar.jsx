import React, { useState } from "react";
import PropTypes from "prop-types";

/* import:: localization provider */
import { FormattedMessage } from "react-intl";

/* import:: Theme */
import styled from "styled-components";
/* import:: colors */
import {
  primaryDefault,
  primaryHover,
  textPrimary,
  textHint,
  absoluteContrast
} from "../../../Theme/theme";

/* import:: icon */
import { SEARCH, TIMES } from "../../icons/ICONS";
import Icon from "../../icons/Icon";

const SearchBar = styled.form`
  background: ${absoluteContrast};
  display: flex;
  align-items: center;
  width: 40%;
  margin: 8px;
  max-width: 400px;
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

const SearchBarBtn = styled.button.attrs({
  type: "button"
})`
  background: inherit;
  fill: ${textHint};
  padding: 5px 10px 5px 0;
  line-height: 0;
  outline: 0;
  border: none;
  cursor: pointer;

  :disabled {
    cursor: default;
    & path {
      fill: ${textHint};
    }
  }

  :hover path {
    fill: ${props => (props.disabled ? textHint : primaryHover)};
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
      <SearchBarBtn onClick={search.onClick} disabled={!search.value.length}>
        <Icon
          name={search.value.length ? TIMES : SEARCH}
          size={18}
          color={search.value.length ? textPrimary : textHint}
        />
      </SearchBarBtn>
    </SearchBar>
  );
};

export default NavSearchBar;
