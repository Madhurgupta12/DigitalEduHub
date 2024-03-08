// Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white font-semibold text-xl">DigitalEduHub</Link>
        <div>
        <Link to="/login" className="text-blue-100 font-semibold mr-4 hover:text-white hover:bg-green-500 hover:border-transparent px-3 py-1 rounded-md">Login</Link>

        <Link to="/signup" className="text-blue-100 font-semibold mr-4 hover:text-white hover:bg-green-500 hover:border-transparent px-3 py-1 rounded-md">CreateAccount</Link>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
