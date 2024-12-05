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
import VisaDetails from "../Pages/VisaDetails";
import PrivetRoute from "./PrivetRoute";

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
            element: <PrivetRoute>
                <AllVisas></AllVisas>
            </PrivetRoute>,
            loader: () => fetch('http://localhost:5000/visas')
        },
        {
            path:  "/add-visa",
            element: <PrivetRoute>
                <AddVisa></AddVisa>
            </PrivetRoute>,
        },
        {
            path:  "/my-added-visas",
            element: <PrivetRoute>
                <MyAddedVisas></MyAddedVisas>
            </PrivetRoute>,
        },
        {
            path:  "/my-visa-applications",
            element: <PrivetRoute>
                <MyVisa></MyVisa>
            </PrivetRoute>,
        },
        {
            path: "/visa-details/:id",
            element: <PrivetRoute>
                <VisaDetails></VisaDetails>
                </PrivetRoute>,
            loader: ({params}) => fetch(`http://localhost:5000/visas/${params.id}`)
        }
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