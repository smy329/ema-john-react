import React from 'react';
import logo from '../images/Logo.svg';

const Header = () => {
  return (
    <nav className="bg-[#1C2B35] h-20 w-screen grid">
      <div className=" flex justify-between items-center px-24">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div>
          <a className="text-white hover:text-amber-500 mx-4" href="/order">
            Order
          </a>
          <a className="text-white hover:text-amber-500 mx-4" href="/review">
            Order Review
          </a>
          <a className="text-white hover:text-amber-500 mx-4" href="/inventory">
            Manager Inverntory
          </a>
          <a className="text-white hover:text-amber-500 mx-4" href="/login">
            Login
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
