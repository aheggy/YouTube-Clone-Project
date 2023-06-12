import React from "react";
import FetchApi from "../../api/fetch";
import "./SearchBar.css";

function SearchBar({ searchTerm, setSearchTerm, setVideos }) {
  const handleSearch = () => {
    FetchApi(searchTerm)
      .then((data) => {
        setVideos(data.items);
        setSearchTerm("");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="search-bar">
      <input
        className="search-input"
        placeholder="Search"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button className="search-button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;
