import Communication from "./Communication";
import Decision from "./Decision";
import Expenses from "./Expenses";
import Features from "./Features";
import Footer from "./Footer";

import Hero from "./Hero";
import Itinerary from "./Itinerary";
import Header from "./Header";
import MobileHeader from "./MobileHeader";
import NewsLetter from "./NewsLetter";
import Testmonial from "./Testimonial";

const LandingPage = () => {
  return (
    <div className="w-full h-auto lg:bg-white bg-[#F2FEFB] ">
      <MobileHeader />
      <Header />
      <div className="lg:pt-[6rem] pt-[5rem] w-full">
        <Hero />
        <Features />
        <Itinerary />
        <Expenses />
        <Communication />
        <Decision />
        <Testmonial />
        <NewsLetter />
        <Footer />
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
