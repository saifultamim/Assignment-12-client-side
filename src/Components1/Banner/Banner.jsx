import { useEffect, useState } from 'react';
import useAxiosSecure from '../../MainComponents/Axios/useAxiosSecure';

const Banner = () => {
    const use=useAxiosSecure();
    const [overview,setOverview]=useState(false);
    const handleClick=()=>{
        setOverview(!overview)
    }
   useEffect(()=>{
    use.get('/')
    .then(data=>console.log('--->',data.data))
   },[])
    return (
        <div className='bannerimg1 h-[500px] bg-cover'>
            {/* <img src={bannerimg1} alt="" className='w-full h-[700px]'/> */}
            <button onClick={handleClick}>
            <p className='text-4xl  absolute mt-60  ml-48 lg:ml-[1200px] bg-[#1d4ed8] p-4 text-[#FFF] hover:bg-[#7e22ce]'>Programs Overview</p>
            </button>   
            <div className='absolute text-xl text-center text-[#FFF] mt-80  w-[500px] ml-8 lg:ml-[1030px]'>
            {
                overview ? 'Welcome to AcademiaHub! We are excited to offer a diverse range of programs to meet your learning needs. Our programs are designed to provide valuable skills and knowledge in various fields.':''
            }
            </div>
        </div>
    );
};

export default Banner;