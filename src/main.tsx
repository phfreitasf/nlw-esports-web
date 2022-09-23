import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ListGameAds } from './components/ListGameAds';
import { FixedNavBar } from './components/FixedNavBar';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: 'ads/:gameTitle',
    element: <ListGameAds />,
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <div>
    <FixedNavBar />
    <RouterProvider router={router} />
  </div>
)
