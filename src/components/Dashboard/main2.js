
import { FaEllipsisV, FaRegCalendarMinus } from 'react-icons/fa';

import React, { PureComponent } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import Piecomponent from './Piecomponent';


const data = [
  {
    name: 'Feb 24',
    income: 4000,
    expense: 2400,
    amt: 2400,
  },
  {
    name: 'Mar 24',
    income: 3000,
    expense: 1398,
    amt: 2210,
  },
  {
    name: 'April 24',
    income: 2000,
    expense: 9800,
    amt: 2290,
  },
  {
    name: 'May 24',
    income: 2780,
    expense: 3908,
    amt: 2000,
  },
  {
    name: 'June 24',
    income: 1890,
    expense: 4800,
    amt: 2181,
  },
  {
    name: 'July 24',
    income: 2390,
    expense: 3800,
    amt: 2500,
  },
  {
    name: 'August 24',
    income: 3490,
    expense: 4300,
    amt: 2100,
  },
];



const Main2=()=> {
  return (
    <div id='dash' className='pt-[25px] px-[25px] bg-[#F8F9FC]'>
        <div className='flex item-center justify-between'>
            <h1 className='text-[#5a5c69] text-[28px] leading-[34px] font-normal cursor-pointer '>Dashboard</h1>
            {/* <button className='rounded-[3px] bg-black text-white flex items-center justify-center px-[30px] cursor-pointer'> Generate Report</button> */}
        </div>

    <div className='grid grid-cols-4 gap-[30px] mt-[25px] pb-[15px]'>
        <div className='h-[100px] rounded-[8px] bg-white border-l-[4px] border-green-400 flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out  '>
                <div>
                    <h2  className='text-[#B589DF] text-[11px] leading-[17px] font-bold'>EARNINGS (MONTHLY)</h2>
                    <h1 className='text-[20px]  leading-[24px] font-bold text-[#5a5c69] mt-[5px]'>$40000</h1>
                </div>
                <FaRegCalendarMinus fontSize={28} />
        </div>

        <div className='h-[100px] rounded-[8px] bg-white border-l-[4px] border-green-400 flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out  '>
                <div>
                    <h2  className='text-[#B589DF] text-[11px] leading-[17px] font-bold'>EARNINGS (ANNUALLY)</h2>
                    <h1 className='text-[20px]  leading-[24px] font-bold text-[#5a5c69] mt-[5px]'>$40000</h1>
                </div>
                <FaRegCalendarMinus fontSize={28} />
        </div>

        <div className='h-[100px] rounded-[8px] bg-white border-l-[4px] border-green-400 flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out  '>
                <div>
                    <h2  className='text-[#1cc88a] text-[11px] leading-[17px] font-bold'>PENDING REQUESTS</h2>
                    <h1 className='text-[20px]  leading-[24px] font-bold text-[#5a5c69] mt-[5px]'>$240000</h1>
                </div>
                <FaRegCalendarMinus fontSize={28} />
        </div>

        <div className='h-[100px] rounded-[8px] bg-white border-l-[4px] border-green-400 flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out  '>
                <div>
                    <h2  className='text-[#B589DF] text-[11px] leading-[17px] font-bold'>TASKS</h2>
                    <h1 className='text-[20px]  leading-[24px] font-bold text-[#5a5c69] mt-[5px]'>$2000</h1>
                </div>
                <FaRegCalendarMinus fontSize={28} />
        </div>
    </div>
    <div className='flex mt-[22px] w-full gap-[30px]'>
        <div className='basis-[70%] border bg-white shadow-md cursor-pointer rounded-[4px]'>
            <div className='bg-[#F8F9FC] flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#EDEDED] mb-[20px]'>
                <h2>
                From 10/01/2023 To 09/30/2024 - Income vs. Expenses 
                 </h2>
                <FaEllipsisV color='gray' className='cursor-pointer'/>
              
            </div>
        <BarChart
          width={700}
          height={500}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="expense" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
          <Bar dataKey="income" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
        </BarChart>
        </div>


        <div className='basis-[30%] border bg-white shadow-md cursor-pointer rounded-[4px]  '>
            <div  className='bg-[#F8F9FC] flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#EDEDED]' >
                <h2> Expenses 10/01/2023 To 09/30/2024 </h2>
                <FaEllipsisV color='gray' className='cursor-pointer'/>
            </div>
            <div className='pl-[35px]'>
              <Piecomponent/>  
            </div>

        </div>
    </div>

    </div>
  )
}

export default Main2 ; 