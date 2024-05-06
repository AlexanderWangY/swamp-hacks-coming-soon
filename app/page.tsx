'use client';
import Spline from '@splinetool/react-spline';

export default function Home() {
  return (
    <div className='relative flex h-screen w-screen flex-col items-center justify-center overflow-hidden'>
      <h1 className='x-size absolute z-[-1] select-none font-bold'>X</h1>
      <div className='mt-5 flex h-fit w-fit flex-col items-center justify-center'>
        <div className='border-padding flex items-center justify-center rounded-full bg-gradient-to-r from-green-500 from-20% via-purple-600 via-80% to-pink-500'>
          <p className='h-full w-full rounded-full bg-black px-4 py-2 text-lg text-white'>
            10th Anniversary
          </p>
        </div>
        <div className='mb-5 flex select-none flex-col items-center justify-center text-11xl text-white'>
          <h1 className='mb-[-5%] font-semibold'>SWAMP</h1>
          <h1 className='font-medium text-zinc-400'>HACKS</h1>
        </div>
        <p className='mb-10 text-xl text-zinc-300'>
          Florida&apos;s Largest Hackathon{' '}
          <span className='tracking-tighter text-zinc-500'>&lt;/&gt;</span>{' '}
          Gainesville, FL{' '}
          <span className='tracking-tighter text-zinc-500'>&lt;/&gt;</span>{' '}
          Coming Spring 2025
        </p>

        <div className='flex w-2/3 flex-row justify-evenly'>
          <button className='w-44 rounded-md bg-white px-5 py-3 text-xl text-black'>
            Sponsor Us
          </button>
          <button className='w-44 rounded-md border border-zinc-800 px-5 py-3 text-xl text-white'>
            Discord
          </button>
        </div>
      </div>
    </div>
  );
}
