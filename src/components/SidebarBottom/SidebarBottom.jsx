import styles from "./SidebarBottom.module.scss";
import { Link } from "react-router-dom";
import ThemeToggle from "./../ThemeToggle/ThemeToggle";

const SidebarBottom = () => {
  return (
    <div className={styles.menu}>
      <ul>
        <li>
          <ThemeToggle />
        </li>
        <li>
          <button>
            <svg>
              <use xlinkHref="#sync"></use>
            </svg>
            <span>Sync</span>
          </button>
        </li>
        <li>
          <button>
            <svg>
              <use xlinkHref="#login"></use>
            </svg>
            <span>Login</span>
          </button>
        </li>
        <li>
          <Link to={`settings`}>
            <svg>
              <use xlinkHref="#settings"></use>
            </svg>
            <span>Settings</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SidebarBottom;
