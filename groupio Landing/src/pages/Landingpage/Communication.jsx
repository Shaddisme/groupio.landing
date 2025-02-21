import Layout from "./Layout";
import image from "/assets/communicationImage.svg";
import singleLogo from "/assets/singleLogo.svg";
import Button from "../../components/Button";

const Communication = () => {
  return (
    <Layout className="py-[4rem] flex bg-[#A9F8E7]/10 flex-row  justify-between items-center">
      <div className="w-full flex h-auto flex-col justify-start gap-[4rem] items-start">
        {/* upper part */}
        <div className=" w-3/4 h-auto gap-[2rem] flex flex-col justify-start items-start">
          <div className="w-full h-auto flex flex-col justify-start items-start gap-[2rem]">
            <h1 className="text-primaryColors-primary_2_Dark text-[2.25rem] font-bold leading-[2.8125rem] ">
              Communication
            </h1>
            <p className="text-[#5F5E5E] text-[1.125rem] font-normal leading-[1.5rem] ">
              {`Stay connected with your group every step of the way with our intuitive communication tools. Share updates, coordinate plans, and discuss trip details within the app. `}
            </p>
          </div>

          <div className="w-full h-auto flex flex-col gap-[0.69rem] justify-start items-start">
            <div className="w-full gap-[0.62rem] justify-start items-center h-auto flex flex-row">
              <img src={singleLogo} alt="logo" />
              <p className="text-[#5F5E5E] text-[1.125rem] font-bold leading-[1.5625rem]">
                In-app group chat.
              </p>
            </div>
            <div className="w-full gap-[0.62rem] justify-start items-center h-auto flex flex-row">
              <img src={singleLogo} alt="logo" />
              <p className="text-[#5F5E5E] text-[1.125rem] font-bold leading-[1.5625rem]">
                Notifications and status updates.
              </p>
            </div>
          </div>
        </div>

        {/* button part */}
        <div className="w-full h-auto flex flex-row justify-start items-start">
          <Button>Learn more </Button>
        </div>
      </div>

      {/* image */}
      <div className="w-1/2 h-auto flex-row flex justify-end items-center ">
        <img className="w-full h-auto" src={image} alt="image" />
      </div>
    </Layout>
  );
};

export default Communication;
