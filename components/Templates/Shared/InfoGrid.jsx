const InfoGrid = ({ data, className, dark }) => {
  return (
    <div className={`px-6 pt-8 sm:px-8 md:px-20 xl:px-32 ${className || ''}`}>
      <div className="mx-auto max-w-7xl ">
        <div className="grid-cols-2 grid-rows-2 gap-8 gap-x-16 space-y-4 md:grid md:space-y-0">
          {data.map(({ title, subtitle }, i) => (
            <div key={i} className={`border-b py-8 ${dark ? 'border-white' : 'border-black'}`}>
              <div className="">
                <div className="font-semibold">{`0${i + 1}`}</div>
                <h2 className="mt-8 text-3xl font-medium">{title}</h2>
                <p className="mt-4">{subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfoGrid;
