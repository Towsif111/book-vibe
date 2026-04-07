import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../layout/MainLayout";
import Homepage from "../pages/homepage/Homepage";
import Books from "../pages/Books";
import ErrorPage from "../pages/errorpage/ErrorPage";



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
    ],
    errorElement: <ErrorPage />
  },
  
]);