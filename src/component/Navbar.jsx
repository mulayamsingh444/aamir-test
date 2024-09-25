import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-[15px] py-[7px]">
      <div>
      <img  className= " w-[120px] h-[130px] "src="/images/the.png"></img>

      </div>
      <div>
        <ul className="flex flex-row justify-around gap-5 px-1 py-3  ">
          <li className="hover:text-red-400">Home</li>
          <li className="hover:text-red-400">About Us</li>
          <li className="hover:text-red-400">Services</li>
          <li className="hover:text-red-400">Blogs</li>
          <li className="hover:text-red-400">Contact Us</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
