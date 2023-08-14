import React from "react";

function Header() {
  return (
    <nav>
      <div className="text-5xl flex px-52 py-10 justify-between">
        <div className="flex-1 basis-1/4">Logo</div>
        <div className="flex-1 basis-1/2">
          <ul className="flex justify-between">
            <li className="text-center px-8 py-2 hover:bg-slate-300 rounded-full">
              Home
            </li>
            <li className="text-center px-8 py-2 hover:bg-slate-300 rounded-full">
              About
            </li>
            <li className="text-center px-8 py-2 hover:bg-slate-300 rounded-full">
              Projects
            </li>
            <li className="text-center px-8 py-2 hover:bg-slate-300 rounded-full">
              Contact
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
