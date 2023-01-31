const ArrowLeft2 = ({ className, black, animated }) => {
  return (
    <svg
    className={`${className} ${
      animated
        ? 'transition-all duration-300 group-hover:-translate-x-0.5'
        : ''
    }`}
      width="16"
      height="12"
      viewBox="0 0 16 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        className={black ? 'fill-black' : ''}
        d="M3.83 5L7.41 1.41L6 0L0 6L6 12L7.41 10.59L3.83 7H16V5H3.83Z"
        fill="#F5F5F5"
      />
    </svg>
  );
};

export default ArrowLeft2;
