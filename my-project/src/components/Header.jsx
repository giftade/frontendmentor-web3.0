import logo from "../../../assets/images/logo.svg";
import hamburger from "../../../assets/images/icon-menu.svg";

export const Header = () => {
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
          <img id="menu-btn" className="block   md:hidden" src={hamburger} />
        </div>
      </header>
    </div>
  );
};
