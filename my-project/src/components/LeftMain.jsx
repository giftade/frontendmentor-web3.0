import desktopPhoto from "../../../assets/images/image-web-3-desktop.jpg";
import mobilePhoto from "../../../assets/images/image-web-3-mobile.jpg";

export const LeftMain = () => {
  return (
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
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people.But is it
              really fulfilling its promise?
            </p>
            <div className="my-8 md:mb-1">
              <button class="bg-softRed text-offWhite px-10 py-3 font-medium baseline hover:bg-veryDarkBlue">
                READ MORE
              </button>
            </div>
          </div>
        </div>
      </div>
  );
};
