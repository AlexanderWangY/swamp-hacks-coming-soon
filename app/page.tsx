'use client';
import swampHacksLogo from '@/public/logos/swamphacks_code_logo.svg';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useAnimate, motion, easeInOut } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Home() {
  const [scope, animate] = useAnimate();
  const [loading, setLoading] = useState(true);

  const testMode = true;

  const animateFrames = async () => {
    await animate(
      '#frame1',
      { opacity: 1 },
      { duration: 1, delay: 0.5, ease: 'easeOut' }
    );
    await animate(
      '#frame1',
      { opacity: 0 },
      { duration: 1, delay: 1, ease: 'easeOut' }
    );
    await animate('#frame2', { opacity: 1 }, { duration: 1, ease: 'easeOut' });
    await animate(
      '#frame2',
      { opacity: 0 },
      { duration: 1, delay: 1, ease: 'easeOut' }
    );
    await animate('#frame3', { opacity: 1 }, { duration: 1, ease: 'easeOut' });
    await animate(
      '#frame3',
      { opacity: 0 },
      { duration: 1, delay: 1, ease: 'easeOut' }
    );
    await animate('#frame4', { opacity: 1 }, { duration: 1, ease: 'easeOut' });
    await animate(
      '#frame4',
      { opacity: 0 },
      { duration: 1, delay: 1, ease: 'easeOut' }
    );

    setLoading(false);
  };

  const animateTitle = async () => {
    animate(
      '#swamp',
      { opacity: 1 },
      { duration: 0.6, delay: 0.5, ease: 'easeOut' }
    );
    animate(
      '#hacks',
      { opacity: 1 },
      { duration: 0.6, delay: 0.65, ease: 'easeOut' }
    );
    animate(
      '#X',
      { opacity: 1 },
      { duration: 0.6, delay: 0.8, ease: 'easeOut' }
    );
  };

  useEffect(() => {
    if (!testMode) {
      animateFrames();
    } else {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!loading) {
      animateTitle();
    }
  }, [loading]);

  return (
    <div
      ref={scope}
      className='flex h-screen w-screen flex-col overflow-hidden'
    >
      {loading ? (
        <div className='relative flex h-full w-full flex-col items-center justify-center'>
          <h1
            id='frame1'
            className='absolute justify-self-center text-3xl text-gray-200 opacity-0'
          >
            University of Florida&apos;s premiere hackathon
          </h1>
          <h1
            id='frame2'
            className='absolute justify-self-center text-3xl text-gray-200 opacity-0'
          >
            celebrates a decade of innovation
          </h1>
          <h1
            id='frame3'
            className='absolute justify-self-center text-3xl text-gray-200 opacity-0'
          >
            a decade of creativity.
          </h1>
          <h1
            id='frame4'
            className='absolute justify-self-center text-3xl text-gray-200 opacity-0'
          >
            Now, join us for...
          </h1>
        </div>
      ) : (
        <div className='w-full flex-grow flex-col'>
          <div className='w-full flex-col p-8 text-6xl tracking-tight text-gray-200 sm:inline-flex sm:flex-row sm:p-5 sm:text-8xl md:p-8 md:text-9xl lg:text-10xl xl:text-12xl'>
            <h1 id='swamp' className='font-thin opacity-0'>
              Swamp
            </h1>
            <h1
              id='hacks'
              className='flex justify-end font-normal opacity-0 sm:justify-start'
            >
              Hacks
            </h1>
          </div>

          <div className='w-fit border border-red-500'>
            <Spline scene='https://prod.spline.design/RaEzwJkh6dXtwZL9/scene.splinecode' />
          </div>

          {/* <div id='X' className='flex justify-end pr-60 opacity-0'>
            <h1 id='X-text' className='text-gray-200 font-medium text-22xl select-none bg-clip-text text-transparent bg-gradient-to-r from-green-700 from-25% via-blue-700 via-50% to-red-700 to-80%'>X</h1>
          </div> */}
        </div>
      )}
    </div>
  );
}
