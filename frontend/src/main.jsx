import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Signup from './router/Signup.jsx';
import Signin from './router/Signin.jsx';
import ChatUI from './router/ChatUI.jsx';
const router=createBrowserRouter([{
  path: '/',
  element: <App />,
}
,
{
  path: '/signup',
  element:<Signup/>
},
{

  path:'signin',
  element:<Signin/>
},
{
  path:'/Chat',
  element:<ChatUI/>
}])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
