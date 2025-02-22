import { useState } from "react";
import Button from "../../components/Button";
import Layout from "./Layout";
import { NavLink } from "react-router";

function Header() {
  const [activeSection, setActiveSection] = useState("home");

  const handleClick = (section, event) => {
    event.preventDefault();
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Layout className=" bg-white shadow-sm fixed z-10 py-[1rem]">
      <div className=" w-full h-auto flex flex-row justify-between items-center">
        <div className="w-[20%] h-auto">
          <a
            href="#home"
            onClick={(e) => handleClick("home", e)}
            // className="py-[1rem] px-[1.5rem] hover:text-primaryColors-primary_2_Dark/70 cursor-pointer"
            className={activeSection === "home" ? "active" : ""}
          >
            <img src="/assets/logo.svg" className="cursor-pointer" alt="logo" />
          </a>
        </div>

        <div className="w-[80%] h-auto bord flex flex-row gap-[1rem] justify-end items-center">
          <ul className="flex justify-start items-center flex-row gap-[1rem] text-[1.125rem] font-bold leading-[1.5625rem] text-primaryColors-primary_2_Dark">
            <a
              href="#features"
              onClick={(e) => handleClick("features", e)}
              // className="py-[1rem] px-[1.5rem] hover:text-primaryColors-primary_2_Dark/70 cursor-pointer"
              className={activeSection === "features" ? "active" : ""}
            >
              Features
            </a>
            <a
              href="#testimonial"
              onClick={(e) => handleClick("testimonial", e)}
              className={activeSection === "testimonial" ? "active" : ""}
              // className="py-[1rem] px-[1.5rem] hover:text-primaryColors-primary_2_Dark/70 cursor-pointer"
            >
              Testimonials
            </a>

            <NavLink
              to={"contact"}
              className="py-[1rem] px-[1.5rem] hover:text-primaryColors-primary_2_Dark/70 cursor-pointer"
            >
              Contact Us
            </NavLink>
            <NavLink
              to={"login"}
              className="py-[1rem] signup px-[1.5rem] hover:text-primaryColors-primary_2_Dark/70 cursor-pointer"
            >
              <Button className="bg-primaryColors-primary_1_light/60 hover:bg-primaryColors-primary_2_Dark/90 hover:no-underline">
                Sign in
              </Button>
            </NavLink>
            <Button className="hover:bg-primaryColors-primary_1 cursor-pointer">
              Get The App
            </Button>
          </ul>
        </div>
      </div>
    </Layout>
  );
}

export default Header;
