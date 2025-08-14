import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


import './index.css'
import App from './App.jsx'

const queryClient = new QueryClient();



import '@fortawesome/fontawesome-free/css/all.min.css';
import { Hero } from './Components/hero.jsx'
import { AboutUs } from './Components/AboutUs.jsx'
import { ContactUs } from './Components/ContactUs.jsx'
import SignUp from './Components/SignUp.jsx'
import { Blogs } from './Components/Blogs.jsx'
import SignIn from './Components/SignIn.jsx'
import UserDashboard from './Components/UserDashboard.jsx'
import UserProfile from './Components/UserAdminDashboardComponent/UserProfile.jsx'
import UserProductList from './Components/UserAdminDashboardComponent/UserProductList.jsx'
import SearchProducts from './Components/SearchProducts.jsx'
import UserProductAdd from './Components/UserAdminDashboardComponent/UserProductAdd.jsx'
import UserProductsListDetail from './Components/UserAdminDashboardComponent/UserProductsListDetail.jsx'
import UserSideBar from './Components/UserAdminDashboardComponent/UserSideBar.jsx'
import Error_404 from './Components/BasicComponents/Error_404.jsx'



const router=createBrowserRouter([
  { path: "/", 
    errorElement:<Error_404></Error_404>,
    children:[
      {index:true,
        element:<Hero></Hero>
      },
      
      {
        path:"aboutUs",
        element:<AboutUs/>
      },
      {
        path:"contactUs",
        element:<ContactUs></ContactUs>
      },
       {
        path:"blogs",
        element:<Blogs></Blogs>
      },
      {
        path:"signUp",
        element:<SignUp></SignUp>
      },
       {
        path:"signIn",
        element:<SignIn></SignIn>
      },
       {
        path:"/userDashboard",
        errorElement:<Error_404></Error_404>,
        children:[
          {
            index:true,
            element:<UserDashboard></UserDashboard>
          },
          {
            path:"dashboard",
            element:<UserDashboard></UserDashboard>
          },
          {
            path:"userProfile",
            element:<UserProfile></UserProfile>
          },
          {
            path:"productsListDetail",
            element:<UserProductsListDetail></UserProductsListDetail>
          },
          {
            path:"searchProducts",
            element:<SearchProducts></SearchProducts>
          },
           {
            path:"addProducts",
            element:<UserProductAdd></UserProductAdd>
          }
        ]
      }
    ]
  },
])


createRoot(document.getElementById('root')).render(
  //query client for managing qurery
  <QueryClientProvider client={queryClient}>
  <RouterProvider router={router}>
  </RouterProvider>
  </QueryClientProvider>
)
