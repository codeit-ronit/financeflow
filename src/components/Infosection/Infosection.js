import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const InfoSection = ({ lightBg, id, imgStart, topLine, lightText, headline, darkText, description, buttonLabel, img, alt, primary, dark, dark2 }) => {
  return (
    // <div id={id} className={`${lightBg ? 'bg-gray-100' : 'bg-gray-900'} text-white py-16  font-encode-sans-expanded`}>
      // <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
        
<div id="aboutpage" className="relative font-encode-sans-expanded bg-gray-900 h-screen">
  <div className="flex flex-col items-center justify-center py-16">
    {/* Heading */}
    <h1 className="text-4xl font-bold mb-4 text-center text-white">Monitor Your Finances</h1>

    {/* Paragraph */}
    <p className="text-lg text-gray-400 text-center mb-6">
      Finance flow is the perfect tool to manage your personal finance.
    </p>

    {/* Horizontal Line */}
    <div className="w-24 border-t-2 border-green-500 mb-8"></div>
  </div>

  {/* Cards Section */}
  <div className="flex justify-center space-x-6 py-15">
    {/* Card 1 */}
    <div className="bg-white shadow-md p-6 flex flex-col items-center rounded-lg flex-1 transform transition-transform duration-300 hover:scale-105 relative hover:shadow-[0_-10px_15px_-3px_rgb(34,197,94),0_10px_15px_-3px_rgb(34,197,94)]">
      {/* Logo */}
      <img src="https://cdn.pixabay.com/photo/2016/12/18/11/04/eye-1915454_960_720.png" alt="Card Logo 1" className="h-16 mb-4" />
      {/* Heading */}
      <h2 className="text-xl font-bold mb-2 text-center">
        Track your income, expenses, investments, and more
      </h2>
      {/* Paragraph */}
      <p className="text-gray-600 text-center">
        See what's going on with all your accounts. Stay on top of your personal finances by tracking your financial progress and investments.
      </p>
    </div>

    {/* Card 2 */}
    <div className="bg-white shadow-md p-6 flex flex-col items-center rounded-lg flex-1 transform transition-transform duration-300 hover:scale-105 relative hover:shadow-[0_-10px_15px_-3px_rgb(34,197,94),0_10px_15px_-3px_rgb(34,197,94)]">
      {/* Logo */}
      <img src="https://as2.ftcdn.net/v2/jpg/02/62/25/07/1000_F_262250744_EwiwFxAUZznBavwqflP75SxRtTRRd9Pi.jpg" alt="Card Logo 2" className="h-16 mb-4" />
      {/* Heading */}
      <h2 className="text-xl font-bold mb-2 text-center">
        Manage accounts in multiple currencies
      </h2>
      {/* Paragraph */}
      <p className="text-gray-600 text-center">
        Designed for expats and people investing or working abroad, our multicurrency support makes it easier for you to keep track of your money in different currencies.
      </p>
    </div>

    {/* Card 3 */}
    <div className="bg-white shadow-md p-6 flex flex-col items-center rounded-lg flex-1 transform transition-transform duration-300 hover:scale-105 relative hover:shadow-[0_-10px_15px_-3px_rgb(34,197,94),0_10px_15px_-3px_rgb(34,197,94)]">
      {/* Logo */}
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx9HAVcWnzNg43MD9TbnIbMrwvgYRXeAIUKA&s" alt="Card Logo 3" className="h-16 mb-4" />
      {/* Heading */}
      <h2 className="text-xl font-bold mb-2 text-center">
        Import your Excel expense tracking spreadsheet
      </h2>
      {/* Paragraph */}
      <p className="text-gray-600 text-center">
        Import your expense tracker spreadsheet into controle.finance so you never lose your financial statement.
      </p>
    </div>

    {/* Card 4 */}
    <div className="bg-white shadow-md p-6 flex flex-col items-center rounded-lg flex-1 transform transition-transform duration-300 hover:scale-105 relative hover:shadow-[0_-10px_15px_-3px_rgb(34,197,94),0_10px_15px_-3px_rgb(34,197,94)]">
      {/* Logo */}
      <img src="https://static.vecteezy.com/system/resources/previews/000/545/962/original/bar-graph-vector-icon.jpg" alt="Card Logo 4" className="h-16 mb-4" />
      {/* Heading */}
      <h2 className="text-xl font-bold mb-2 text-center">
        Generate custom reports
      </h2>
      {/* Paragraph */}
      <p className="text-gray-600 text-center">
        Generate reports that help you track your expenses over the time period you prefer. Compare income vs. expenses and get a clear overview by creating bar, pie, or line reports.
      </p>
    </div>
  </div>

    
  


   {/* Image Column */}

{/*    
 <div className={`order-${imgStart ? '1' : '2'} flex justify-center`}>
 <img src={img} alt={alt} className="max-w-md" />
 </div>  */}



        

      
       
      // </div>
    // </div>
  );
};

export default InfoSection;

