import Button from "../../components/Button";

function Header() {
  return (
    <div className="px-[6.25rem] py-[1rem] w-full h-auto flex flex-row justify-between items-center">
      <div className="w-[20%] h-auto">
        <img src="/assets/logo.svg" className="cursor-pointer" alt="logo" />
      </div>

      <div className="w-[80%] h-auto bord flex flex-row gap-[1rem] justify-end items-center">
        <ul className="flex justify-start items-center flex-row gap-[1rem] text-[1.125rem] font-bold leading-[1.5625rem] text-primaryColors-primary_2_Dark">
          <a className="py-[1rem] px-[1.5rem] hover:text-primaryColors-primary_2_Dark/70 cursor-pointer">
            How It Works
          </a>
          <a className="py-[1rem] px-[1.5rem] hover:text-primaryColors-primary_2_Dark/70 cursor-pointer">
            Testimonials
          </a>
          <a className="py-[1rem] px-[1.5rem] hover:text-primaryColors-primary_2_Dark/70 cursor-pointer">
            Contact Us
          </a>
          <a className="py-[1rem] px-[1.5rem] hover:text-primaryColors-primary_2_Dark/70 cursor-pointer">
            <Button className="bg-primaryColors-primary_1 hover:bg-primaryColors-primary_2_Dark">
              Sign in
            </Button>
          </a>
          <Button className="hover:bg-primaryColors-primary_1 cursor-pointer">
            Get The App
          </Button>
        </ul>
      </div>
    </div>
  );
}

export default Header;
