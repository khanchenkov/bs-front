import "./SearchBar.scss";

const SearchBar = () => {
  return (
    <div>
      <div className="search-bar">
        <input type="text" placeholder={"Search..."} className="search-input" />
        <svg className="search-icon">
          <use xlinkHref="#search"></use>
        </svg>
      </div>
    </div>
  );
};

export default SearchBar;
