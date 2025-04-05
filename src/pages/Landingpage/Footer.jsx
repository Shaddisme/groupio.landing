import Layout from "./Layout";

const Footer = () => {
  return (
    <Layout className="py-[2rem] lg:px-[6.25rem] bg-[#145245] flex w-full h-auto px-[1.5rem]  gap-[2rem] lg:gap-[0rem] lg:flex-row flex-col justify-start items-center lg:justify-between lg:items-center ">
      <div className="w-fit  h-auto">
        <img
          src="/assets/footerLogo.svg"
          className="  lg:h-full  lg:w-[90%] "
          alt="logo"
        />
        <img
          src="/assets/footerIcon.svg"
          className=" w-[3.31431rem] hidden  h-[3.21488rem]  "
          alt="logo"
        />
      </div>

      <div className="w-1/3 text-[0.875rem] font-normal text-center flex-row flex justify-center  text-white h-auto">
        <p> © {new Date().getFullYear()} Groupio </p>
      </div>

      <div className="w-1/3 h-auto flex flex-row  lg:justify-end justify-center items-center gap-[1.4rem]">
        {/* <img
          src="/assets/linkedin.svg"
          className="cursor-pointer w-[4.375rem] lg:w-[2.53438rem] lg:h-[2.53438rem] h-[1.25175rem] hover:opacity-50 "
          alt="logo"
        /> */}
        <a href="https://x.com/groupiotravel" target="_blank">
          <img
            src="/assets/twitter.svg"
            className="cursor-pointer w-[4.375rem] lg:w-[2.53438rem] lg:h-[2.53438rem] h-[1.25175rem] hover:opacity-50 "
            alt="logo"
          />
        </a>
        <a href="https://www.instagram.com/groupiotravel/" target="_blank">
          <img
            src="/assets/instagram.svg"
            className="cursor-pointer w-[4.375rem] lg:w-[2.53438rem] lg:h-[2.53438rem] h-[1.25175rem] hover:opacity-50 "
            alt="logo"
          />
        </a>
        <a href="https://www.tiktok.com/@groupiotravel" target="_blank">
          <img
            src="/assets/titok.svg"
            className="cursor-pointer w-[4.375rem] lg:w-[2.53438rem] lg:h-[2.53438rem] h-[1.25175rem] hover:opacity-50 "
            alt="logo"
          />
        </a>

        {/* <img
          src="/assets/facebook.svg"
          className="cursor-pointer w-[4.375rem] lg:w-[2.53438rem] lg:h-[2.53438rem] h-[1.25175rem] hover:opacity-50 "
          alt="logo"
        /> */}
      </div>
    </Layout>
  );
};

export default Footer;
