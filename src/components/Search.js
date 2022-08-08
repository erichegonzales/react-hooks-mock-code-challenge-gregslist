import React, { useState } from "react";

function Search({ onSearch }) {
  // create state for current search value
  const [currentSearch, setCurrentSearch] = useState('')

  function handleSubmit(e) {
    e.preventDefault();
    // call function with current search value
    onSearch(currentSearch);
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        // set as value
        value={currentSearch}
        // when input changes, change the state to update value
        onChange={(e) => setCurrentSearch(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
 