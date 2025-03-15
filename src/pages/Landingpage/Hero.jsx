import { useFormik } from "formik";
import { useState } from "react";
import { motion } from "framer-motion";

const Hero = () => {
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

        setSuccess(true);
        resetForm();
      } catch (error) {
        console.log("Please try again. Error: " + error.message);
      }
    },
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2, delay: 0.4 }}
      className="hero-section"
    >
      <section
        id="home"
        className="w-full lg:px-[6.25rem] px-[0.69rem] py-[1.5rem] lg:text-left justify-start items-center flex-col lg:py-[4rem] gap-[2.5rem] flex lg:flex-row lg:items-start lg:justify-between"
      >
        <div className="lg:w-[50%] w-full h-auto justify-start items-center lg:items-start flex-col flex gap-[2.44rem] lg:gap-[2.53rem]">
          <h1 className="w-full heroText  h-auto text-[2.375rem] lg:text-[3.4375rem] text-primaryColors-primary_2_Dark font-bold leading-[3.4375rem]  motion-preset-typewriter  ">
            Plan your group trip with
            <span className="text-[#1E7B68]"> Groupio</span>
          </h1>

          <div className="w-full text-[#5F5E5E] h-auto flex-col flex justify-start items-start gap-[1rem] font-normal leading-[1.5rem]">
            <p className="hidden w-full text-[1.125rem] lg:block font-normal">
              Experience the joy of effortless group travel with Groupio.
            </p>
            <p className="font-semibold smallText w-full text-[1.125rem] leading-[2rem]">
              Get your group trip out of the group chat and start your next
              adventure today!
            </p>
          </div>

          <form onSubmit={formik.handleSubmit} className="w-full  h-auto">
            <div className="lg:flex-row w-full flex-col flex justify-start items-center gap-[1rem]">
              <input
                type="email"
                name="email"
                placeholder="Enter your email to join waitlist"
                className="border-2 lg:block border-primaryColors-primary_1_light outline-none bg-white text-[#5F5E5E] rounded-[1.375rem] p-[1rem] text-[1rem] items-center shrink-0 gap-[0.625rem] w-full lg:h-[3.75rem] h-auto lg:w-[60%]"
                value={formik.values.email}
                onChange={formik.handleChange}
                required
              />
              <button
                type="submit"
                className="bg-primaryColors-primary_1  hover:opacity-80 lg:block text-white text-[1.5rem] font-bold px-[3rem] w-full lg:w-[30%] rounded-[1.375rem] lg:rounded-[6.25rem] h-[3.75rem] hover:bg-primaryColors-primary_2"
              >
                Submit
              </button>
              <button
                type="submit"
                className="bg-primaryColors-primary_1 hidden  text-white text-[1.5rem]  text-nowrap font-bold px-[3rem] w-[13.8125rem] rounded-[6.25rem] h-[3.75rem] hover:bg-primaryColors-primary_2"
              >
                Get started
              </button>
            </div>
            {success && (
              <div className="text-primaryColors-primary_1 text-[1.5rem] text-start  mt-[1rem]">
                <p className="text-center"> Thank you for joining!</p>
              </div>
            )}
          </form>
        </div>

        <div className="lg:w-[50%] w-full h-auto lg:justify-end justify-center bg-[#f2fefb] lg:bg-white flex flex-row">
          <img
            src="assets/heroimage.svg"
            alt="Travel"
            className="lg:w-[32.125rem] w-[17.125rem] h-[17.06069rem] lg:h-[29.8125rem]  mix-blend-multiply"
          />
        </div>
      </section>
    </motion.div>
  );
};

export default Hero;
