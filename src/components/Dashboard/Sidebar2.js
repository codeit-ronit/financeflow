import React from 'react';
import { FaChevronLeft, FaChevronRight, FaRegCalendarAlt, FaRegChartBar, FaRegSun, FaStickyNote, FaTachometerAlt, FaWrench } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Sidebar2() {
  return (
    <div className='bg-[#070708] h-screen px-[30px]'>
        <div className='px-[15px] py-[30px] flex items-center justify-center border-b-[1px] border-[#EDEDED]/[0.3]'  >
            <h1 className='text-white text-[20px] leading-[24px] font-extrabold cursor-pointer'>Admin Panel</h1>
       </div>

       {/* Dashboard  */}
       <Link
       to="/dash">
       <div className='flex items-center gap-[15px] py-[20px] border-b-[1px] border-[#EDEDED]/[0.3] cursor-pointer'>
        <FaTachometerAlt color='white'/>
        <p className='text-white text-[14px] leading-[20px] font-bold  '>Dashboard</p>
       </div>
       </Link>

        {/* Interface  */}
       < div className='pt-[15px] border-b-[1px]  border-[#EDEDED]/[0.3] '>
        <p className='text-[10px] font-extrabold leading-[20px] text-white/[0.4]'>INTERFACE</p>
        <Link
          to={'/goals'}>
        <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer '>
           
          
            <div className='flex items-center gap-[10px]'>
                <FaRegSun color='white'/>
                <p className='text-[14px] text-white leading-[20px] font-normal '>Goals</p>
            </div>
           
            <FaChevronRight color='white'/>
            
          
        </div>
        </Link>
        <Link to={"/comingsoon"}>
        <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer '>
            <div className='flex items-center gap-[10px]'>
                < FaWrench color='white'/>
                <p className='text-[14px] text-white leading-[20px] font-normal '>Expenses</p>
            </div>
            <FaChevronRight color='white'/>
        </div>
        </Link>
       </div>

        {/* Addons */}
       < div className='pt-[15px] border-b-[1px]  border-[#EDEDED]/[0.3] pb-[15px]  '>
        <p className='text-[10px] font-extrabold leading-[20px] text-white/[0.4]'>ADDONS</p>
        <Link to={"/comingsoon"}>
        <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer '>
            <div className='flex items-center gap-[10px]'>
                <FaStickyNote color='white'/>
                <p className='text-[14px] text-white leading-[20px] font-normal '>Reminders</p>
            </div>
            <FaChevronRight color='white'/>
        </div>
        </Link>
        <Link to={"/comingsoon"}>
        <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer '>
            <div className='flex items-center gap-[10px]'>
                <FaRegChartBar color='white'/>
                <p className='text-[14px] text-white leading-[20px] font-normal '>Charts</p>
            </div>
            <FaChevronRight color='white'/>
        </div>
        </Link>
        <Link to={"/comingsoon"}>
        <div className='flex items-center gap-[10px] py-[15px] cursor-pointer'>
                <FaRegCalendarAlt color='white'/>
                <p className='text-[14px] text-white leading-[20px] font-normal '>Tables</p>
            </div>
        </Link>
       </div>
       



        <div className='flex item-center justify-center pt-[15px]'>
            <Link
            to={"/"}>
            <div className='h-[40px] w-[40px] bg-[white] pb-[5px] pt-[10px] pl-[10px] rounded-full items-center justify-center cursor-pointer'>
            <FaChevronLeft />
            </div>
            </Link>
        </div>
       

   
 
    </div>
  ) 
}

export default Sidebar2