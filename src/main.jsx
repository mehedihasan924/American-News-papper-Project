import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import router from './Router/Routers.jsx';
import { RouterProvider } from 'react-router-dom';
import AuthProvaiders from './Provider/AuthProvaiders';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvaiders>
        <RouterProvider router={router}> </RouterProvider> 
     </AuthProvaiders>      
  </React.StrictMode>,
)
