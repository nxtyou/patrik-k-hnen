const ArrowRight2 = ({ className, black, animated }) => {
  return (
    <svg
      className={`${className} ${
        animated
          ? 'transition-all duration-300 group-hover:translate-x-0.5'
          : ''
      }`}
      width="17"
      height="13"
      viewBox="0 0 17 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        className={black ? 'fill-black' : ''}
        d="M12.3263 5.1875L8.74625 1.5975L10.1562 0.1875L16.1562 6.1875L10.1562 12.1875L8.74625 10.7775L12.3263 7.1875H0.15625V5.1875H12.3263Z"
        fill="#F5F5F5"
      />
    </svg>
  );
};

export default ArrowRight2;
