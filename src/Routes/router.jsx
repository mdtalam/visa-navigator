import {
    createBrowserRouter
} from "react-router-dom";
import Login from "../Component/Login";
import Register from "../Component/Register";
import AuthLayOut from "../MainLayOut/AuthLayOut";
import MainLayOut from "../MainLayOut/MainLayOut";
import AddVisa from "../Pages/AddVisa";
import AllVisas from "../Pages/AllVisas";
import Home from "../Pages/Home";
import MyAddedVisas from "../Pages/MyAddedVisas";
import MyVisa from "../Pages/MyVisa";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayOut></MainLayOut>,
      children:[
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path:  "/all-visas",
            element: <AllVisas></AllVisas>,
        },
        {
            path:  "/add-visa",
            element: <AddVisa></AddVisa>,
        },
        {
            path:  "/my-added-visas",
            element: <MyAddedVisas></MyAddedVisas>,
        },
        {
            path:  "/my-visa-applications",
            element: <MyVisa></MyVisa>,
        },
      ]
    },
    {
        path: "/auth",
        element: <AuthLayOut></AuthLayOut>,
        children: [
            {
                path: "/auth/login",
                element: <Login></Login>,
            },
            {
                path: "/auth/register",
                element: <Register></Register>
            },
        ]
    }
  ]);

export default router;