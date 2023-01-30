const ArrowDown = ({ className }) => {
  return (
    <svg
      className={`h-auto ${className || ''}`}
      width="16"
      height="22"
      viewBox="0 0 16 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6.667 16.56L1.88 11.787L0 13.667L8 21.667L16 13.667L14.12 11.787L9.333 16.56V0.333008H6.667V16.56Z"
        fill="#F5F5F5"
      />
    </svg>
  );
};

export default ArrowDown;
