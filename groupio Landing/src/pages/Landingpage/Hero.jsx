const Hero = () => {
  return (
    <section className="max-w-[1400px] w-full mx-auto px-[6.25rem] py-[4rem] flex flex-col md:flex-row items-center justify-between">
      <div className="w-[50%] text-left space-y-4">
        <h1 className="text-5xl font-bold leading-tight">
          Plan your trip with{" "}
          <span className="text-primaryColors-primary_1">Groupio</span>
        </h1>
        <p className="text-lg text-gray-600">
          Experience the joy of effortless group travel with Groupio.
        </p>
        <p className="font-bold">
          Get your group trip out of the group chat and start your next
          adventure today!
        </p>

        <div className="flex gap-4 mt-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="border px-4 py-2 rounded-lg w-[280px] md:w-[320px] lg:w-[350px]"
          />
          <button className="bg-primaryColors-primary_1 text-white px-6 py-2 rounded-lg hover:bg-primaryColors-primary_2">
            Submit
          </button>
        </div>
      </div>

      <div className="w-[50%] flex justify-center">
        <img
          src="/src/components/assets/Hero.svg"
          alt="Travel"
          className="w-full max-w-lg md:max-w-md"
        />
      </div>
    </section>
  );
};

export default Hero;
