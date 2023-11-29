import { Outlet } from "react-router-dom";
import Navbar from "../../Components1/Navbar/Navbar";


const MainHome = () => {
    return (
        <div>
           <Navbar></Navbar>
           <Outlet></Outlet>
        </div>
    );
};

export default MainHome;