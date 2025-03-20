import { useState } from "react";
import Layout from "./Layout";
import { useFormik } from "formik";
const NewsLetter = () => {
  const [success, setSuccess] = useState(false);

  const formik = useFormik({
    initialValues: { email: "" },
    onSubmit: async (values, { resetForm }) => {
      try {
        // Replace with your ACTUAL script URL
        const scriptUrl =
          "https://script.google.com/macros/s/AKfycby_90z6HRTT9wyUft-GAtvzoMHsvelXbgkT5eEnPZBoP7l9Hx-TBjbBo3a-6oaGIT4v/exec";

        // GET method fallback
        await fetch(`${scriptUrl}?email=${encodeURIComponent(values.email)}`);

        // alert("Thank you for joining!");
        setSuccess(true);

        resetForm();
      } catch (error) {
        // alert("Please try again. Error: " + error.message);
        console.log(error.message);
      }
    },
  });
  return (
    <Layout className=" lg:py-[4rem] w-full  py-[2rem] flex px-0  newsText lg:px-[6.25rem] flex-row justify-center items-center ">
      <div className="lg:w-[90%] w-full h-auto">
        <div className="w-full h-auto flex flex-col lg:py-[5.75rem] py-[2rem] px-[1.5rem] lg:px-[4.875rem] justify-center items-center bg-primaryColors-primary_1 lg:rounded-[1.25rem] gap-[1rem] lg:gap-[2.70rem]">
          <div className="w-full text-white h-auto justify-start leading-[1.5625rem] font-bold item-start flex flex-col gap-[2rem]">
            <h1 className="lg:text-[2.375rem]    text-[2rem] ">
              Let’s stay in touch!
            </h1>
            <p className="text-[1.125rem]  text-white/80 font-normal">
              Subscribe below to gain first access to Groupio’s launch
            </p>
          </div>

          <form className="w-full h-auto" onSubmit={formik.handleSubmit}>
            <div className=" lg:flex-row flex-col w-full flex justify-start items-center gap-[0.8rem] lg:gap-[2rem] ">
              <input
                type="email"
                placeholder="Enter your email to join waitlist"
                value={formik.values.email}
                name="email"
                onChange={formik.handleChange}
                required
                className="border w-full border-[#D9D9D9] outline-none text-white bg-primaryColors-primary_1 text-[1.0625rem] font-normal leading-[1.5625rem]  rounded-[1.25rem] py-[1.5rem] px-[1.25rem] text-black/50 items-center shrink-0 gap-[0.625rem]  h-[3.75rem] md:w-[48.375rem]"
              />

              <button
                type="submit"
                className="bg-white text-black font-bold text-[1.125rem] leading-[1.5625rem] px-[2.5rem]  w-full gap-[0.625rem] cursor-pointer hover:opacity-80  rounded-[1.25rem]  py-[1rem] lg:w-[11.8125rem]  "
              >
                Submit
              </button>
            </div>
            {success && (
              <div className="text-white lg:w-[90%] text-[1.5rem] text-center mt-[1rem]">
                <p> Thank you for joining!</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default NewsLetter;
