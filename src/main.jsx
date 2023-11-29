import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './MainComponents/Router/Router.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 
  <div className='w-11/12 mx-auto bg-blue-400'>
  <RouterProvider router={Router} />
  </div>
 
  </React.StrictMode>,
)
