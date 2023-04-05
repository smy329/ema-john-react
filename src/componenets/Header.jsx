import React from 'react';
import logo from '../images/Logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="bg-[#1C2B35] h-20 w-screen grid">
      <div className=" flex justify-between items-center px-24">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div>
          <Link className="text-white hover:text-amber-500 mx-4" to="/shop">
            Shop
          </Link>
          <Link className="text-white hover:text-amber-500 mx-4" to="/orders">
            Orders
          </Link>

          <Link
            className="text-white hover:text-amber-500 mx-4"
            to="/inventory"
          >
            Manager Inverntory
          </Link>
          <Link className="text-white hover:text-amber-500 mx-4" to="/login">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
