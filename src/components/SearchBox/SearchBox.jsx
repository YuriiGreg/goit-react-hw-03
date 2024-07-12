import React from 'react';
import styles from './SearchBox.module.css';

const SearchBox = ({ filter, onFilterChange }) => {
  return (
    <div className={styles.container}>
      <label htmlFor="search" className={styles.label}>Find contacts by name</label>
      <input
        type="text"
        id="search"
        value={filter}
        onChange={onFilterChange}
        className={styles.input}
      />
    </div>
  );
};

export default SearchBox;

