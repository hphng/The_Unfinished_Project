import React from "react";
import styles from "./NavBar.module.css";

const SearchBar = () => {
  return (
    <div style={{ display: "flex" }}>
      <input
        className={styles.searchBar}
        placeholder="Search by name/email"
        type="text"
        // value={filter}
        // onChange={(e) => setFilter(e.target.value)}
      />
      <button>Search</button>
    </div>
  );
};

export default SearchBar;
