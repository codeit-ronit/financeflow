import React, { useState, useEffect } from "react";
import Sidebar2 from "./Sidebar2";

const Reminder = () => {
  const [showModal, setShowModal] = useState(false); // Modal state
  const [reminders, setReminders] = useState([]); // Reminders state
  const [reminderText, setReminderText] = useState(""); // Input field states
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  // Function to open modal
  const openModal = () => setShowModal(true);

  // Function to close modal
  const closeModal = () => {
    setShowModal(false);
    setReminderText("");
    setDate("");
    setTime("");
  };

  // Function to add reminder
  const addReminder = () => {
    if (reminderText && date) {
      setReminders([...reminders, { reminderText, date, time }]);
      closeModal();
    } else {
      alert("Please enter the reminder text and date.");
    }
  };

  // Function to trigger voice alert
  const triggerVoiceAlert = (reminderText) => {
    const msg = new SpeechSynthesisUtterance();
    msg.text = `Reminder: ${reminderText}`;
    window.speechSynthesis.speak(msg);
  };

  // Check if any reminders are due
  useEffect(() => {
    const checkReminders = () => {
      const now = new Date();

      reminders.forEach((reminder) => {
        const reminderDate = new Date(
          reminder.date + "T" + (reminder.time || "10:00")
        );

        if (now >= reminderDate) {
          alert(`Reminder: ${reminder.reminderText}`);
          triggerVoiceAlert(reminder.reminderText);

          // Optionally, you can remove or mark the reminder as done after triggering the alert
          setReminders((prevReminders) =>
            prevReminders.filter((r) => r !== reminder)
          );
        }
      });
    };

    const intervalId = setInterval(checkReminders, 60000); // Check every minute
    return () => clearInterval(intervalId);
  }, [reminders]);

  return (
    <div className="flex flex-row ">
      <div>
        <Sidebar2 />
      </div>

      <div className="bg-black min-h-screen p-6 w-full">
        {/* Add Reminder Button */}
        <div className="flex justify-center mb-6">
          <button
            onClick={openModal}
            className="bg-green-400 text-black px-6 py-3 rounded-md hover:bg-green-300"
          >
            + Add Reminder
          </button>
        </div>

        {/* Reminders Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 px-0 lg:px-[300px]">
          {reminders.map((reminder, idx) => (
            <div
              key={idx}
              className="bg-gray-800 p-4 rounded-lg text-white shadow-lg"
            >
              <h2 className="text-lg font-semibold text-green-400 mb-2">
                {reminder.reminderText}
              </h2>
              <p className="text-gray-400">Date: {reminder.date}</p>
              {reminder.time && (
                <p className="text-gray-400">Time: {reminder.time}</p>
              )}
            </div>
          ))}
        </div>

        {/* Modal for Adding Reminders */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-gray-900 p-6 rounded-lg w-96 text-white">
              <h2 className="text-2xl text-green-400 mb-4">
                Add a New Reminder
              </h2>

              <label className="block text-gray-400 mb-2">Reminder:</label>
              <input
                className="w-full p-2 mb-4 rounded bg-gray-700 text-white"
                value={reminderText}
                onChange={(e) => setReminderText(e.target.value)}
                placeholder="Enter your reminder"
              />

              <label className="block text-gray-400 mb-2">Date:</label>
              <input
                type="date"
                className="w-full p-2 mb-4 rounded bg-gray-700 text-white"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />

              <label className="block text-gray-400 mb-2">
                Time (optional):
              </label>
              <input
                type="time"
                className="w-full p-2 mb-4 rounded bg-gray-700 text-white"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />

              <div className="flex justify-end">
                <button
                  onClick={addReminder}
                  className="bg-green-400 text-black px-6 py-2 rounded-md hover:bg-green-300 mr-2"
                >
                  Save
                </button>
                <button
                  onClick={closeModal}
                  className="bg-gray-600 text-white px-6 py-2 rounded-md hover:bg-gray-500"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Reminder;
