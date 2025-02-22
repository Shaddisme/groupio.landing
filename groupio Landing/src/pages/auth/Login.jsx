import { useFormik } from "formik";
import * as Yup from "yup";
import facebook from "/assets/facebook.svg";
import google from "/assets/google.svg";
import cancel from "/assets/cancel.svg";
import { Link, NavLink } from "react-router";
import { useState } from "react";
import { EyeOff, Eye } from "lucide-react";
const LoginForm = () => {
  const [showpassword, setShowpassword] = useState(false);

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email address is Required"),
    password: Yup.string()
      .required("Password is required")
      .trim()
      .label("Password"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="w-1/2 h-full flex flex-col justify-start z-10 items-center bg-white gap-[1.5rem] rounded-r-[2.50rem] py-[2rem]  px-[3rem]  ">
      <div className="w-full h-auto flex flex-col justify-start items-center gap-[0.50rem] text-center">
        <h1 className="text-primaryColors-primary_2_Dark/70 text-[2.50rem] font-serif font-bold leading-[3.4375rem]">
          Welcome Back
        </h1>
        <p className="text-[1.0625rem] text-center font-normal leading-[1.5625rem] text-primaryColors-primary_2_Dark/70  ">
          Sign in to your Groupio account
        </p>
      </div>
      <form
        onSubmit={formik.handleSubmit}
        className="w-[100%] h-auto flex flex-col border gap-[1.7rem] outline-green-900/30 outline-1 rounded-[1rem] bg-white border-primaryColors-primary_1_light px-[3rem] py-[1.5rem]"
      >
        {/* email */}
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

        {/* password*/}
        <div className="w-full h-auto flex flex-col justify-start items-start bg-white gap-[0.125rem]">
          <label
            htmlFor="password"
            className="self-stretch text-primaryColors-primary_2_Dark/70 text-[1.05rem] font-normal leading-[1.5625rem]"
          >
            password
          </label>

          <div className="relative w-full h-auto ">
            <input
              id="password"
              name="password"
              type="tel"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              className={`w-full h-[3rem] p-[1rem] outline-green-900/30 outline-1 items-center gap-[0.625rem] self-stretch rounded-[0.375rem] bg-white border ${
                formik.touched.password && formik.errors.password
                  ? "border-red-500"
                  : "border-primaryColors-primary_1_light"
              }`}
            />

            <button
              onClick={() => setShowpassword(!showpassword)}
              type="button"
              className="absolute right-4 top-3 w-4"
            >
              {showpassword ? (
                <Eye className="opacity-50" />
              ) : (
                <EyeOff className="opacity-50" />
              )}
            </button>

            {formik.touched.password && formik.errors.password ? (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.password}
              </div>
            ) : null}
          </div>
        </div>

        {/* login and forgotpassword */}
        <div className="w-full h-auto flex flex-col justify-start gap-[0.8rem] ">
          <button
            type="submit"
            className="w-full text-white h-[3.375rem] py-[0.875rem] mt-[1rem] px-[3.0625rem] gap-[0.625rem] flex-shrink-0 flex flex-row justify-center items-center rounded-[0.375rem] bg-primaryColors-primary_1"
          >
            Login
          </button>
          <div className="w-full h-auto flex flex-row justify-end items-start">
            <p className=" text-[#B6B1B1] font-normal leading-[1.5rem] text-[1rem] ">
              Forgot Password?
            </p>
          </div>
        </div>
        {/* google login and don't have an account  */}
        <div className="w-full  px-[0.5rem] h-auto flex-col flex justify-start items-center gap-[1.1rem]">
          <div className="w-full h-auto flex flex-row justify-between items-center gap-[1.25rem]">
            <button className="w-1/2 text-nowrap h-auto flex flex-row justify-start items-center gap-[0.65rem] py-[1rem] px-[0.94rem] rounded-[0.375rem] bg-white text-black/70 border border-primaryColors-primary_1_light ">
              <img
                src={google}
                className="w-[1.25rem] h-[1.25rem]"
                alt="googleicon"
              />
              <span>Login with Google</span>
            </button>
            <button className="w-1/2 text-nowrap h-auto flex flex-row justify-start items-center gap-[0.65rem] py-[1rem] px-[0.94rem] rounded-[0.375rem] bg-white text-black/70 border border-primaryColors-primary_1_light ">
              <img
                src={facebook}
                className="w-[1.25rem] h-[1.25rem]"
                alt="facebookIcon"
              />
              <span>Login with Facebook</span>
            </button>
          </div>

          <div className="w-full h-auto flex-row flex justify-center items-start">
            <p className=" text-[#B6B1B1] font-normal leading-[1.25rem] text-[0.875rem] ">
              Don’t have an account?
              <Link
                to={"/signup"}
                className="text-primaryColors-primary_1 pl-[0.25rem] hover:underline cursor-pointer "
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

const RightLogin = () => (
  <div className="w-1/2 z-0 h-full ">
    <div
      className="w-full bg-no-repeat bg-cover flex flex-row justify-end items-start py-[2rem] px-[2rem]  bg-right bg-[url('/assets/loginImage.svg')] h-full"
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
const Login = () => {
  return (
    <div className="w-full h-full overflow-hidden  bg-[url('/assets/loginImage.svg')] bg-cover  bg-no-repeat justify-between items-start flex flex-row">
      <LoginForm />
      <RightLogin />
    </div>
  );
};

export default Login;
