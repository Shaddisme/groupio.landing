import Communication from "./Communication";
import Decision from "./Decision";
import Expenses from "./Expenses";
import Features from "./Features";
import Header from "./Header";
import Hero from "./Hero";
import Itinerary from "./Itinerary";
import NewsLetter from "./NewsLetter";

import Testmonial from "./Testimonial";

const LandingPage = () => {
  return (
    <div className="w-full h-auto overflow-x-hidden ">
      <Header />
      <div className="pt-[6rem] w-full">
        <Hero />
        <Features />
        <Itinerary />
        <Expenses />
        <Communication />
        <Decision />
        <Testmonial />
        <NewsLetter />
      </div>

      {/* features
      iternary
      expanses
      communication
      decision 
      testimonial
      newslater
      footer */}
    </div>
  );
};

export default LandingPage;
