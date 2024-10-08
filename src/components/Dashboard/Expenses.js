import React, { useState } from "react";
import Sidebar2 from "./Sidebar2";

const Expenses = () => {
  const [transactions, setTransactions] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [newTransaction, setNewTransaction] = useState({
    date: "",
    transaction: "",
    amount: "",
    type: "expense"
  });

  const handleOpenModal = () => {
    setNewTransaction({
      date: "",
      transaction: "",
      amount: "",
      type: "expense",
    });
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTransaction({ ...newTransaction, [name]: value });
  };

  const handleAddTransaction = () => {
    const amountWithSign = newTransaction.type === "expense" 
      ? `-${newTransaction.amount}` 
      : newTransaction.amount;

    const balance = calculateNewBalance(amountWithSign);

    const newTransactionData = {
      ...newTransaction,
      amount: amountWithSign,
      balance: balance.toFixed(2),
    };

    setTransactions([...transactions, newTransactionData]);
    setModalOpen(false);
  };

  const calculateNewBalance = (amount) => {
    const lastBalance = parseFloat(transactions[transactions.length - 1]?.balance || 0);
    const newAmount = parseFloat(amount); // This will keep it negative if expense
    return lastBalance + newAmount;
  };

  const handleDeleteTransaction = () => {
    setTransactions(transactions.slice(0, -1));
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="w-full md:w-[15%] h-screen bg-black z-50">
        <Sidebar2 />
      </div>
      <div className="w-full md:w-[85%] bg-black text-white p-6 min-h-screen overflow-scroll">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-semibold text-green-400">Transactions</h1>
            <div className="text-gray-400">Dashboard / Transactions</div>
          </div>
          <div className="flex flex-col md:flex-row space-x-0 md:space-x-8 text-right">
            <div className="mb-2 md:mb-0">
              <div className="text-gray-400">Income Sep 2024</div>
              <div className="text-green-400">$0.00</div>
            </div>
            <div className="mb-2 md:mb-0">
              <div className="text-gray-400">Expenses Sep 2024</div>
              <div className="text-green-400">$0.00</div>
            </div>
            <div>
              <div className="text-gray-400">My Balance</div>
              <div className="text-green-400">$0.00</div>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-4">
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
              <button
                onClick={handleOpenModal}
                className="bg-green-400 text-black px-4 py-2 rounded-md"
              >
                + New
              </button>
              <button
                onClick={handleDeleteTransaction}
                className="bg-gray-600 text-white px-4 py-2 rounded-md"
              >
                Delete
              </button>
            </div>
            <div className="text-white text-2xl">
              {transactions.length > 0 ? `$${transactions[transactions.length - 1].balance}` : "$0.00"}
            </div>
          </div>

          {transactions.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="min-w-full bg-black">
                <thead>
                  <tr className="text-left text-gray-400">
                    <th className="py-2 px-4">Date</th>
                    <th className="py-2 px-4">Transaction</th>
                    <th className="py-2 px-4">Amount ($)</th>
                    <th className="py-2 px-4">Balance ($)</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((entry, idx) => (
                    <tr key={idx} className="text-gray-400 border-t border-gray-700">
                      <td className="py-2 px-4">{entry.date}</td>
                      <td className="py-2 px-4">{entry.transaction}</td>
                      <td className={`py-2 px-4 ${entry.type === "expense" ? "text-red-400" : "text-green-400"}`}>
                        {entry.amount}
                      </td>
                      <td className="py-2 px-4">{entry.balance}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-gray-400">No transactions available. Add a new transaction to get started.</p>
          )}
        </div>

        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-gray-800 p-8 rounded-lg w-11/12 md:w-1/3">
              <h2 className="text-2xl font-bold text-green-400 mb-4">Add New Transaction</h2>
              <div className="mb-4">
                <label className="block text-gray-400">Date</label>
                <input
                  type="date"
                  name="date"
                  value={newTransaction.date}
                  onChange={handleInputChange}
                  className="w-full p-2 rounded-md bg-gray-700 text-white"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-400">Transaction</label>
                <input
                  type="text"
                  name="transaction"
                  value={newTransaction.transaction}
                  onChange={handleInputChange}
                  className="w-full p-2 rounded-md bg-gray-700 text-white"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-400">Amount</label>
                <input
                  type="number"
                  name="amount"
                  value={newTransaction.amount}
                  onChange={handleInputChange}
                  className="w-full p-2 rounded-md bg-gray-700 text-white"
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  onClick={handleCloseModal}
                  className="bg-gray-600 px-4 py-2 rounded-md text-white"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddTransaction}
                  className="bg-green-400 px-4 py-2 rounded-md text-black"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Expenses;