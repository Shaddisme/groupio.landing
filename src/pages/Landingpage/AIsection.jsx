import Layout from "./Layout";
import singleLogo from "/assets/singleLogo.svg";

function AIsection() {
  return (
    <Layout
      id="aisection"
      className="py-[2rem] px-[2rem]   flex lg:gap-0 gap-[2rem] bg-[#A9F8E7]/10 lg:flex-row-reverse  flex-col justify-start items-center lg:justify-between lg:items-center"
    >
      {/* Right Content - AI Assistant */}
      <div className="w-full lg:w-[40%] relative flex justify-center items-center mt-8 lg:mt-0 order-0 lg:order-none">
        <div className="bg-white flex flex-col gap-3 md:gap-[1rem] rounded-lg md:rounded-[0.75rem] shadow-md p-3 md:p-4 w-full max-w-md">
          <div className="flex border-b border-black/50 items-center pb-2 gap-2 md:gap-[0.5rem]">
            <div className="p-1 md:p-2 rounded-full flex justify-center items-center bg-[#4CAF50]/50">
              <img
                src={singleLogo}
                alt="logo"
                className="w-5 h-5 md:w-6 md:h-6"
              />
            </div>
            <p className="text-black text-base md:text-[1.1rem] leading-normal">
              Helping plan your Miami trip
            </p>
          </div>

          <div className="rounded-lg md:rounded-[0.9375rem] p-3 md:p-4 flex flex-col gap-1 bg-[#d9d9d9]/40">
            <p className="text-sm md:text-base">
              {
                "Here's an itinerary I created based on your group's preferences:"
              }
            </p>
            <ul className="list-disc px-4 text-sm md:text-base">
              <li>Morning: South Beach exploration</li>
              <li>Afternoon: Art Deco walking tour</li>
              <li>Evening: Dinner at Seaside Grill (everyone voted yes!)</li>
            </ul>
          </div>
        </div>

        <div className="lg:w-fit w-full justify-center lg:block  absolute -top-20 lg:-top-8 flex  lg:-left-1  my-2  md:my-[0.5rem]">
          <button className="lg:heroText w-full lg:w-fit text-white bg-[#4CAF50] h-8 md:h-[2.375rem] rounded-2xl md:rounded-[1.875rem] px-6 md:px-[2rem] text-sm md:text-base">
            AI Assistant
          </button>
        </div>
      </div>

      {/* Left Content */}
      <div className="flex w-full lg:w-[60%] flex-col gap-[1.5rem] order-1 lg:order-none">
        <div className="flex flex-col gap-[1.5rem]">
          {/* AI travel planner button */}
          <div className="lg:w-fit  w-full lg:justify-start flex justify-center">
            <button className="flex w-full border rounded-[1rem] shadow-sm bg-white border-[#4CAF50] px-4 py-3 md:px-[1rem] md:py-[1rem] justify-center gap-2 md:gap-[0.3125rem] items-center">
              <p className="text-[#4CAF50] text-sm md:text-[0.875rem] font-bold leading-normal md:leading-[1.562rem]">
                AI Travel Planner
              </p>
              <img
                className="w-5 h-5 md:w-[1.5rem] md:h-[1.5rem]"
                src="assets\starmulti.svg"
                alt="star"
              />
            </button>
          </div>

          <div className="flex w-full flex-col gap-4 md:gap-[1.5rem] justify-start items-start">
            <h2 className="text-black lg:heroText text-center lg:text-left text-2xl md:text-[2rem] leading-7 md:leading-[1.5625rem] font-bold">
              Let our AI take care of your travel planning
            </h2>
            <p className="text-[#6B7280] text-base md:text-[1.1rem] font-normal leading-6 md:leading-[1.5625rem]">
              {`Our intelligent assistant builds personalized itineraries based on
              your group's preferences, budget, and travel dates. It handles the
              complex coordination so you don't have to.`}
            </p>
          </div>
        </div>

        {/* Bullets and button */}
        <div className="flex flex-col gap-4 md:gap-[1.5rem]">
          <div className="w-full h-auto flex flex-col gap-3 md:gap-[1.3rem]">
            {[
              "Suggests activities your group will love based on preferences",
              "Handles complex scheduling across multiple time zones",
              "Optimizes travel plans for cost and convenience",
            ].map((text, index) => (
              <div
                key={index}
                className="w-full gap-2 md:gap-[0.62rem] flex items-center"
              >
                <img
                  src={singleLogo}
                  className="w-5 h-5 md:w-6 md:h-6 motion-preset-oscillate motion-duration-900"
                  alt="logo"
                />
                <p className="text-[#5F5E5E] text-base md:text-[1.125rem] font-bold leading-5 md:leading-[1.5625rem]">
                  {text}
                </p>
              </div>
            ))}
          </div>

          <div className="w-full md:w-fit my-2 md:my-[0.5rem]">
            <button className="w-full md:w-auto text-white bg-[#4CAF50] rounded-md md:rounded-[0.375rem] px-4 md:px-[1rem] h-12 md:h-[3.125rem] text-sm md:text-base">
              Try AI Planning
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AIsection;
