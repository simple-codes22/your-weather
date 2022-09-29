import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Route
} from 'react-router-dom';
import './index.css';
// Routing pages for the weather application
import Home from './components/HomePage/home';
import Error from './components/error';
import LocPage from './components/Location/locPage';

const router = createBrowserRouter([
  {
    index: true,
    path: '/',
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: 'location/:locationKey',
    element: <LocPage />,
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
