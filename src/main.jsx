import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./scss/_globals.scss";
import LibraryRoot from "./pages/LibraryRoot/LibraryRoot";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LibraryRoot />,
    children: [
      {
        path: "reading",
        element: <div>Reading</div>,
      },
      {
        path: "all-books",
        element: <div>all books</div>,
      },
      {
        path: "want-to-read",
        element: <div>Want to read</div>,
      },
      {
        path: "completed",
        element: <div>Completed</div>,
      },
      {
        path: "bookshelf/:bookshelfId",
        element: <div>bookshelf</div>,
      },
    ],
  },
  {
    path: "settings",
    element: <div>settings</div>,
  },
  {
    path: "reader",
    element: <div>reader</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
