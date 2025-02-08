import Button from "../../components/Button";

function Header() {
  return (
    <div className="px-[6.25rem] py-[1rem] w-full h-auto flex flex-row justify-between items-center">
      <div className="w-[20%] h-auto">
        <img src="/assets/logo.svg" className="cursor-pointer" alt="logo" />
      </div>

      <div className="w-[80%] h-auto flex flex-row gap-[1rem] justify-end items-center">
        <ul className="flex justify-start items-center flex-row gap-[1rem] text-[1.125rem] font-bold leading-[1.5625rem] text-primaryColors-primary_2_Dark">
          <li className="py-[1rem] px-[1.5rem] hover:text-primaryColors-primary_2_Dark/70 cursor-pointer">
            How It Works
          </li>
          <li className="py-[1rem] px-[1.5rem] hover:text-primaryColors-primary_2_Dark/70 cursor-pointer">
            Testimonials
          </li>
          <li className="py-[1rem] px-[1.5rem] hover:text-primaryColors-primary_2_Dark/70 cursor-pointer">
            Contact Us
          </li>
          <li className="py-[1rem] px-[1.5rem] hover:text-primaryColors-primary_2_Dark/70 cursor-pointer">
            <Button className="bg-primaryColors-primary_1">Sign in</Button>
          </li>
        </ul>
        <Button className="hover:bg-primaryColors-primary_1 cursor-pointer">
          Get The App
        </Button>
      </div>
    </div>
  );
}

export default Header;
