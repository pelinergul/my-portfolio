import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import './index.css'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import { Home } from './components/Home.jsx'

const router = createBrowserRouter (
  [
    {
      path:"/",
      element: <Home/>,
      children: [
       
        {

         index: true, element: <Home/>
        },
        

      ]
    },
   
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router = {router} />
)
