import Layout from "./Layout";

const Features = () => {
  return (
    <Layout id="features" className="lg:py-[4rem] py-[2rem]  ">
      <div className="w-full h-auto flex-col  justify-start text-center items-center flex gap-[1rem] ">
        <h1 className="text-primaryColors-primary_2_Dark text-[2.25rem]  font-bold leading-[2.8125rem] ">
          Groupio Features
        </h1>
        <p className="text-[#5F5E5E] text-center text-[1.125rem] font-normal leading-[1.5rem]">
          {" "}
          Discover innovative features with Groupio!
        </p>
      </div>
    </Layout>
  );
};

export default Features;
