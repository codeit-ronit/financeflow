import React from 'react';
import { FaUserEdit, FaCrown, FaKey, FaEnvelope } from 'react-icons/fa'; // Icons

const ProfilePage = () => {
  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Left Navbar will be imported here */}
      <div className="ml-64 flex-grow p-8 space-y-8">
        {/* Profile Header Section */}
        <div className="flex items-center bg-gray-800 p-6 rounded-lg shadow-lg justify-between">
          <div className="flex items-center space-x-6">
            <img 
              src="https://via.placeholder.com/120"
              alt="Profile"
              className="w-24 h-24 rounded-full border-4 border-green-500"
            />
            <div>
              <h2 className="text-2xl font-semibold">Janhvi Yadav</h2>
              <p className="text-gray-400">"Learning to master English Fluency"</p>
              <div className="flex items-center mt-2">
                <FaUserEdit className="text-green-500 mr-2" />
                <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
                  Edit Profile
                </button>
              </div>
            </div>
          </div>
          <div>
            <FaCrown className="text-green-500 w-10 h-10" />
          </div>
        </div>

        {/* Progress Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* XP Progress */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-2">XP Progress</h3>
              <div className="relative w-full h-4 bg-gray-700 rounded-full">
                <div className="absolute top-0 left-0 h-4 bg-green-500 rounded-full" style={{ width: '75%' }}></div>
              </div>
              <p className="text-gray-400 text-sm mt-2">75% to next level</p>
            </div>
            <img src="https://via.placeholder.com/50" alt="XP" className="ml-4" />
          </div>

          {/* Skill Levels */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Skill Levels</h3>
            <div className="space-y-4">
              {[
                { skill: "Reading", level: 85 },
                { skill: "Writing", level: 65 },
                { skill: "Speaking", level: 90 }
              ].map(({ skill, level }) => (
                <div key={skill}>
                  <p className="text-gray-400">{skill}</p>
                  <div className="relative w-full h-4 bg-gray-700 rounded-full">
                    <div
                      className="absolute top-0 left-0 h-4 bg-green-500 rounded-full"
                      style={{ width: `${level}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-500">{level}% proficiency</p>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements Section */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex items-center justify-between">
            <h3 className="text-xl font-semibold">Achievements</h3>
            <div className="flex space-x-4">
              <img src="https://via.placeholder.com/50" alt="Achievement 1" className="w-12 h-12" />
              <img src="https://via.placeholder.com/50" alt="Achievement 2" className="w-12 h-12" />
              <img src="https://via.placeholder.com/50" alt="Achievement 3" className="w-12 h-12" />
            </div>
          </div>

          {/* Account Information */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Account Information</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <FaEnvelope className="mr-2 text-green-500" />
                <p className="text-gray-400">janhvi.y23csai@nst.rishihood.edu.in</p>
              </div>
              <div className="flex items-center">
                <FaKey className="mr-2 text-green-500" />
                <p className="text-gray-400">Subscription: Free Plan - Renew in 30 days</p>
              </div>
              <button className="bg-green-500 text-white mt-4 px-4 py-2 rounded-lg hover:bg-green-600">
                Change Password
              </button>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <p className="text-gray-400">Completed: TOEFL Speaking Test - Score: 92%</p>
              <span className="text-green-500">5 days streak</span>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="bg-green-500 p-6 rounded-lg shadow-lg flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold">Keep Learning!</h3>
            <p className="mt-2">Join the next challenge to earn more XP and improve your skills.</p>
          </div>
          <button className="bg-white text-green-500 px-4 py-2 rounded-lg hover:bg-gray-200 font-bold">
            Continue Learning
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;


// import React from 'react';
// import LeftNavbar from './LeftNavbar';

// const ProfilePage = () => {
//   return (
//     <div className="flex h-screen">
//       <div>
//         <LeftNavbar />
//       </div>

     
//       <div className="flex-grow bg-gray-900 p-8 text-white">
//         {/* Profile content will go here */}
//         <div className="p-4">
//           {/* Example content to illustrate the structure */}
//           <h1 className="text-3xl font-bold">Profile Page</h1>
//           <p className="mt-4 text-lg">
//             This is where your profile content will be displayed.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfilePage;