import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import MainLayout from "./Components/MainLayout/MainLayout";
import Home from "./Components/Home/Home";
import ListedBooks from "./Components/ListedBooks/ListedBooks";
import PagesToRead from "./Components/PagesToRead/PagesToRead";
import BookDetails from "./Components/BookDetails/BookDetails";

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: async () => {
          const response = await fetch('/data.json');
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        }

      },
      {
        path: '/listedbooks',
        element: <ListedBooks></ListedBooks>
      },
      {
        path: '/pagestoread',
        element: <PagesToRead></PagesToRead>
      },
      {
        path: '/:bookId',
        element: <BookDetails></BookDetails>,
        loader: async () => {
          const response = await fetch('/data.json');
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        }
      }


    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);