import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './routes/router.jsx'
import AuthProvider from './providers/AuthProvider.jsx'
import { Toaster } from 'react-hot-toast'


createRoot(document.getElementById('root')).render(

  <StrictMode>

    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
      <Toaster position='top-right'></Toaster>
    </AuthProvider>
    
  </StrictMode>,
)

//  https://github.com/programming-hero-web-course2/b12-a9-firesheild-Taoshif1

// https://docs.google.com/document/d/1P9CZqP7X-a61PylXmSxIoavh71f2sE1-JrJCKCZC5FQ/edit?tab=t.0 