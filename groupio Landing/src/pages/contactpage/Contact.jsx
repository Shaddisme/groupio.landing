import { useFormik } from "formik";
import * as Yup from "yup";
// import contactImage from "/assets/contactImage.svg";
import cancel from "/assets/cancel.svg";
import { NavLink } from "react-router";
const ContactForm = () => {
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
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="w-1/2 h-screen flex flex-col justify-start z-10 items-center bg-white gap-[1.2rem] rounded-r-[2.50rem] overflow-hidden  px-[3rem]  py-[1rem]">
      <div className="w-full h-auto text-center">
        <h1 className="text-primaryColors-primary_2_Dark/70 text-[2.50rem] font-serif font-bold leading-[3.4375rem]">
          Contact Us
        </h1>
      </div>
      <form
        onSubmit={formik.handleSubmit}
        className="w-[90%] h-full flex flex-col border gap-[0.8rem] outline-green-900/30 outline-1 rounded-[1rem] bg-white border-primaryColors-primary_1_light px-[3rem] py-[2rem]"
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
          className="w-full text-white h-[3.375rem] py-[0.875rem] mt-[1rem] px-[3.0625rem] gap-[0.625rem] flex-shrink-0 flex flex-row justify-center items-center rounded-[0.375rem] bg-primaryColors-primary_1"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

const RightContact = () => (
  <div className="w-1/2 z-0 h-full  ">
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
    <div className="w-full h-auto  overflow-hidden bg-[url('/assets/contactImage.svg')] bg-cover  bg-no-repeat justify-between items-start flex flex-row">
      <ContactForm />
      <RightContact />
    </div>
  );
};

export default Contact;
