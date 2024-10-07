import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import MainLayout from "./Components/MainLayout/MainLayout";
import Home from "./Components/Home/Home";
import ListedBooks from "./Components/ListedBooks/ListedBooks";
import PagesToRead from "./Components/PagesToRead/PagesToRead";
import BookDetails from "./Components/BookDetails/BookDetails";
import ReadsBook from "./Components/ReadsBook/ReadsBook";
import WishlistBooks from "./Components/WishlistBooks/WishlistBooks";

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
        element: <ListedBooks></ListedBooks>,
        children: [
          {
            index: true,
            element: <Navigate to="readsbook" />
          },
          {
            path: 'readsbook',
            element: <ReadsBook></ReadsBook>,
            loader: async () => {
              const response = await fetch('/data.json');
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              return response.json();
            }

          },
          {
            path: 'wisheslist',
            element: <WishlistBooks></WishlistBooks>,
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
      },



    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);