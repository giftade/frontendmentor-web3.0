

export const RightMain = () =>{
  return (
      <div className="flex text-left flex-col justify-evenly bg-veryDarkBlue text-offWhite px-5 md:w-1/4">
        <h1 className="pb-5 text-softOrange text-4xl font-bold md:py-5">New</h1>
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
            Private funding by VC firms is down 50% YOY. We take a look at what
            that means.
          </p>
        </div>
      </div>
  );
}