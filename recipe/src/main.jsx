import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import SearchByIngredient from './Component/SearchByIngredient/SearchByIngredient.jsx';
import './index.css'
import App from './App.jsx';
import { Home } from '@mui/icons-material';
import Home1 from './Component/Home/Home1.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path : "/",
        element : <Home1/>
      },
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