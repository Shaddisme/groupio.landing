import Layout from "./Layout";

const Footer = () => {
  return (
    <Layout className="py-[2rem] lg:px-[6.25rem] bg-[#145245] flex w-full h-auto px-[1.5rem]  flex-row justify-between items-center ">
      <div className="w-fit   h-auto">
        <img
          src="/assets/footerLogo.svg"
          className=" hidden lg:block lg:h-1/2 lg:w-[60%] "
          alt="logo"
        />
        <img
          src="/assets/footerIcon.svg"
          className=" lg:hidden w-[2.31431rem] h-[3.21488rem]  block "
          alt="logo"
        />
      </div>

      <div className="w-1/3  text-[0.875rem] font-normal text-center flex-row flex justify-center  text-white h-auto">
        <p> © 2024 Groupio </p>
      </div>

      <div className="w-1/3 h-auto flex flex-row  justify-end items-center gap-[0.69rem]">
        <img
          src="/assets/twitter.svg"
          className="cursor-pointer w-[4.375rem] lg:w-[2.53438rem]lg:h-[2.53438rem] h-[1.25175rem] hover:opacity-50 "
          alt="logo"
        />
        <img
          src="/assets/instagram.svg"
          className="cursor-pointer w-[4.375rem] lg:w-[2.53438rem]lg:h-[2.53438rem] h-[1.25175rem] hover:opacity-50 "
          alt="logo"
        />
        <img
          src="/assets/facebookIcon.svg"
          className="cursor-pointer w-[4.375rem] lg:w-[2.53438rem]lg:h-[2.53438rem] h-[1.25175rem] hover:opacity-50 "
          alt="logo"
        />
      </div>
    </Layout>
  );
};

export default Footer;
