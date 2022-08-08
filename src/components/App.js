import React, { useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
// initialize search state
const [search, setSearch] = useState('')

// get data from Search to App
const handleSearch = (newSearch) => {
  setSearch(newSearch)
}

  return (
    <div className="app">
      <Header onSearch={handleSearch} />
      <ListingsContainer search={search} />
    </div>
  );
}

export default App;
