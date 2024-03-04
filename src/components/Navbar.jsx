import React, { useState } from 'react';


const Navbar = () => {
    return (
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-lg font-bold">Basketball Scouting</div>
          <div className="space-x-4">
            <a href="#" className="text-white hover:bg-blue-500 rounded-sm p-2">Home</a>
            <a href="#" className="text-white hover:bg-blue-500 rounded-sm p-2">About</a>
            <a href="#" className="text-white hover:bg-blue-500 rounded-sm p-2">Services</a>
            <a href="#" className="text-white hover:bg-blue-500 rounded-sm p-2">Contact</a>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
