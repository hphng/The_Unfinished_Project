import React, { useState } from "react";
import styles from "./NavBar.module.css";
import { TfiSearch } from "react-icons/tfi";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  return (
    <div className={styles.searchBar}>
      <button className={styles.searchIcon}>
        <TfiSearch />
      </button>
      <input
        type="text"
        placeholder="Search in Gmail"
        value={searchQuery}
        onChange={handleSearchChange}
        className={styles.input}
      />
    </div>
  );
};

export default SearchBar;
