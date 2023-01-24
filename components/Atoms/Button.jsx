const Button = ({ children, className, rightIcon, leftIcon, big, black }) => {
  return (
    <button
      className={`flex w-fit items-center rounded-full py-4 px-7 font-poppins font-medium ${
        black ? 'bg-black text-white' : 'bg-white text-black'
      } ${big ? 'md:text-lg' : ''} ${className}`}>
      {leftIcon && <span className="mr-3">{leftIcon}</span>}
      <span className="leading-none">{children}</span>
      {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
  );
};

export default Button;
