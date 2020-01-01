import React, { useState, createContext } from "react";
import PropTypes from "prop-types";

const useSearchBarValue = initialState => {
  const [SearchValue, _setSearchQuery] = useState(initialState);

  const handleChange = e => _setSearchQuery(e.target.value);
  const resetValue = () => _setSearchQuery("");

  return {
    SearchValue,
    onChange: handleChange,
    onClick: resetValue
  };
};

export const SearchBarContext = createContext();

const SearchBarProvider = ({ children }) => {
  const SearchBarValue = useSearchBarValue("");
  return (
    <SearchBarContext.Provider value={SearchBarValue}>
      {children}
    </SearchBarContext.Provider>
  );
};

SearchBarProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default SearchBarProvider;
