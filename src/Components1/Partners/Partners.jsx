import { useEffect, useState } from "react";
//import partner from '../../../public/partners.json'

const Partners = () => {
    const [partners,setPartners]=useState()
  const [description,setDescription]=useState('')
  const [show,setShow]=useState(false)
   useEffect(()=>{
    fetch('../../../public/partners.json')
    .then(res=>res.json())
    .then(data=>setPartners(data))
   },[])
  const handleClick=(e)=>{
 setDescription(e)
 setShow(!show)
  }
    return ( <div>
        <div className='grid grid-cols-4 lg:flex gap-4 mt-8 justify-center'>
         {
            partners && partners.map((partner,id)=><div key={id} className='bg-[#0ea5e9] items-center flex hover:bg-[#7e22ce] hover:text-[#FFF]'>
                <button onClick={()=>{handleClick([{logo:partner.logo},{descriptions:partner.description}])}}>
                <img src={partner.logo} alt="" className='w-20 h-16'/>
                <p>{partner.name}</p>
                </button>    
            </div>)
         }
          </div>
         <div className='flex items-center  text-xl text-[#FFF] mt-4 gap-4'>
             {
                show ? 
                    description &&  description.map((des,idx)=><div key={idx} className=''>
                         <img src={des.logo} alt="" className='w-20'/>
                         <p>{des.descriptions}</p>
                     </div>)
                   : ''
             }  
         </div>
       

        </div>
    );
};

export default Partners;