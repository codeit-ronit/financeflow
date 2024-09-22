import React, { useState } from 'react';
import { FaEllipsisV, FaInfoCircle, FaTrashAlt, FaPlus } from 'react-icons/fa';
import Sidebar2 from './Sidebar2';
import { Progress, Tooltip, Modal, Input } from 'antd';
import Dashboardview from './Dashboardview';

function Goals() {
  const [showForm, setShowForm] = useState(false);
  const [goals, setGoals] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    goal: '',
    deadline: '',
  });

  const [addAmount, setAddAmount] = useState(''); // State to store the added amount for progress

  // Handle form submission to add new goal
  const handleAddGoal = (e) => {
    e.preventDefault();

    const newGoal = {
      name: formData.name,
      progress: 0, // Default progress for new goals
      currentAmount: 0,
      goalAmount: parseFloat(formData.goal),
      deadline: formData.deadline,
    };

    setGoals([...goals, newGoal]);
    setShowForm(false);
    setFormData({ name: '', goal: '', deadline: '' });
  };

  // Handle goal deletion
  const handleDeleteGoal = (index) => {
    Modal.confirm({
      title: 'Are you sure you want to delete this goal?',
      content: 'This action cannot be undone.',
      okText: 'Yes, Delete',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        setGoals(goals.filter((_, i) => i !== index));
      },
    });
  };

  // Handle adding amount to increase progress
  const handleAddAmount = (index) => {
    Modal.confirm({
      title: 'Add Amount',
      content: (
        <Input
          placeholder="Enter amount"
          value={addAmount}
          onChange={(e) => setAddAmount(e.target.value)}
          type="number"
        />
      ),
      okText: 'Add',
      cancelText: 'Cancel',
      onOk() {
        const updatedGoals = [...goals];
        const goal = updatedGoals[index];
        const addedAmount = parseFloat(addAmount);

        if (addedAmount > 0) {
          goal.currentAmount += addedAmount;
          const newProgress = (goal.currentAmount / goal.goalAmount) * 100;
          goal.progress = Math.min(newProgress, 100); // Ensure progress doesn't exceed 100%
        }

        setGoals(updatedGoals);
        setAddAmount(''); // Reset input field
      },
    });
  };

  return (
    <div className='flex flex-row'>
      <div>
        <Sidebar2 />
      </div>

      <div className='flex flex-col w-[85vw] gap-[30px]'>
        <Dashboardview />

        <div className='bg-white shadow-md cursor-pointer rounded-[4px]'>
          <div className='bg-[#F8F9FC] flex items-center justify-between px-[40px] py-[15px] border-b-[1px]'>
            <h2 className='text-[#4e73df] text-[16px] leading-[19px] font-bold'>Goals Overview</h2>
            <FaEllipsisV color='gray' className='cursor-pointer' />
          </div>

          <div className='flex'>
            {/* Goals Section */}
            <div className='px-[25px] space-y-[25px] py-[15px] w-[60%] border-[1px] h-screen'>
              {goals.length === 0 ? (
                <p className='text-gray-500'>No goals added yet. Add a new goal to track your progress.</p>
              ) : (
                goals.map((goal, index) => (
                  <div key={index} className='relative'>
                    <div className='flex items-center space-x-2'>
                      <h2 className='font-bold text-lg'>{goal.name}</h2>

                      {/* Info Tooltip */}
                      <Tooltip
                        title={`Amount: $${goal.goalAmount}, Deadline: ${goal.deadline}`}
                        placement='top'
                      >
                        <FaInfoCircle className='text-gray-500 cursor-pointer hover:text-green-500' />
                      </Tooltip>

                      {/* Delete Icon */}
                      <FaTrashAlt
                        className='text-gray-500 cursor-pointer hover:text-red-500'
                        onClick={() => handleDeleteGoal(index)}
                      />
                    </div>

                    {/* Progress Bar with Plus Icon */}
                    <div className='flex items-center space-x-2'>
                      <Progress
                        percent={goal.progress}
                        strokeColor={"#22c55e"}
                        className="w-full"
                        style={{ height: '12px' }} // Reduced height of the progress bar
                      />

                      {/* Plus Icon */}
                      <Tooltip title="Add amount">
                        <FaPlus
                          className='text-gray-500 mt-[10px] cursor-pointer hover:text-green-500 transform transition-transform duration-300 hover:scale-110'
                          onClick={() => handleAddAmount(index)}
                          style={{ fontSize: '1.2rem', marginLeft: '8px' }} // Adjusting the size and margin of the plus icon
                        />
                      </Tooltip>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Add Savings Goal Section */}
            <div className='flex flex-col py-10 px-[60px] bg-gray-100 '>
              {/* Heading */}
              <h2 className='text-3xl font-bold text-center text-gray-800 mb-8'>
                Add your savings goal here
              </h2>

              {/* Button */}
              <button
                onClick={() => setShowForm(!showForm)}
                className='relative bg-gradient-to-r from-green-500 to-black text-white font-semibold py-3 px-6 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105'
              >
                Add Savings Goal
              </button>

              {/* Form (Smooth Transition) */}
              {showForm && (
                <div className='mt-8 w-full max-w-md p-6 bg-white rounded-lg shadow-xl transition-opacity duration-700 ease-in-out opacity-100'>
                  <form className='flex flex-col space-y-4' onSubmit={handleAddGoal}>
                    {/* Name Input */}
                    <div>
                      <label className='block text-gray-700 font-medium mb-2'>Name</label>
                      <input
                        type='text'
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className='w-full px-4 py-2 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500'
                        placeholder='Enter your name'
                        required
                      />
                    </div>

                    {/* Saving Goal Input */}
                    <div>
                      <label className='block text-gray-700 font-medium mb-2'>Saving Goal ($)</label>
                      <input
                        type='number'
                        value={formData.goal}
                        onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                        className='w-full px-4 py-2 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500'
                        placeholder='Enter your savings goal'
                        required
                      />
                    </div>

                    {/* Deadline Input */}
                    <div>
                      <label className='block text-gray-700 font-medium mb-2'>Deadline</label>
                      <input
                        type='date'
                        value={formData.deadline}
                        onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                        className='w-full px-4 py-2 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500'
                        required
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type='submit'
                      className='w-full bg-green-500 hover:bg-black text-white font-semibold py-3 rounded-lg transition-colors duration-300'
                    >
                      Save Goal
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Goals;