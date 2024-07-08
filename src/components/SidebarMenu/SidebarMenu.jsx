import { Link } from "react-router-dom";
import styles from "./SidebarMenu.module.scss";

const SidebarMenu = () => {
  return (
    <div className={styles.navigation}>
      <h3>Library</h3>
      <nav>
        <ul>
          <li>
            <Link to={`/reading`}>
              <svg>
                <use xlinkHref="#reading"></use>
              </svg>
              <span>Reading</span>
            </Link>
          </li>
          <li>
            <Link to={`/all-books`}>
              <svg>
                <use xlinkHref="#all-books"></use>
              </svg>
              <span>All books</span>
            </Link>
          </li>
          <li>
            <Link to={`/want-to-read`}>
              <svg>
                <use xlinkHref="#want-to-read"></use>
              </svg>
              <span>Want to read</span>
            </Link>
          </li>
          <li>
            <Link to={`/completed`}>
              <svg>
                <use xlinkHref="#completed"></use>
              </svg>
              <span>Completed</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SidebarMenu;
