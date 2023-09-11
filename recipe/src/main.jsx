import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import SearchByIngredient from './Component/SearchByIngredient/SearchByIngredient.jsx';
import './index.css'
import App from './App.jsx';
import Home1 from './Component/Home/Home1.jsx';
import Recipe from './Component/Recipe/Recipe.jsx';
import { recipeLoader } from './Component/Recipe/Recipe.jsx';
import SearchByDescription from './Component/SearchByDescription/SearchByDescription.jsx';

import RecipeSteps from './Component/RecipeSteps/RecipeSteps.jsx';
import { recipeStepsLoader } from './Component/RecipeSteps/RecipeSteps.jsx';
import { ingredientsLoader } from './Component/SearchByIngredient/SearchByIngredient.jsx';
import SignUp from './Component/SignUp/SignUp.jsx';

import SignIn from './Component/SignIn/SignIn.jsx';
import Profile from './Component/Profile/profile.jsx';

import { populerRecipeLoader } from './Component/Home/Home1.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path : "/",
        element : <Home1/>,
        loader : populerRecipeLoader,
      },
      {
        path : "/search/byIngredients",
        element : <SearchByIngredient/>,
        loader : ingredientsLoader,
      },
      {
        path : "/search/byDescription",
        element : <SearchByDescription/>
      },
      {
        path : "/create",
        element : <SearchByIngredient/>
      },
      {
        path : "/recips/:id",
        element : <Recipe></Recipe>,
        loader : recipeLoader,
      },
      {
        path : "/profile",
        element : <Profile></Profile>,
      },

      {
        path : "/recips/:id/steps",
        element : <RecipeSteps/>,
        loader : recipeStepsLoader,
      },
      {
        path : "/signup",
        element : <SignUp/>,
      },
      {
        path : "/signin",
        element : <SignIn/>,
      },

    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
