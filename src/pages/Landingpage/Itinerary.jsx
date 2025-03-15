import Layout from "./Layout";
import image from "/assets/ItineraryImage.svg";
import singleLogo from "/assets/singleLogo.svg";
import Button from "../../components/Button";

const Itinerary = () => {
  return (
    <Layout className="py-[4rem] px-[2rem]   flex lg:gap-0 gap-[2rem] bg-[#A9F8E7]/10 lg:flex-row  flex-col-reverse justify-start items-center lg:justify-between lg:items-center">
      <div className="w-full flex h-auto flex-col  items-center justify-start lg:gap-[4rem] gap-[2rem] lg:items-start">
        {/* upper part */}
        <div className=" w-full h-auto gap-[2rem] flex flex-col justify-start items-start">
          <div className="w-full h-auto flex text-center flex-col justify-start items-center lg:items-start gap-[1rem] lg:gap-[2rem]">
            <h1 className="text-primaryColors-primary_2_Dark lg:text-[2.25rem] text-[1.75rem] font-bold leading-[2.8125rem] ">
              Itinerary Planning
            </h1>
            <p className="text-[#5F5E5E] w-full lg:w-3/4 text-[1.125rem] cardText font-normal leading-[1.5rem] ">
              {`Easily build custom itineraries tailored to your group's preferences,
          interests, and schedule. Collaborate with your travel companions in
          real-time to finalize plans and ensure everyone's preferences are
          accommodated.`}
            </p>
          </div>

          <div className="lg:w-full w-[100%] px-[2rem]   h-auto flex  flex-col gap-[0.69rem] justify-start  lg:justify-start lg:items-start">
            <div className="w-full gap-[0.62rem] justify-start items-center h-auto flex flex-row">
              <img
                src={singleLogo}
                className="motion-preset-oscillate motion-duration-900"
                alt="logo"
              />
              <p className="text-[#5F5E5E] text-[1.125rem] font-bold leading-[1.5625rem]">
                Shared Calendar
              </p>
            </div>
            <div className="w-full gap-[0.62rem] justify-start items-center h-auto flex flex-row">
              <img
                src={singleLogo}
                className="motion-preset-oscillate motion-duration-900"
                alt="logo"
              />
              <p className="text-[#5F5E5E] text-[1.125rem] font-bold leading-[1.5625rem]">
                Polling feature
              </p>
            </div>
            <div className="w-full gap-[0.62rem] justify-start items-center h-auto flex flex-row">
              <img
                src={singleLogo}
                className="motion-preset-oscillate motion-duration-900"
                alt="logo"
              />
              <p className="text-[#5F5E5E] text-[1.125rem] font-bold leading-[1.5625rem]">
                Real time updates and notifications
              </p>
            </div>
          </div>
        </div>

        {/* button part */}
        <div className="w-full h-auto flex flex-row justify-end  lg:justify-start items-start">
          <Button className=" lg:px-[1.5rem] flex flex-row py-[1.5rem] px-[3rem]">
            <span> Learn more</span>
          </Button>
        </div>
      </div>

      {/* image */}
      <div className="lg:w-1/2 w-full h-auto flex-row flex lg:justify-end justify-center items-start lg:items-center ">
        <img
          className="lg:w-full lg:h-auto   w-[9.45106rem] h-[9.45106rem]   "
          src={image}
          alt="image"
        />
      </div>
    </Layout>
  );
};

export default Itinerary;
