import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';


const Courses = () => {
    const [courses,setCourses]=useState('')
    useEffect(()=>{
        fetch('/courses.json')
        .then(res=>res.json())
        .then(data=>setCourses(data))
        console.log('hello')
    },[])
    return (
        <div className='grid grid-cols-2 p-4 lg:grid-cols-4 gap-8'>
            {
                courses && courses.map((course,idx)=><div key={idx} className='mx-auto  bg-cyan-400 w-60 lg:w-80 h-60'> 
                     <img src={course.courseLogo} alt="" className=' w-60 h-36 flex mx-auto mt-4'/>
                     <p className='text-2xl text-center'>{course.courseName}</p>
                   <NavLink to='#'>
                   <button className='btn btn-primary w-full hover:btn-secondary text-2xl'>Enroll</button>
                   </NavLink>
                </div>)
            }
        </div>
    );
};

export default Courses;