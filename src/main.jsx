import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Doctors from './pages/Doctors.jsx'
import Login from './pages/Login.jsx'
import Contact from './pages/Contact.jsx'
import About from './pages/About.jsx'
import Appointment from './pages/Appointment.jsx'
import AppContextProvider from './context/AppContext.jsx'
import MyProfile from './pages/MyProfile.jsx'
import MyAppointment from './pages/MyAppointment.jsx'

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/doctors',
        element: <Doctors />
      },
      {
        path: '/doctors/:speciality',
        element: <Doctors />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/appointment/:docId',
        element: <Appointment />
      },
      {
        path: '/my-profile',
        element: <MyProfile />
      },
      {
        path: '/my-appointments',
        element: <MyAppointment />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <AppContextProvider>
  <RouterProvider router={router}>
      <App />
  </RouterProvider>,
  </AppContextProvider>
)
