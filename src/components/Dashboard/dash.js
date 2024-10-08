import React from 'react'
import Sidebar2 from './Sidebar2';
import Dashboardview from './Dashboardview';
import { Outlet } from 'react-router-dom';
import Main from '../main';
import Main2 from './main2';




function Dash() {
  return (
    <div  className='flex h-screen'>
      <div className='w-[15%] h-[100vh] bg-black z-50'>
        <Sidebar2/>
      </div>
      <div className='w-[85%] border h-[100vh] overflow-scroll'>
        <Dashboardview/>
        <Main2/>
      </div>
      <div>
        <Outlet>
  
        </Outlet>
      </div>
    </div>
  
  )
}


export default Dash ;