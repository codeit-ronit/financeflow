import React, { useState, useEffect } from 'react';
import { FaEnvelope, FaRegBell, FaSearch } from 'react-icons/fa';

const Dashboardview = () => {
  const [open, setOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showMessages, setShowMessages] = useState(false);

  // Toggle profile dropdown visibility
  const showDropDown = () => {
    setOpen(!open);
  };

  // Toggle notifications dropdown
  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
    setShowMessages(false); // Close messages if open
    setOpen(false); // Close profile dropdown if open
  };

  // Toggle messages dropdown
  const toggleMessages = () => {
    setShowMessages(!showMessages);
    setShowNotifications(false); // Close notifications if open
    setOpen(false); // Close profile dropdown if open
  };

  // Close all dropdowns when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        !event.target.closest('.dropdown-container') &&
        !event.target.closest('.icon-dropdown')
      ) {
        setOpen(false);
        setShowNotifications(false);
        setShowMessages(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <div>
      <div className='flex items-center justify-between h-[70px] shadow-lg px-[25px]'>
        {/* Search Bar */}
        <div className='flex items-center rounded-[5px]'>
          <input
            type='text'
            className='bg-[#cbced8] h-[40px] outline-none pl-[13px] w-[350px] rounded-[5px] placeholder:text-[14px] leading-[20px] font-normal'
            placeholder='Search for...'
          />
          <div className='h-[40px] px-[14px] bg-black rounded-tr-[5px] rounded-br-[5px] flex items-center cursor-pointer'>
            <FaSearch color='white' />
          </div>
        </div>

        {/* Icons and Profile */}
        <div className='flex items-center gap-[15px]'>
          {/* Notifications Icon */}
          <div className='flex items-center gap-[25px] border-r-[1px] pr-[25px]'>
            <div className='relative cursor-pointer icon-dropdown' onClick={toggleNotifications}>
              <FaRegBell />
              {showNotifications && (
                <div className='bg-white border shadow-lg h-auto w-[200px] absolute top-[50px] right-[-30px] z-50 p-[15px] rounded-md'>
                  <p className='text-gray-500 text-center'>No notifications yet</p>
                </div>
              )}
            </div>

            {/* Messages Icon */}
            <div className='relative cursor-pointer icon-dropdown' onClick={toggleMessages}>
              <FaEnvelope />
              {showMessages && (
                <div className='bg-white border shadow-lg h-auto w-[200px] absolute top-[50px] right-[-30px] z-50 p-[15px] rounded-md'>
                  <p className='text-gray-500 text-center'>No messages yet</p>
                </div>
              )}
            </div>
          </div>

          {/* Profile Section */}
          <div className='dropdown-container flex items-center gap-[15px] relative cursor-pointer' onClick={showDropDown}>
            <p>Ronit Choudhary</p>
            <div className='h-[50px] w-[50px] rounded-full bg-[#4E73DF] flex items-center justify-center'>
              <img
                src='https://www.shutterstock.com/image-vector/user-account-circle-profile-line-260nw-272552858.jpg'
                alt='Profile'
                className='h-[54px] rounded-full'
              />
            </div>

            {/* Profile Dropdown */}
            {open && (
              <div className='bg-white border shadow-lg h-[120px] w-[150px] absolute top-[60px] z-50 right-0 pt-[15px] pl-[15px] rounded-md'>
                <p className='cursor-pointer hover:text-blue-500 font-semibold mb-2'>Profile</p>
                <p className='cursor-pointer hover:text-blue-500 font-semibold mb-2'>Settings</p>
                <p className='cursor-pointer hover:text-blue-500 font-semibold'>Log out</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboardview;