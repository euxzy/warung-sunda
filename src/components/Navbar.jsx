import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-slate-700 absolute top-0 left-0 w-full flex items-center justify-center z-10">
      <div className="w-3/4">
        <div className="flex items-center justify-between relative py-6">
          <div className="font-bold text-lg text-purple-100 block">Warung Sunda</div>
          <div className="text-purple-100 flex">
            <div className="w-60 flex justify-between">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/product">Product</NavLink>
              <NavLink to="/about">About</NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
