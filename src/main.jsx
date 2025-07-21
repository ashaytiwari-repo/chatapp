import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Signup from './router/Signup.jsx';
import Signin from './router/Signin.jsx';
import ChatUI from './router/ChatUI.jsx';
import Chatarea from './components/Chatarea.jsx';
import Options from './router/options.jsx';
// import Profile from './components/Profile.jsx';

const router = createBrowserRouter([{
  path: '/',
  element: <App />,
}
  ,
{
  path: '/options',
  element: <Options />, // <Options /> should act as a layout with <Outlet />
  children: [
    {
      path: 'chat',
      element: <ChatUI /> // this should not include another <Options />
    }
  ]
},

{

  path: 'signin',
  element: <Signin />
},
// {

//   path: 'Profile',
//   element: <Profile />
// },
{

  path: '/options',
  element: <Signin />
},
{
  path: '/Chat',
  element: <ChatUI />
}])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
