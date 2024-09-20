import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import CreateTrip from './create-trip/index.jsx'
import App from './App'
import Header from './components/custom/Header'
import ErrorPage from './components/custom/ErrorPage'
import Contact from './components/custom/Contact'
import { Toaster } from './components/ui/toaster'
import { GoogleOAuthProvider } from '@react-oauth/google'
import Viewtrip from './view-trip/[tripId]'



const router = createBrowserRouter([
  {
    path: '/App',
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: '/CreateTrip',
    element: <CreateTrip />
  },
  {
    path: '/Contact',
    element: <Contact />
  },
  {
    path: '/Header',
    element: <Header />
  },
  {
    path: '/view-trip/:tripId',
    element: <Viewtrip/>
  }

]);
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_AUTH_ClIENT_ID}>
      <Header />
      <Toaster />
      <RouterProvider router={router} />
    </GoogleOAuthProvider>
  </React.StrictMode>
)
