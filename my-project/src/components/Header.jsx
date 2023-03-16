import logo from "../../../assets/images/logo.svg";
import hamburger from "../../../assets/images/icon-menu.svg";
import closeBtn from "../../../assets/images/icon-menu-close.svg";
import { useState } from "react";

export const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <header className="px-10 w-full fixed bg-offWhite">
        <div
          id="nav"
          className="flex items-center mx-1
           justify-between mt-1 mb-1 md:mx-10"
        >
          <div className="pt-2 -ml-10">
            <img src={logo} />
          </div>
          <div
            id="items"
            className="hidden md:flex space-x-6 mx-5 text-darkGrayishBlue"
          >
            <a href="#" className="hover:text-softRed">
              Home
            </a>
            <a href="#" className="hover:text-softRed">
              New
            </a>
            <a href="#" className="hover:text-softRed">
              Popular
            </a>
            <a href="#" className="hover:text-softRed">
              Trending
            </a>
            <a href="#" className="hover:text-softRed">
              Categories
            </a>
          </div>
          <img
            id="menu-btn"
            className="block md:hidden"
            onClick={() => setOpen(!open)}
            src={open ? closeBtn : hamburger}
          />
        </div>
      </header>
      {/* mobile menu */}
      <div className="md:hidden">
        <div
          id="menu"
          className={`flex flex-col bg-offWhite right-0 
          transition-all duration-50 ease-in
          ${
            open ? "top-14" : "hidden"
          } h-screen w-2/3 fixed py-5 pr-2text-left z-10  `}
        >
          <a className="pt-5 pl-6" href="#">
            Home
          </a>
          <a className="pt-5 pl-6" href="#">
            New
          </a>
          <a className="pt-5 pl-6" href="#">
            Popular
          </a>
          <a className="pt-5 pl-6" href="#">
            Trending
          </a>
          <a className="pt-5 pl-6" href="#">
            Categories
          </a>
        </div>

        <div
          id="menu"
          onClick={() => setOpen(!open)}
          className={`flex flex-col  bg-veryDarkBlue left-0 
          transition-all duration-50 ease-in
          ${
            open ? "top-0 opacity-70" : "hidden"
          } h-screen w-1/3 fixed py-5 pr-2text-left z-10  `}
        ></div>
      </div>
    </div>
  );
};
