/* eslint-disable react/prop-types */

const Button = ({ children, className }) => {
  return (
    <div
      className={`${className} bg-primaryColors-primary_1 rounded-[6.25rem] text-center text-white || py-[1rem] px-[1.5rem] text-[1.125rem] hover:opacity-80 cursor-pointer font-bold leading-[1.5625rem]`}
    >
      {children}
    </div>
  );
};

export default Button;
