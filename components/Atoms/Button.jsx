const Button = ({ children, className, Icon, big }) => {
  return (
    <button
      className={`flex w-fit items-center rounded-full bg-white py-3 px-6 font-poppins font-medium text-black ${big ? 'md:text-lg' : ''} ${className}`}>
      <span>{children}</span>
      {Icon && <span className="ml-2">{Icon}</span>}
    </button>
  );
};

export default Button;
