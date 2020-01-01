import React, { useContext } from "react";

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

/* import:: SearchBar value Context form Provider  */
import { SearchBarContext } from "./SearchBarProvider";

/* import:: CONSTANT VALUE */
import { MOBILE_WIDTH_VALUE } from "../../../Constant/CONSTANT_STYLE_VALUE";

/* import:: icon */
import { SEARCH, TIMES } from "../../icons/ICONS";

/* import:: components */
import ButtonIcon from "../../buttons/BtnIcon";

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

const NavSearchBar = () => {
  const SearchBarContextValue = useContext(SearchBarContext);

  return (
    <SearchBar value={SearchBarContextValue.SearchValue}>
      <FormattedMessage
        id="navBar.SearchPlaceholder"
        defaultMessage="Search..."
      >
        {placeholder => (
          <InputSearchBar
            placeholder={placeholder}
            value={SearchBarContextValue.SearchValue}
            onChange={SearchBarContextValue.onChange}
          />
        )}
      </FormattedMessage>
      <ButtonIcon
        events={{ onClick: SearchBarContextValue.onClick }}
        disabled={!SearchBarContextValue.SearchValue.length}
        name={SearchBarContextValue.SearchValue.length ? TIMES : SEARCH}
        size={18}
        padding="5px 10px 5px 0"
      />
    </SearchBar>
  );
};

export default NavSearchBar;
