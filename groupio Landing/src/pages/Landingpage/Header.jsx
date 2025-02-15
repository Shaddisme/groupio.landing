import { useState } from "react";
import Button from "../../components/Button";
import Layout from "./Layout";

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
    <Layout className=" bg-white shadow-sm fixed py-[1rem]">
      <div className=" w-full h-auto flex flex-row justify-between items-center">
        <div className="w-[20%] h-auto">
          <img src="/assets/logo.svg" className="cursor-pointer" alt="logo" />
        </div>

        <div className="w-[80%] h-auto bord flex flex-row gap-[1rem] justify-end items-center">
          <ul className="flex justify-start items-center flex-row gap-[1rem] text-[1.125rem] font-bold leading-[1.5625rem] text-primaryColors-primary_2_Dark">
            <a
              href="#home"
              onClick={(e) => handleClick("home", e)}
              // className="py-[1rem] px-[1.5rem] hover:text-primaryColors-primary_2_Dark/70 cursor-pointer"
              className={activeSection === "home" ? "active" : ""}
            >
              How It Works
            </a>
            <a
              href="#decison"
              onClick={(e) => handleClick("decison", e)}
              className={activeSection === "decison" ? "active" : ""}
              // className="py-[1rem] px-[1.5rem] hover:text-primaryColors-primary_2_Dark/70 cursor-pointer"
            >
              Testimonials
            </a>
            
            <a className="py-[1rem] px-[1.5rem] hover:text-primaryColors-primary_2_Dark/70 cursor-pointer">
              Contact Us
            </a>
            <a className="py-[1rem] px-[1.5rem] hover:text-primaryColors-primary_2_Dark/70 cursor-pointer">
              <Button className="bg-primaryColors-primary_2_Dark hover:bg-primaryColors-primary_2_Dark">
                Sign in
              </Button>
            </a>
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
