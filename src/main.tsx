import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import HomePage from './pages/HomePage'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import {Header} from './components/Header'
import {Rules} from './pages/Rules'


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path:"/rules",
    element:<Rules/>
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
