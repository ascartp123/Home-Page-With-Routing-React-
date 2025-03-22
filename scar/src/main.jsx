import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider,} from 'react-router-dom'
import { Layout } from './components/Layout.jsx'
import { SignUp } from './components/Signup/SignUp.jsx'
import { Login } from './components/Login/Login.jsx'
import Contactus from './components/contact/Contactus.jsx'
import Home from './components/Home/Home.jsx'
const Router = createBrowserRouter ([
  {
  path: "/",
  element:<Layout/>,
  children: [
    {path:"",
      element:<Home/>
    },
    {path:"/SignUp",
      element:<SignUp/>
    },
    {path:"/Login",
      element:<Login/>
    },
    {path:"/Contactus",
      element:<Contactus/>
    },
  ]
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
<RouterProvider router={Router}/>
  </StrictMode>
)
