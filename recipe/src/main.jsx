import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import Home from './Component/Home/Home.jsx';
import SearchByIngredient from './Component/SearchByIngredient/SearchByIngredient.jsx';
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    children:[
      {
        path : "/search/byIngredients",
        element : <SearchByIngredient/>
      },
      {
        path : "/search/byDescription",
        element : <SearchByIngredient/>
      },
      {
        path : "/create",
        element : <SearchByIngredient/>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
