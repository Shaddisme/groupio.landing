import { useFormik } from "formik";
import * as Yup from "yup";
// import contactImage from "/assets/contactImage.svg";
import cancel from "/assets/cancel.svg";
import { NavLink } from "react-router";
import { useState } from "react";
const ContactForm = () => {
  const [success, setSuccess] = useState(false);
  const validationSchema = Yup.object({
    name: Yup.string().required(" Name is Required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email address is Required"),
    message: Yup.string().required("Please type your message"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        const scriptUrl =
          "https://script.google.com/macros/s/AKfycbyCYH1ijL_Oq4XI52CTaTN6REf9qut47BFtwy-gnibOEsaJ_hFIduT_ZRRAJx3n7zI/exec";

        const response = await fetch(scriptUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            name: values.name,
            email: values.email,
            message: values.message,
          }),
        });

        if (response.ok) {
          // alert("Message sent successfully!");
          setSuccess(true);

          resetForm();
        } else {
          // alert("Failed to send message. Please try again.");
        }
      } catch (error) {
        // alert("An error occurred. Please try again later.");
        console.log(error);
      }
    },
  });

  return (
    <div className="lg:w-1/2 w-full lg:h-screen  flex flex-col justify-start z-10 items-center bg-white overflow-y-hidden gap-[1rem] rounded-[2.50rem] lg:rounded-r-[2.50rem] lg:rounded-l-[0rem] py-[1rem]  px-[0rem] lg:px-[3rem]  ">
      <div className="w-full h-auto text-center">
        <h1 className="text-primaryColors-primary_2_Dark/70 lg:text-[2.50rem] text-[1.8rem] font-serif font-bold leading-[3.4375rem]">
          Contact Us
        </h1>
      </div>

      {success && (
        <div className="bg-green-100 px-[4rem] font-normal text-[1rem] py-[0.5rem] rounded-3xl">
          <p className="text-green-600">Thank you for contacting us</p>
        </div>
      )}
      <form
        onSubmit={formik.handleSubmit}
        className="lg:w-[90%] w-[95%] h-auto flex flex-col border gap-[0.5rem] outline-green-900/30 outline-1 rounded-[1rem] bg-white border-primaryColors-primary_1_light  px-[0.8rem] lg:px-[3rem] py-[1.5rem]"
      >
        <div className="w-full h-auto flex flex-col justify-start items-start bg-white gap-[0.125rem]">
          <label
            htmlFor="name"
            className="self-stretch text-primaryColors-primary_2_Dark/70 text-[1.05rem] font-normal leading-[1.5625rem]"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            className={`w-full h-[3rem] p-[1rem] outline-green-900/30 outline-1 items-center gap-[0.625rem] self-stretch rounded-[0.375rem] bg-white border ${
              formik.touched.name && formik.errors.name
                ? "border-red-500"
                : "border-primaryColors-primary_1_light"
            }`}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.name}
            </div>
          ) : null}
        </div>

        <div className="w-full h-auto flex flex-col justify-start items-start bg-white gap-[0.125rem]">
          <label
            htmlFor="email"
            className="self-stretch text-primaryColors-primary_2_Dark/70 text-[1.05rem] font-normal leading-[1.5625rem]"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className={`w-full h-[3rem] p-[1rem] outline-green-900/30 outline-1 items-center gap-[0.625rem] self-stretch rounded-[0.375rem] bg-white border ${
              formik.touched.email && formik.errors.email
                ? "border-red-500"
                : "border-primaryColors-primary_1_light"
            }`}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.email}
            </div>
          ) : null}
        </div>

        <div className="w-full h-auto flex flex-col justify-start items-start bg-white gap-[0.125rem]">
          <label
            htmlFor="message"
            className="self-stretch text-primaryColors-primary_2_Dark/70 text-[1.05rem] font-normal leading-[1.5625rem]"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
            className={`w-full h-[12rem] rounded-[0.375rem] outline-green-900/30   flex flex-row justify-center items-center flex-shrink-0 self-stretch px-[1rem] py-[1rem] border ${
              formik.touched.message && formik.errors.message
                ? "border-red-500"
                : "border-primaryColors-primary_1_light"
            }`}
          />
          {formik.touched.message && formik.errors.message ? (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.message}
            </div>
          ) : null}
        </div>

        <button
          type="submit"
          className="w-full cursor-pointer hover:opacity-80 text-white h-[3.375rem] py-[0.875rem] mt-[1rem] px-[3.0625rem] gap-[0.625rem] flex-shrink-0 flex flex-row justify-center items-center rounded-[0.375rem] bg-primaryColors-primary_1"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

const RightContact = () => (
  <div className="w-1/2 hidden lg:block z-0 h-full  ">
    <div
      className="w-full bg-no-repeat bg-cover flex flex-row justify-end items-start py-[2rem] px-[2rem]  bg-right bg-[url('/assets/contactImage.svg')] h-dvh "
      alt="contactbg"
    >
      <NavLink to={"/"}>
        <img
          src={cancel}
          className=" cursor-pointer   hover:opacity-70 flex flex-row justify-end  items-start "
          alt="cancel"
        />
      </NavLink>
    </div>
  </div>
);

// bg-[url('/assets/contactImage.svg')]
// bg-right bg-no-repeat
// bg-[url('/assets/contactImage.svg')] bg-cover  bg-no-repeat
const Contact = () => {
  return (
    <div className="w-full lg:h-auto h-screen overflow-hidden bg-[url('/assets/contactImage.svg')] bg-cover  bg-center justify-center bg-no-repeat lg:justify-between items-start flex flex-row   lg:px-[0rem] px-[0.5rem] lg:py-0 py-[0.5rem] ">
      <ContactForm />
      <RightContact />
    </div>
  );
};

export default Contact;
