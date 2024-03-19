import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route} from "react-router-dom";
// import Login from "./components/Login";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
// import Signup from './components/Signup'
import Layout from "./pages/Layout";
import Welcome from "./pages/Welcome";
import React, {useState, createContext} from 'react';


export const CredentialsContext = createContext()

const App = () => {
  const credentialsState = useState(null)
//   const router = createBrowserRouter([
//   {
//     path:'/',
//     element: <Layout/>,
//     children: [
//       {
//         path: "",
//         element: <Login/>
//       },
//      {
//       path:"signup",
//       element: <Signup/>
//      },
//      {
//       path:"login",
//       element: <Login/>
//      }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Login />} />
      <Route path='/login' element={<Login />} />
      <Route path='/home' element={<Welcome />} />
      <Route path='/signup' element={<Signup />} />
    </Route>
  )
)


  return (
    // <div>
    //     <RouterProvider router={router}/>
    // </div>
    <>
           
            <CredentialsContext.Provider value={credentialsState}>
              <RouterProvider router={router}/>
            </CredentialsContext.Provider>
        
    </>
  )
}

export default App
