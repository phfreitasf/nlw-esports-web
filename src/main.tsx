import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ListGameAds } from './components/ListGameAds';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{

    }]
  },
  {
    path: 'ads/:gameTitle',
    element: <ListGameAds />,
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={router} />
)
