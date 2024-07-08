import SearchBar from "../SearchBar/SearchBar";
import styles from "./Sidebar.module.scss";
import SidebarMenu from "./../SidebarMenu/SidebarMenu";
import BookshelfList from "./../BookshelfList/BookshelfList";
import SidebarBottom from "./../SidebarBottom/SidebarBottom";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div>
        <SearchBar />
        <SidebarMenu />
        <BookshelfList />
      </div>
      <SidebarBottom />
    </div>
  );
};

export default Sidebar;
