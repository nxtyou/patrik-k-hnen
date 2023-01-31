import PlayIcon from './Icons/PlayIcon';

const PlayButton = ({ big, 'aria-label': ariaLabel }) => {
  return (
    <button
      aria-label={ariaLabel}
      className={`absolute top-1/2 left-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 md:h-16 md:w-16 ${
        big ? 'lg:h-24 lg:w-24' : ''
      }`}>
      <PlayIcon className={`ml-1 w-3 ${big ? 'lg:w-auto' : 'lg:w-4'}`} />
    </button>
  );
};

export default PlayButton;
