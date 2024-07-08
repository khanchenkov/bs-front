import styles from "./LibraryPanel.module.scss";

const LibraryPanel = () => {
  return (
    <header className={styles.libraryPanel}>
      <button>
        <svg className="icon">
          <use xlinkHref="#plus"></use>
        </svg>
        <span>Add book</span>
      </button>

      <span>All books</span>

      <button>
        <svg className="icon">
          <use xlinkHref="#grid"></use>
        </svg>
        <span>Recently added</span>
      </button>
    </header>
  );
};

export default LibraryPanel;
