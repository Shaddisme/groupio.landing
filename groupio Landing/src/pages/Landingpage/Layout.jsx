/* eslint-disable react/prop-types */
const Layout = ({ children, className, ...rest }) => {
  return (
    <div {...rest} className={` ${className} || h-auto w-full  px-[6.25rem]`}>
      {children}
    </div>
  );
};

export default Layout;
