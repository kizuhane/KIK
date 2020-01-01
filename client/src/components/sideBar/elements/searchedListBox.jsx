import React, { useContext } from "react";
import PropTypes from "prop-types";

/* import:: Theme */
import styled from "styled-components";

/* import:: SearchBar value Context form Provider  */
import { SearchBarContext } from "../../navBar/elements/SearchBarProvider";

const SearchedBoxContainer = styled.div`
  padding: 0;
  width: 100%;
`;

const SearchFilterElement = children => {
  const SearchBarContextValue = useContext(SearchBarContext);

  const filteredChildren = children
    .flat()
    .flat()
    .map(el =>
      el.props.children[el.props.children.length - 1]
        .toUpperCase()
        .indexOf(SearchBarContextValue.SearchValue.toUpperCase()) > -1
        ? el
        : null
    );
  return filteredChildren;
};

const searchedListBox = ({ children }) => {
  return (
    <SearchedBoxContainer>{SearchFilterElement(children)}</SearchedBoxContainer>
  );
};

searchedListBox.propTypes = {
  children: PropTypes.node.isRequired
};

export default searchedListBox;
