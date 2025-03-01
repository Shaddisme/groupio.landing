const Hero = () => {
  return (
    <section
      id="home"
      className=" w-full  lg:px-[6.25rem] px-[0.69rem] py-[1.5rem]   lg:text-left justify-start items-center flex-col lg:py-[4rem] gap-[2.5rem] flex lg:flex-row lg:items-start lg:justify-between"
    >
      <div className="lg:w-[50%] w-full h-auto justify-start items-center lg:items-start  flex-col flex gap-[2.44rem] lg:gap-[2.53rem] ">
        <p className=" w-full    heroText  h-auto text-[2.375rem] lg:text-[3.4375rem] text-primaryColors-primary_2_Dark  font-bold leading-[3.4375rem]">
          Plan your group trip with
          <span className="text-[#1E7B68]"> Groupio</span>
        </p>

        <div className="w-full   text-[#5F5E5E] h-auto flex-col flex justify-start items-start   gap-[1rem] font-normal leading-[1.5rem]">
          <p className=" hidden  w-full  text-[1.125rem] lg:block font-normal">
            Experience the joy of effortless group travel with Groupio.
          </p>
          <p className="font-semibold smallText  w-full text-[1.125rem] leading-[2rem] ">
            Get your group trip out of the group chat and start your next
            adventure today!
          </p>
        </div>

        <div className=" lg:flex-row w-full flex-col  flex justify-start items-center  gap-[1rem] ">
          <input
            type="email"
            placeholder="Enter your email to join waitlist"
            className="border-2 hidden lg:block border-primaryColors-primary_1_light outline-none bg-white  text-[#5F5E5E] rounded-[1.375rem] p-[1rem] text-[1rem] items-center shrink-0 gap-[0.625rem]  w-full lg:h-[3.75rem] h-auto lg:w-[60%] "
          />
          <button className="bg-primaryColors-primary_1 hidden lg:block text-white text-[1.5rem] font-bold px-[3rem] w-full  lg:w-[30%] rounded-[1.375rem] lg:rounded-[6.25rem]  h-[3.75rem] hover:bg-primaryColors-primary_2">
            Submit
          </button>
          <button className="bg-primaryColors-primary_1 text-white text-[1.5rem] lg:hidden block  text-nowrap font-bold  px-[3rem]  w-[13.8125rem] rounded-[6.25rem] lg:rounded-[6.25rem]  h-[3.75rem] hover:bg-primaryColors-primary_2">
            Get started
          </button>
        </div>
      </div>

      <div className="lg:w-[50%] w-full h-auto  lg:justify-end  justify-center flex flex-row ">
        <img
          src="assets/heroimage.svg"
          alt="Travel"
          className="lg:w-[32.125rem] w-[17.125rem] h-[17.06069rem] lg:h-[29.8125rem] "
        />
      </div>
    </section>
  );
};

export default Hero;

// import { useFormik } from 'formik';

//  const SignupForm = () => {
//    // Pass the useFormik() hook initial form values and a submit function that will
//    // be called when the form is submitted
//    const formik = useFormik({
//      initialValues: {
//        email: '',
//      },
//      onSubmit: values => {
//        alert(JSON.stringify(values, null, 2));
//      },
//    });
//    return (
//      <form onSubmit={formik.handleSubmit}>
//        <label htmlFor="email">Email Address</label>
//        <input
//          id="email"
//          name="email"
//          type="email"
//          onChange={formik.handleChange}
//          value={formik.values.email}
//        />

//        <button type="submit">Submit</button>
//      </form>
//    );
//  };
