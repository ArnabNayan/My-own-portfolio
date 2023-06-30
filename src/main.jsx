import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import './main.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import Main from './Components/Main/Main';

import About from './Containers/About/Index';
import Skills from './Containers/Skills/Index';
import Portfolio from './Containers/Portfolio/Index';
import Contact from './Containers/Contact/Index';
import Home from './Containers/Home/Index';


const router = createBrowserRouter([
  
  {
  
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'about',
        element:<About></About>
      },
      {
        path:'skills',
        element:<Skills></Skills>
      },
      {
        path:'portfolio',
        element:<Portfolio></Portfolio>
      },
      {
        path:'contact',
        element:<Contact></Contact>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
     <div className='main-page'>
     <RouterProvider router={router} />
     </div>

      
      
  </React.StrictMode>,
)
