const Title = () => {
  return (
    <div className='relative flex flex-col items-center justify-center'>
      <h1 className='z-2 absolute select-none bg-neutral-900 bg-clip-text text-17xl font-extrabold text-transparent drop-shadow-[0px_0px_3px_rgba(255,255,255,0.5)] sm:text-25xl'>
        X
      </h1>
      <h1 className='z-1 relative select-none text-5xl font-black text-white drop-shadow-[0px_3px_4px_rgba(255,255,255,0.5)] sm:text-6xl md:text-9xl'>
        <span className='animate-gradient-x bg-gradient-to-r from-green-500 from-30% via-blue-600 via-60% to-purple-600 to-80% bg-clip-text text-transparent'>
          SWAMP
        </span>
        HACKS
      </h1>
    </div>
  );
};

export default Title;
