const Button = ({ children, className, rightIcon, leftIcon, big, black, 'aria-label': ariaLabel }) => {
  return (
    <button
      className={`flex w-fit items-center rounded-full py-4 px-7 font-poppins font-medium transition-all ${
        black ? 'bg-black text-white hover:text-iron' : 'bg-white text-black hover:bg-iron'
      } ${big ? 'md:text-lg' : ''} ${className || ''}`}>
      {leftIcon && <span className="mr-3">{leftIcon}</span>}
      <span className="leading-none">{children}</span>
      {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
  );
};

export default Button;
