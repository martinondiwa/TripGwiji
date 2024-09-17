import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import CreateTrip from './create-trip/index.jsx'
import App from './App'
import Header from './components/custom/Header'
const router = createBrowserRouter([
  {
    path: '/App',
    element: <App/>,
    errorElement: <div>Not Found</div>
  },
  {
    path:'/CreateTrip',
    element: <CreateTrip/>
  }
]);
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Header/>
  <RouterProvider router={router} />
</React.StrictMode>
)
