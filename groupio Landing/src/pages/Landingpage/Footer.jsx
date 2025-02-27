import Layout from "./Layout";

const Footer = () => {
  return (
    <Layout className="py-[2rem]   bg-[#145245] flex w-full h-auto flex-row justify-between items-center ">
      <div className="w-1/3   h-auto">
        <img src="/assets/footerLogo.svg" className="  " alt="logo" />
      </div>

      <div className="w-1/3  text-[0.875rem] font-normal text-center flex-row flex justify-center  text-white h-auto">
        <p> © 2024 Groupio </p>
      </div>

      <div className="w-1/3 h-auto flex flex-row  justify-end items-center gap-[0.69rem]">
        <img
          src="/assets/twitter.svg"
          className="cursor-pointer hover:opacity-50 "
          alt="logo"
        />
        <img
          src="/assets/instagram.svg"
          className="cursor-pointer hover:opacity-50 "
          alt="logo"
        />
        <img
          src="/assets/facebookIcon.svg"
          className="cursor-pointer hover:opacity-50   "
          alt="logo"
        />
      </div>
    </Layout>
  );
};

export default Footer;
