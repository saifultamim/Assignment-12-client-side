import { Link, NavLink } from "react-router-dom";
import logo from '../../../public/images/logo.png'

const Navbar = () => {
    const li=<div className='lg:flex lg:mr-4 text-xl font-bold'>
     <NavLink to='/' className='lg:mr-4 touch'><button className='mb-4 lg:mb-0'><li>Home</li></button></NavLink><br/>
  <NavLink to='/allclasses'  className='lg:mr-4 touch'><button className='mb-4 lg:mb-0'><li>All Classes</li></button></NavLink><br/>
   <NavLink to='/teachon'  className='lg:mr-4 touch'><button className='mb-4 lg:mb-0'><li>Teach on</li></button></NavLink><br/>
   <NavLink to='/hala'  className='lg:mr-4 touch'><button className='mb-4 lg:mb-0'><li>Sign In</li></button></NavLink>
    </div>
    return (
        <div className=''>
           <div className="navbar bg-cyan-500 fixed bg-opacity-30 w-11/12">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul className=" menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-cyan-500 rounded-box w-52">
        {li}
      </ul>
    </div>
   <Link to='/' className='m-2 bg-indigo-500'>
   <button>
   <div className='flex items-center'>
    <img src={logo} alt="" className='w-14 '/>
    <p className="text-xl">AcademiaHub</p>
    </div>
   </button>
   </Link>
  </div>
  
  <div className="navbar-end">
  <div className="hidden lg:flex">
    <ul className="px-1">
      
      {li}
    </ul>
  </div>
  <div className="dropdown dropdown-end">
  <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
    <div className="w-10 rounded-full">
      <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
    </div>
  </div>
  <ul className=" menu-sm dropdown-content mt-3  p-2  w-52 bg-cyan-500  font-bold ">
    <li>
      <p className="justify-between">UserName</p>
    </li>
    <button><li><NavLink to='/sala' className='touch'>Dashboard</NavLink></li></button><br/>
   <button> <li><NavLink to='/dashboard' className='touch'>Logout</NavLink></li></button>
  </ul>
</div>
  </div>
</div>
        </div>
    );
};

export default Navbar;