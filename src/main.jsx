import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import './index.css'

const router = createHashRouter([
  {
    path : '/',
    element : <App />,
    children : [
      {
        path : ':any',
        element : <App />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
  </RouterProvider>
)
