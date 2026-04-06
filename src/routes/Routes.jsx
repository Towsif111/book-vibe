import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../layout/MainLayout";
import Homepage from "../pages/homepage/Homepage";
import Books from "../pages/Books";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children:[
      {
        index: true,
        element: <Homepage/>
      },
      {
        path: "/books",
        element: <Books/>,
      }
    ]
  },
  
]);