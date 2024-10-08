import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaRegCalendarAlt, FaRegChartBar, FaRegSun, FaStickyNote, FaTachometerAlt, FaWrench, FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Sidebar2() {
  const [isOpen, setIsOpen] = useState(false); // State to control sidebar visibility

  const toggleSidebar = () => {
    setIsOpen(!isOpen); // Toggle sidebar open/close
  };

  return (
    <div className="flex z-50">
      {/* Hamburger Menu for mobile */}
      <div className='absolute top-4 left-4 z-20 md:hidden'>
        <button onClick={toggleSidebar} className='text-white'>
          <FaBars size={24} />
        </button>
      </div>

      {/* Sidebar content */}
      <div className={`fixed left-0 top-0 h-full w-[230px] bg-[#070708] p-2 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} z-30 md:translate-x-0`}>
        <div className='px-[15px] py-[30px] flex items-center justify-center border-b-[1px] border-[#EDEDED]/[0.3]'>
          <h1 className='text-white text-[20px] leading-[24px] font-extrabold cursor-pointer'>Admin Panel</h1>
        </div>

        {/* Dashboard */}
        <Link to="/dash">
          <div className='flex items-center gap-[15px] py-[20px] border-b-[1px] border-[#EDEDED]/[0.3] cursor-pointer'>
            <FaTachometerAlt color='white' />
            <p className='text-white text-[14px] leading-[20px] font-bold'>Dashboard</p>
          </div>
        </Link>

        {/* Interface */}
        <div className='pt-[15px] border-b-[1px] border-[#EDEDED]/[0.3]'>
          <p className='text-[10px] font-extrabold leading-[20px] text-white/[0.4]'>INTERFACE</p>
          <Link to={'/goals'}>
            <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
              <div className='flex items-center gap-[10px]'>
                <FaRegSun color='white' />
                <p className='text-[14px] text-white leading-[20px] font-normal'>Goals</p>
              </div>
              <FaChevronRight color='white' />
            </div>
          </Link>
          <Link to={"/expenses"}>
            <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
              <div className='flex items-center gap-[10px]'>
                <FaWrench color='white' />
                <p className='text-[14px] text-white leading-[20px] font-normal'>Expenses</p>
              </div>
              <FaChevronRight color='white' />
            </div>
          </Link>
        </div>

        {/* Addons */}
        <div className='pt-[15px] border-b-[1px] border-[#EDEDED]/[0.3] pb-[15px]'>
          <p className='text-[10px] font-extrabold leading-[20px] text-white/[0.4]'>ADDONS</p>
          <Link to={"/reminders"}>
            <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
              <div className='flex items-center gap-[10px]'>
                <FaStickyNote color='white' />
                <p className='text-[14px] text-white leading-[20px] font-normal'>Reminders</p>
              </div>
              <FaChevronRight color='white' />
            </div>
          </Link>
          <Link to={"/comingsoon"}>
            <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
              <div className='flex items-center gap-[10px]'>
                <FaRegChartBar color='white' />
                <p className='text-[14px] text-white leading-[20px] font-normal'>Pending Bills</p>
              </div>
              <FaChevronRight color='white' />
            </div>
          </Link>
          <Link to={"/comingsoon"}>
            <div className='flex items-center gap-[10px] py-[15px] cursor-pointer'>
              <FaRegCalendarAlt color='white' />
              <p className='text-[14px] text-white leading-[20px] font-normal'>Tables</p>
            </div>
          </Link>
        </div>

        <div className='flex item-center justify-center pt-[15px]'>
          <Link to={"/"}>
            <div className='h-[40px] w-[40px] bg-[white] pb-[5px] pt-[10px] pl-[10px] rounded-full items-center justify-center cursor-pointer'>
              <FaChevronLeft />
            </div>
          </Link>
        </div>
      </div>

      {/* Overlay when sidebar is open */}
      {isOpen && (
        <div className='fixed inset-0 bg-black opacity-50 z-20 md:hidden' onClick={toggleSidebar}></div>
      )}
    </div>
  );
}

export default Sidebar2;