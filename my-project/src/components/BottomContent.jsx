import retroPc from "../../../assets/images/image-retro-pcs.jpg";
import gamingGrowth from "../../../assets/images/image-gaming-growth.jpg";
import topLaptops from "../../../assets/images/image-top-laptops.jpg";

export const BottomContent = () => {
  return (
      <section className="flex flex-col justify-between my-5 mx-2 md:flex-row md:ml-12">
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
  );
};
