import Banner from "../../Components1/Banner/Banner";
import Courses from "../../Components1/Courses/Courses";
import Navbar from "../../Components1/Navbar/Navbar";
import Partners from "../../Components1/Partners/Partners";


const Home = () => {
    return (
        <div>
           <Navbar></Navbar> 
           <Banner></Banner>
           <Partners></Partners>
           <Courses></Courses>
        </div>
    );
};

export default Home;