const Button = ({ children, className, Icon }) => {
  return (
    <button
      className={`flex w-fit items-center rounded-full bg-white py-3 px-6 font-poppins md:text-lg font-medium text-black ${className}`}>
      <span>{children}</span>
      {Icon && <span className="ml-2">{Icon}</span>}
    </button>
  );
};

export default Button;
