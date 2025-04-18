/* eslint-disable react/prop-types */
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import PreviousIcon from "/assets/previousIcon.svg";
import NextIcon from "/assets/NextIcon.svg";
import photo2 from "/assets/image2.png";
import photo3 from "/assets/image3.png";
import photo from "/assets/photo.png";
import star from "/assets/StarIcon.svg";
import Layout from "./Layout";

// Rest of your components (StarRating, TestimonialCard, SampleNextArrow, SamplePrevArrow) remain the same
const StarRating = () => {
  return (
    <div className="flex flex-row gap-[0.31rem]">
      {[...Array(5)].map((_, index) => (
        <img
          src={star}
          className="w-[1.5rem] h-[1.44281rem]"
          key={index}
          alt="star"
        />
      ))}
    </div>
  );
};

const TestimonialCard = ({ name, jobTitle, body, image }) => (
  <div className="w-[100%] rounded-[1.25rem] lg:px-[4rem] px-[1rem] flex lg:flex-row flex-col justify-start  gap-[1rem] lg:gap-[3.28rem] lg:items-center bg-[#4ABF9A] h-[35rem] lg:h-[25.9375rem] lg:py-[4rem] py-[2rem] bg-[url('/assets/bigComma.png')] bg-right-bottom bg-no-repeat">
    <div className="lg:w-[30%]  flex w-full lg:pt-[0.4rem] flex-col justify-start items-center h-auto">
      <img
        src={image}
        alt="photo"
        className="lg:pb-[1.44rem] lg:w-[19.625rem] lg:h-[17.5625rem]  h-[3.5rem] w-[3.5rem] lg:rounded-none rounded-[6.25rem] "
      />
      <div className="text-center text-[#0A2923] flex items-center justify-start lg:justify-center gap-[0.50rem] flex-col">
        <h1 className="text-[1.35rem] font-bold leading-[1.875rem]">{name}</h1>
        <p>{jobTitle}</p>
        <StarRating />
      </div>
    </div>
    <div className="lg:w-[70%] w-full text-center text-primaryColors-primary_2_Dark/80 text-[1.2rem] lg:text-[1.775rem] font-normal leading-[2.1rem] lg:leading-[2.5rem] h-auto lg:h-full">
      <p>{body}</p>
    </div>
  </div>
);

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "none",
        width: "40px",
        height: "40px",
        right: "-50px",
      }}
      onClick={onClick}
    >
      <img
        src={NextIcon}
        style={{ width: "3.125rem", height: "5.625rem" }}
        alt="nextIcon"
      />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "none",
        width: "40px",
        height: "40px",
        left: "-50px",
      }}
      onClick={onClick}
    >
      <img
        src={PreviousIcon}
        alt="prev"
        style={{ width: "3.125rem", height: "5.625rem" }}
      />
    </div>
  );
}

function Testimonial() {
  // Define background colors for each slide
  const bgColors = [
    "bg-primaryColors-primary_1_light",
    "bg-primaryColors-primary_1_light/80",
    "bg-primaryColors-primary_1_light/60",
  ];

  // State to track current slide
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 1800,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    // Add callbacks to track slide changes
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
  };

  return (
    <Layout
      id="testimonial"
      // Dynamically apply the background class based on current slide
      className={`w-full h-auto flex flex-col overflow-hidden justify-start lg:px-[4rem] items-center py-[3rem] lg:py-[4rem] gap-[2rem] lg:gap-[0.25rem] ${bgColors[currentSlide]} transition-colors duration-600`}
    >
      <h1 className="text-white text-[2.25rem] font-bold leading-[2.8125rem]">
        Testimonials
      </h1>
      <Slider className="w-[100%] h-auto  flex flex-row" {...settings}>
        <div className="w-full h-auto flex flex-col justify-start items-center px-[0.5rem] lg:px-[1.4rem]  ">
          <TestimonialCard
            name={"Jaden Williams"}
            image={photo}
            jobTitle="Freelance writer"
            body={
              "As someone who loves to travel with friends, I can't recommend Groupio enough. The expense tracking feature saved us so much time and stress when splitting costs, and the real-time updates kept us all on the same page throughout the trip. Groupio has become our go-to travel companion."
            }
          />
        </div>
        <div className="w-full h-auto flex flex-col justify-start items-center px-[0.5rem] lg:px-[1.4rem]  ">
          <TestimonialCard
            name={"Alexandria Adeleke"}
            image={photo2}
            jobTitle="Business Administration Student"
            body={
              "Traveling with friends is always an adventure, but Groupio made it an unforgettable experience. With its intuitive features, we were able to coordinate our itinerary and managed our expenses all through our trip. Groupio isn't just an app; it's a game-changer for group travel, and I can't wait for our next adventure."
            }
          />
        </div>
        <div className="w-full h-auto flex flex-col justify-start items-center px-[0.5rem]  lg:px-[1.4rem]  ">
          <TestimonialCard
            name={"Myra Adams"}
            image={photo3}
            jobTitle="Parent & Teacher"
            body={
              "Traveling with my family has always been a memorable experience, but Groupio took it to a whole new level. From organizing our family itinerary to keeping track of expenses incurred, this app made planning our trip so easy. Thanks to Groupio, we were able to focus on making precious memories together without any stress."
            }
          />
        </div>
      </Slider>
    </Layout>
  );
}

export default Testimonial;
