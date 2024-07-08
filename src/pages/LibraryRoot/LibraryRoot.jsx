import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";

import LibraryPanel from "./../../components/LibraryPanel/LibraryPanel";
import "./LibraryRoot.scss";

const LibraryRoot = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/reading");
  }, [navigate]);

  return (
    <div className="wrapper">
      <Sidebar />
      <div>
        <LibraryPanel />
        <Outlet />
      </div>
    </div>
  );
};

export default LibraryRoot;
