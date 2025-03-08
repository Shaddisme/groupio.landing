import { useState } from "react";
import Button from "../../components/Button";
// import Layout from "./Layout";
import { NavLink } from "react-router";
import { Menu } from "lucide-react";
import { X } from "lucide-react";

const navbarData = [
  {
    title: "Features",
    href: "#features", //
    cname: "",
  },
  {
    title: "Testimonials",
    href: "#testimonial",
    cname: "",
  },
  {
    title: "Contact Us",
    href: "contact",
    cname: "",
  },
];

export default function MobileHeader() {
  const [toggle, setToggle] = useState(false);

  const showNav = () => {
    setToggle(!toggle);
  };

  return (
    <nav className="lg:hidden fixed top-0 z-20 w-full px-[1.88rem] py-4 bg-white/20 shadow-[inset_0_1px_0.5px_rgba(255,255,255,0.2)] backdrop-blur-lg">
      <div className="flex items-center justify-between">
        <img src="/assets/logo.svg" className="h-8" alt="logo" />

        <button onClick={showNav} className="text-primary-40">
          {toggle ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Collapsible Menu */}
      <div className={`${toggle ? "block" : "hidden"} mt-4`}>
        <ul className="flex flex-col items-center gap-6">
          {navbarData.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                // spy={true}
                // smooth={true}
                offset={-70} // Adjust this based on your header height
                // duration={500}
                className="text-primary-40 text-lg cursor-pointer hover:opacity-90"
                onClick={showNav} // Close menu when clicking a link
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex justify-center gap-4">
          <NavLink to="signup">
            <Button className="px-6 py-2">Sign Up</Button>
          </NavLink>
          <NavLink to="/login">
            <button className="px-6 py-2 bg-white text-[#0A2923] rounded-full font-bold">
              Login
            </button>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
