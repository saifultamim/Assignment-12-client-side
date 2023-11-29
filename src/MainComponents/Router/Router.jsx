import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import MainHome from "../../Components/MainHome/MainHome";
import Allclasses from "../../Components1/Allclasses/Allclasses";
import Teachon from "../../Components1/Teachon/Teachon";
import Hala from "../../Components1/Hala/Hala";
import Sala from "../../Components1/Sala/Sala";
import Dashboard from "../../Components1/Dashboard/Dashboard";
import Home from "../../Components/Home/Home";


const Router = createBrowserRouter([
    {
      path: "/",
      element:<MainHome></MainHome>,
      errorElement:<p>not preferable</p>,
      children:([
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'allclasses',
            element:<Allclasses></Allclasses>
        },
        {
            path:'teachon',
            element:<Teachon></Teachon>
        },
        {
            path:'hala',
            element:<Hala></Hala>
        },
        {
            path:'sala',
            element:<Sala></Sala>
        },
        {
            path:'dashboard',
            element:<Dashboard></Dashboard>
        }
      ])
    },
    {
        path:'/App',
        element:<App></App>
    }
  ]);
  export default Router;