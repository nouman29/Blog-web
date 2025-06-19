import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Homepage from './routes/Homepage.jsx'
import Postlistpage from './routes/Postlistpage.jsx'
import Singlepostpage from './routes/Singlepostpage.jsx'
import Write from './routes/Write.jsx'
import Loginpage from './routes/Loginpage.jsx'
import Register from './routes/Register.jsx'
import Mainlayout from './layout/Mainlayout.jsx'
import { ClerkProvider } from '@clerk/clerk-react'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}


const router = createBrowserRouter([
  {element:<Mainlayout />,
  children:[
    {path: "/", element: <Homepage />
    },
    {path: "/post",element:<Postlistpage /> ,
    },
    {path: "/post/:id",element:<Singlepostpage /> ,
    },
    {path: "/write",element:<Write /> ,
    },
    {path: "/login",element:<Loginpage /> ,
    },
    {path: "/register",element:<Register /> ,
    }, 
  ]
}
]);




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
     <RouterProvider router={router} />
     </ClerkProvider>
  </StrictMode>,
)
