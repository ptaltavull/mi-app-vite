import { createBrowserRouter } from 'react-router-dom'
import RootLayout from './routes/RootLayout'
import Home from './routes/Home'
import About from './routes/About'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
    ],
  },
])
