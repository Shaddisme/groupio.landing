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
import Testimonial from "./Testimonial";
import { motion } from "framer-motion";

// const LandingPage = () => {
//   const sectionVariants = {
//     offscreen: { opacity: 0, y: 50 },
//     onscreen: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         type: "spring",
//         bounce: 0.4,
//         duration: 2,
//       },
//     },
//   };

//   return (
//     <div className="w-full h-auto lg:bg-white bg-[#F2FEFB]">
//       <MobileHeader />
//       <Header />
//       <div className="lg:pt-[6rem] pt-[5rem] w-full">
//         <Hero />

//         <motion.div
//           initial="offscreen"
//           whileInView="onscreen"
//           viewport={{ once: true, margin: "-100px" }}
//           variants={sectionVariants}
//         >
//           <Features />
//         </motion.div>

//         <motion.div
//           initial="offscreen"
//           whileInView="onscreen"
//           viewport={{ once: true, margin: "-100px" }}
//           variants={sectionVariants}
//         >
//           <Itinerary />
//         </motion.div>

//         {/* Add similar motion wrappers for other sections */}
//         <motion.div
//           initial="offscreen"
//           whileInView="onscreen"
//           viewport={{ once: true, margin: "-100px" }}
//           variants={sectionVariants}
//         >
//           <Expenses />
//         </motion.div>

//         <motion.div
//           initial="offscreen"
//           whileInView="onscreen"
//           viewport={{ once: true, margin: "-100px" }}
//           variants={sectionVariants}
//         >
//           <Communication />
//         </motion.div>

//         <motion.div
//           initial="offscreen"
//           whileInView="onscreen"
//           viewport={{ once: true, margin: "-100px" }}
//           variants={sectionVariants}
//         >
//           <Decision />
//         </motion.div>

//         <motion.div
//           initial="offscreen"
//           whileInView="onscreen"
//           viewport={{ once: true, margin: "-100px" }}
//           variants={sectionVariants}
//         >
//           <Testimonial />
//         </motion.div>

//         <motion.div
//           initial="offscreen"
//           whileInView="onscreen"
//           viewport={{ once: true, margin: "-100px" }}
//           variants={sectionVariants}
//         >
//           <NewsLetter />
//         </motion.div>

//         <Footer />
//       </div>
//     </div>
//   );
// };

const LandingPage = () => {
  const sectionVariants = {
    offscreen: { opacity: 0, y: 50 },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.5,
        duration: 2,
        delay: 0.1,
      },
    },
  };

  return (
    <div className="w-full h-auto lg:bg-white bg-[#F2FEFB]">
      <MobileHeader />
      <Header />
      <div className="lg:pt-[6rem] pt-[5rem] w-full">
        <Hero />

        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ amount: 0.2, margin: "100px" }} // Adjusted viewport settings
          variants={sectionVariants}
          key="features"
        >
          <Features />
        </motion.div>

        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ amount: 0.2, margin: "100px" }}
          variants={sectionVariants}
          key="itinerary"
        >
          <Itinerary />
        </motion.div>

        {/* Other sections with similar modifications */}
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ amount: 0.2, margin: "100px" }}
          variants={sectionVariants}
          key="expenses"
        >
          <Expenses />
        </motion.div>

        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ amount: 0.2, margin: "100px" }} // Adjusted viewport settings
          variants={sectionVariants}
          key={"communication"}
        >
          <Communication />
        </motion.div>

        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ amount: 0.2, margin: "100px" }} // Adjusted viewport settings
          variants={sectionVariants}
          key={"decision"}
        >
          <Decision />
        </motion.div>

        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ amount: 0.2, margin: "100px" }} // Adjusted viewport settings
          variants={sectionVariants}
          key={"testimonial"}
        >
          <Testimonial />
        </motion.div>

        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ amount: 0.2, margin: "100px" }} // Adjusted viewport settings
          variants={sectionVariants}
          key={"newsletter"}
        >
          <NewsLetter />
        </motion.div>

        <Footer />
      </div>
    </div>
  );
};
export default LandingPage;
