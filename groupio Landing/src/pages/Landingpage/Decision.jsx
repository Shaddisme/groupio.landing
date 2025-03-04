import Layout from "./Layout";
import image from "/assets/DecisionImage.svg";
import singleLogo from "/assets/singleLogo.svg";
import Button from "../../components/Button";

const Decision = () => {
  return (
    <Layout className="lg:py-[4rem]   lg:px-[6.25rem] px-[2rem]   w-full py-[2rem] flex bg-white lg:flex-row-reverse   gap-[2rem] flex-col-reverse justify-start items-center lg:justify-between lg:items-center">
      <div className="lg:w-1/2 w-full  flex h-auto flex-col  items-center justify-start lg:gap-[4rem] gap-[2rem] lg:items-start">
        {/* upper part */}
        <div className=" w-full h-auto gap-[2rem] flex flex-col justify-start items-start">
          <div className="w-full h-auto flex text-center flex-col justify-start items-center lg:items-start gap-[1rem] lg:gap-[2rem]">
            <h1 className="text-primaryColors-primary_2_Dark lg:text-[2.25rem] text-[1.75rem] font-bold leading-[2.8125rem] ">
              Decision Making
            </h1>
            <p className="text-[#5F5E5E] text-[1.125rem] cardText font-normal leading-[1.5rem] ">
              {`Simplify group expense tracking with Groupio. Log expenses, split costs, and stay within budget while enjoying  real-time updates and automatic calculations for transparency and fairness.`}
            </p>
          </div>

          <div className="w-full h-auto flex flex-col gap-[0.69rem] justify-start items-start">
            <div className="w-full gap-[0.62rem] justify-start items-center h-auto flex flex-row">
              <img src={singleLogo} alt="logo" />
              <p className="text-[#5F5E5E] text-[1.125rem] font-bold leading-[1.5625rem]">
                Visual progress bar
              </p>
            </div>
            <div className="w-full gap-[0.62rem] justify-start items-center h-auto flex flex-row">
              <img src={singleLogo} alt="logo" />
              <p className="text-[#5F5E5E] text-[1.125rem] font-bold leading-[1.5625rem]">
                Foreign exchange calculator.
              </p>
            </div>
            <div className="w-full gap-[0.62rem] justify-start items-center h-auto flex flex-row">
              <img src={singleLogo} alt="logo" />
              <p className="text-[#5F5E5E] text-[1.125rem] font-bold leading-[1.5625rem]">
                Budget and expenses tracker
              </p>
            </div>
          </div>
        </div>

        {/* button part */}
        <div className="w-3/4 h-auto flex flex-row lg:justify-start justify-center items-start">
          <Button className=" lg:px-[1.5rem] font-bold  py-[1.5rem] px-[3rem]">
            Learn more{" "}
          </Button>
        </div>
      </div>

      {/* image */}
      <div className="w-full lg:w-1/2  h-auto flex-row flex lg:justify-start justify-center items-center ">
        <img
          className="lg:w-[27.1875rem] lg:h-[27.1875rem;]  w-[9.45106rem] h-[9.45106rem]"
          src={image}
          alt="image"
        />
      </div>
    </Layout>
  );
};

export default Decision;
