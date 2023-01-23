const Button = ({ children, className, Icon, big, black }) => {
  return (
    <button
      className={`flex w-fit items-center rounded-full py-3 px-6 font-poppins font-medium ${
        black ? 'bg-black text-white' : 'bg-white text-black'
      } ${big ? 'md:text-lg' : ''} ${className}`}>
      <span>{children}</span>
      {Icon && <span className="ml-2">{Icon}</span>}
    </button>
  );
};

export default Button;
