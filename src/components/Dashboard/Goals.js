import React, { useState } from 'react';
import { FaEllipsisV, FaInfoCircle, FaTrashAlt, FaPlus } from 'react-icons/fa';
import Sidebar2 from './Sidebar2';
import { Progress, Tooltip, Modal, Input } from 'antd';

function Goals() {
  const [showForm, setShowForm] = useState(false);
  const [goals, setGoals] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    goal: '',
    deadline: '',
  });

  const [addAmount, setAddAmount] = useState(0);

  const handleAddGoal = (e) => {
    e.preventDefault();

    const newGoal = {
      name: formData.name,
      progress: 0,
      currentAmount: 0,
      goalAmount: parseFloat(formData.goal),
      deadline: formData.deadline,
    };

    setGoals([...goals, newGoal]);
    setShowForm(false);
    setFormData({ name: '', goal: '', deadline: '' });
  };

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
          goal.progress = Math.min(newProgress, 100);
        }

        setGoals(updatedGoals);
        setAddAmount(0);
      },
    });
  };

  return (
    <div className="flex flex-row w-full">
      <div>
        <Sidebar2 />
      </div>

      <div className="flex flex-col w-full gap-[30px]">
        <div className="bg-black shadow-md cursor-pointer rounded-[4px] text-white">
          <div className="bg-[#222] flex items-center justify-between px-[40px] py-[15px] border-b-[1px] border-gray-700">
            <h2 className="text-[#22c55e] text-[16px] leading-[19px] font-bold">Goals Overview</h2>
            {/* <FaEllipsisV className="text-gray-400 cursor-pointer" /> */}
          </div>

          <div className="flex flex-col-reverse lg:flex-row justify-end">
            <div className="px-[25px] space-y-[25px] py-[15px] w-[49%] border-[1px] border-gray-700 h-screen pl-10 lg:pl-0">
              {goals.length === 0 ? (
                <p className="text-gray-500">No goals added yet. Add a new goal to track your progress.</p>
              ) : (
                goals.map((goal, index) => (
                  <div key={index} className="relative">
                    <div className="flex items-center space-x-2">
                      <h2 className="font-bold text-lg">{goal.name}</h2>

                      <Tooltip
                        title={`Amount: $${goal.goalAmount}, Deadline: ${goal.deadline}`}
                        placement="top"
                      >
                        <FaInfoCircle className="text-gray-400 cursor-pointer hover:text-green-500" />
                      </Tooltip>

                      <FaTrashAlt
                        className="text-gray-400 cursor-pointer hover:text-red-500"
                        onClick={() => handleDeleteGoal(index)}
                      />
                    </div>

                    <div className="flex items-center space-x-2 ">
                      <Progress
                        percent={goal.progress}
                        strokeColor={"#22c55e"}
                        className="w-full"
                        style={{ height: '12px' }}
                        backgroundColor="#FFFFFF"
                      />

                      <Tooltip title="Add amount">
                        <FaPlus
                          className="text-gray-400 mt-[10px] cursor-pointer hover:text-green-500 transform transition-transform duration-300 hover:scale-110"
                          onClick={() => handleAddAmount(index)}
                          style={{ fontSize: '1.2rem', marginLeft: '8px' }}
                        />
                      </Tooltip>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="flex flex-col py-10 px-[60px] bg-[#111] text-white">
              <h2 className="text-3xl font-bold text-center text-green-500 mb-8">
                Add your savings goal here
              </h2>

              <button
                onClick={() => setShowForm(!showForm)}
                className="relative bg-gradient-to-r from-green-500 to-black text-white font-semibold py-3 px-6 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105"
              >
                Add Savings Goal
              </button>

              {showForm && (
                <div className="mt-8 w-full max-w-md p-6 bg-[#222] rounded-lg shadow-xl transition-opacity duration-700 ease-in-out opacity-100">
                  <form className="flex flex-col space-y-4" onSubmit={handleAddGoal}>
                    <div>
                      <label className="block text-gray-400 font-medium mb-2">Name</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-700 rounded-lg text-gray-100 bg-black focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="Enter your name"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-gray-400 font-medium mb-2">Saving Goal ($)</label>
                      <input
                        type="number"
                        value={formData.goal}
                        onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-700 rounded-lg text-gray-100 bg-black focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="Enter your savings goal"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-gray-400 font-medium mb-2">Deadline</label>
                      <input
                        type="date"
                        value={formData.deadline}
                        onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-700 rounded-lg text-gray-100 bg-black focus:outline-none focus:ring-2 focus:ring-green-500"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-green-500 hover:bg-black text-white font-semibold py-3 rounded-lg transition-colors duration-300"
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



// the progress bar when we make a goal is not visible due to the color , please make it visible , when i click add and the modal opens 