import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import logo from "../../assets/images/logo.svg";
import hamburger from "../../assets/images/icon-menu.svg";
import closeBtn from "../../assets/images/icon-menu-close.svg";
import desktopPhoto from "../../assets/images/image-web-3-desktop.jpg";
import mobilePhoto from "../../assets/images/image-web-3-mobile.jpg";
import retroPc from "../../assets/images/image-retro-pcs.jpg";
import gamingGrowth from "../../assets/images/image-gaming-growth.jpg";
import topLaptops from "../../assets/images/image-top-laptops.jpg";

function App() {
  return (
    <div>
      {/* Mobile Navbar */}
      <div class="hidden">
        <div
          id="menu"
          className="flex flex-col bg-offWhite right-0 top-0 h-screen w-3/5 fixed py-5 pr-2text-left z-10"
        >
          <div className="flex justify-end">
            <img className="mr-10 -mt-1 mb-15" src={closeBtn} />
          </div>
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
      </div>
      <div id="body">
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
        <main className="flex flex-col mx-2 md:mx-3 md:flex-row md:justify-evenly pt-16">
          <div className="md:w-2/3">
            <img className="hidden  md:block md:" src={desktopPhoto} />
            <img className="md:hidden" src={mobilePhoto} />
            <div className="flex flex-col md:flex-row md:justify-around">
              <div>
                <h2 className="font-bold text-5xl text-veryDarkBlue pt-2 md:w-1/2 ">
                  The Bright Future of Web 3.0?
                </h2>
              </div>
              <div className="flex flex-col justify-between md:w-1/2">
                <p className="text-darkGrayishBlue md:pt-2">
                  We dive into the next evolution of the web that claims to put
                  the power of the platforms back into the hands of the
                  people.But is it really fulfilling its promise?
                </p>
                <div className="my-8 md:mb-1">
                  <button class="bg-softRed text-offWhite px-10 py-3 font-medium baseline hover:bg-veryDarkBlue">
                    READ MORE
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex text-left flex-col justify-evenly bg-veryDarkBlue text-offWhite px-5 md:w-1/4">
            <h1 className="pb-5 text-softOrange text-4xl font-bold md:py-5">
              New
            </h1>
            <div className="pb-5 md:pb-0 md:-mt-5">
              <h2 className="pb-2 text-2xl  text-offWhite font-bold md:text-lg hover:text-softOrange">
                Hydrogen VS Electric Cars
              </h2>
              <p className="text-grayishBlue">
                Will hydrogen-fueled cars ever catch up to EVs?
              </p>
            </div>
            <hr className="text-darkGrayishBlue pb-10 md:pb-5 md:mt-2" />

            <div className="pb-5 md:pb-0 md:-mt-5">
              <h2 className="pb-2 text-2xl  text-offWhite font-bold md:text-lg hover:text-softOrange">
                The Downsides of AI Artistry
              </h2>
              <p className="text-grayishBlue">
                What are the possible adverse effects of on-demand AI image
                generation?
              </p>
            </div>
            <hr className="text-darkGrayishBlue pb-10 md:pb-5 md:mt-2" />
            <div className="pb-5 md:pb-0 md:-mt-5">
              <h2 className="pb-2 text-2xl  text-offWhite font-bold md:text-lg hover:text-softOrange">
                Is VC Funding Drying Up?
              </h2>
              <p className="text-grayishBlue">
                Private funding by VC firms is down 50% YOY. We take a look at
                what that means.
              </p>
            </div>
          </div>
        </main>
        <section className="flex flex-col justify-between my-5 mx-2 md:flex-row">
          <div className="flex space-x-5 sm:mb-10">
            <div className="">
              <img className="md:mt-5" src={retroPc} />
            </div>
            <div className="">
              <h1 className="text-3xl font-medium text-grayishBlue">01</h1>
              <h2 className="text-veryDarkBlue font-bold hover:text-softRed">
                Reviving Retro PCs
              </h2>
              <p
                className="text-grayishBlue
              "
              >
                What happens when old PCs are given modern upgrades?
              </p>
            </div>
          </div>

          <div className="flex space-x-5 sm:mb-10 md:mr-10">
            <div>
              <img className="md:mt-5" src={topLaptops} />
            </div>
            <div className="">
              <h1 className="text-3xl font-medium text-grayishBlue">02</h1>
              <h2 className="text-veryDarkBlue font-bold hover:text-softRed">
                Top 10 Laptops of 2022
              </h2>
              <p className="text-grayishBlue">
                Our best picks for various needs and budgets.
              </p>
            </div>
          </div>

          <div className="flex space-x-5">
            <div>
              <img className="md:mt-5" src={gamingGrowth} />
            </div>
            <div className="">
              <h1 className="text-3xl font-medium text-grayishBlue">03</h1>
              <h2 className="text-veryDarkBlue font-bold hover:text-softRed">
                The Growth of Gaming
              </h2>
              <p className="text-grayishBlue">
                How the pandemic has sparked fresh opportunities.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
