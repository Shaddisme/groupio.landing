import Layout from "./Layout";

const NewsLetter = () => {
  return (
    <Layout className="px-[11rem] py-[4rem] flex flex-row justify-center items-center ">
      <div>
        <div className="w-full h-auto flex flex-col py-[5.75rem] px-[4.875rem] justify-center items-center bg-primaryColors-primary_1 rounded-[1.25rem] gap-[2.70rem]">
          <div className="w-full text-white h-auto justify-start leading-[1.5625rem] font-bold item-start flex flex-col gap-[2rem]">
            <h1 className="text-[2.375rem]">Let’s stay in touch!</h1>
            <p className="text-[1.125rem]">
              Subscribe below to gain first access to Groupio’s launch
            </p>
          </div>

          <div className=" flex-row  flex justify-start items-center gap-[2rem] ">
            <input
              type="email"
              placeholder="Enter your email"
              className="border border-[#D9D9D9] bg-primaryColors-primary_1 text-[1.0625rem] font-normal leading-[1.5625rem] text-[#5F5E5E] rounded-[1.25rem] py-[1.5rem] px-[1.25rem] text-[rgba(235, 244, 242, 0.92)] items-center shrink-0 gap-[0.625rem]  h-[3.75rem] md:w-[320px] lg:w-[48.375rem]"
            />
            <button className="bg-white text-black font-bold text-[1.125rem] leading-[1.5625rem] px-[2.5rem]  gap-[0.625rem]  rounded-[6.25rem]  py-[1rem] w-[11.8125rem]  ">
              Submit
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NewsLetter;
