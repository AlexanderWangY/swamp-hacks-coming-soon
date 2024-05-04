'use client';

export default function Home() {
  return (
    <div className='flex h-screen w-screen flex-row overflow-hidden'>
      <div className='flex w-1/2 flex-col items-center justify-center border'>
        <div className='mb-10 flex h-fit w-4/5 flex-col border'>
          <div>
            <h1 className='text-11xl font-medium text-white'>SWAMP</h1>
            <h1 className='mt-[-5.5%] text-11xl font-medium tracking-tighter text-zinc-400'>
              HACKS
            </h1>
          </div>
        </div>

        <div className='w-4/5'>
          <button className='rounded-xl bg-white pb-4 pl-10 pr-10 pt-4 text-xl text-black transition-all hover:rounded-sm'>
            Sponsor Us
          </button>
        </div>
      </div>
    </div>
  );
}
