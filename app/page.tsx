'use client';
import swampHacksLogo from '@/public/logos/swamphacks_code_logo.svg';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useAnimate, motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Home() {
  const [scope, animate] = useAnimate();
  const [loading, setLoading] = useState(true);

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
  };

  useEffect(() => {
    animateFrames().then(() => setLoading(false));
  }, []);

  return (
    <div
      ref={scope}
      className='flex h-screen w-screen flex-col overflow-hidden'
    >
      {loading ? (
        <div className='relative flex h-full w-full flex-col items-center justify-center border border-red-500'>
          <h1
            id='frame1'
            className='absolute justify-self-center text-3xl opacity-0'
          >
            University of Florida&apos;s premiere hackathon
          </h1>
          <h1
            id='frame2'
            className='absolute justify-self-center text-3xl opacity-0'
          >
            celebrates 10 years of excellence
          </h1>
        </div>
      ) : (
        <>
          <div className='w-full flex-col border border-black p-8 text-6xl tracking-tight text-black sm:inline-flex sm:flex-row sm:p-5 sm:text-8xl md:p-8 md:text-9xl lg:text-10xl xl:text-12xl'>
            <h1 className='font-thin'>Swamp</h1>
            <h1 className='flex justify-end font-normal sm:justify-start'>
              Hacks
            </h1>
          </div>
          <div className='flex w-full grow flex-row border border-red-500'></div>
        </>
      )}
    </div>
  );
}
