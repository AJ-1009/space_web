import styles from "./search-bar.module.css";

export default function SearchBar({
  placeholder = "Search...",
  searchQuery = "",
  onSearchChange,
}) {
  return (
    <div className={styles["search-filter-wrapper"]}>
      <div className={`${styles["search-bar-wrapper"]}`}>
        <div className={styles["search-bar"]}>
          <img className="search-icon" src="/search-icon.svg" alt="" />
          <input
            className={styles["input"]}
            value={searchQuery}
            type="text"
            onChange={onSearchChange}
            placeholder={placeholder}
          />
        </div>
      </div>
    </div>
  );
}
