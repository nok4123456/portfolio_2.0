import React from "react";
import Icon from "../assets/Icon/Icon.png";
import Image from "next/image";

function Header() {
  return (
    <nav className="justify-center flex">
      <div className="flex-1 max-w-screen-lg py-20 justify-between flex">
        <div className="basis-1/3 text-5xl flex justify-start">
          <Image src={Icon} alt="Icon" width={75} height={75} />
          <div className="self-center text-center font-mono font-bold">
            en Chan
          </div>
        </div>
        <div className="flex-1 text-2xl basis-1/2 self-center">
          <ul className="flex justify-between text-slate-700">
            <li className="text-center  px-8 py-2 hover:bg-slate-300 rounded-full">
              About
            </li>
            <li className="text-center px-8 py-2 hover:bg-slate-300 rounded-full">
              Showcase
            </li>
            <li className="text-center px-8 py-2 hover:bg-slate-300 rounded-full">
              Projects
            </li>
            <li className="text-center px-8 py-2 hover:bg-slate-300 rounded-full">
              Blog
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
