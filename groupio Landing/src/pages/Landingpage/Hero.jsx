const Hero = () => {
  return (
    <section
      id="home"
      className=" w-full  px-[6.25rem]  py-[4rem] flex flex-row items-center justify-between"
    >
      <div className="w-[50%] h-auto text-left flex-col flex gap-[2.53rem] ">
        <h1 className=" w-full h-auto text-[3.4375rem] text-primaryColors-primary_2_Dark font-bold leading-[3.4375rem]">
          Plan your trip with{" "}
          <span className="text-primaryColors-primary_1">Groupio</span>
        </h1>

        <div className="w-full  text-[#5F5E5E] h-auto flex-col flex justify-start items-start text-[1.125rem] gap-[1rem] font-normal leading-[1.5rem]">
          <p className=" font-normal">
            Experience the joy of effortless group travel with Groupio.
          </p>
          <p className="font-bold ">
            Get your group trip out of the group chat and start your next
            adventure today!
          </p>
        </div>

        <div className=" flex-row  flex justify-start items-center gap-[2rem] ">
          <input
            type="email"
            placeholder="Enter your email"
            className="border border-primaryColors-primary_1_light bg-white text-[#5F5E5E] rounded-[0.375rem] p-[1rem] items-center shrink-0 gap-[0.625rem]  h-[3.75rem] md:w-[320px] lg:w-[350px]"
          />
          <button className="bg-primaryColors-primary_1 text-white px-[3rem]  rounded-[6.25rem]  h-[3.75rem] w-[11.8125rem]  hover:bg-primaryColors-primary_2">
            Submit
          </button>
        </div>
      </div>

      <div className="w-[50%] h-auto  justify-end  flex flex-row ">
        <img
          src="assets/heroimage.svg"
          alt="Travel"
          className="w-[32.125rem] h-[29.8125rem] "
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
