import styles from "./BookshelfList.module.scss";
import { Link } from "react-router-dom";

const BookshelfList = () => {
  return (
    <div className={styles.bookshelves}>
      <h3>Bookshelves</h3>

      <ul>
        <li>
          <Link to={`/bookshelf/1`}>
            <svg>
              <use xlinkHref="#bookshelf"></use>
            </svg>
            <span>Detectives</span>
          </Link>
        </li>
        <li>
          <Link to={`/bookshelf/2`}>
            <svg>
              <use xlinkHref="#bookshelf"></use>
            </svg>
            <span>Fantasy</span>
          </Link>
        </li>
        <li>
          <Link to={`/bookshelf/3`}>
            <svg>
              <use xlinkHref="#bookshelf"></use>
            </svg>
            <span>Science</span>
          </Link>
        </li>
      </ul>
      <button className={styles.add}>
        <svg>
          <use xlinkHref="#plus"></use>
        </svg>
        <span>New bookshelf</span>
      </button>
    </div>
  );
};

export default BookshelfList;
