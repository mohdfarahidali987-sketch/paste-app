 
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Toaster } from "react-hot-toast";
 
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Pastes from './components/Pastes'
import ViewPastes from './components/ViewPastes'
const router=createBrowserRouter(
[  
  {
    path:"/",
    element:
    <div>
      <Navbar/>
      <Home/>


    </div>
  },
  {
    path:"/pastes",
    element:
    <div>
      <Navbar/>
      <Pastes/>

    </div>
  },
  {
    path:"/pastes/:id",
    element:
    <div>
      <Navbar/>
      <ViewPastes/>

    </div>

  }
]
)

function App() {
 

  return (
    <div>
       {/* <Toaster position="top-right" /> */}
    
      <RouterProvider router={router}/>
       
       

    </div>
    
  )
}

export default App
