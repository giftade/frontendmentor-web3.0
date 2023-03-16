import closeBtn from "../../../assets/images/icon-menu-close.svg";

export const MobileMenu = () => {
  return (
    <div>
      <div class="md:hidden">
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
    </div>
  );
};
