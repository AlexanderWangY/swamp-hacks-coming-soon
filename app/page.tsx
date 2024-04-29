'use client';
import swampHacksLogo from '@/public/logos/swamphacks_code_logo.svg';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useAnimate, motion } from 'framer-motion';

export default function Home() {
  const [scope, animate] = useAnimate();
  const [text, setText] = useState('celebrates 10 years of excellence');

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

    animate('#text-1', { opacity: 1 }, { duration: 1, ease: 'easeOut' });
    animate('#x', { opacity: 1 }, { duration: 1, ease: 'easeOut' });
  };

  useEffect(() => {
    animateFrames();
  }, []);

  return (
    <div
      ref={scope}
      className='relative flex h-screen w-screen flex-row items-center justify-evenly overflow-hidden'
    >
      <h1 id='frame1' className='absolute text-3xl text-white opacity-0'>
        University of Florida&apos;s premiere hackathon
      </h1>
      <h1 id='frame2' className='absolute text-3xl text-white opacity-0'>
        {text}
      </h1>

      <div
        id='text-1'
        className='flex flex-col items-end p-10 text-white opacity-0'
      >
        <h1 className='text-8xl font-bold'>Swamphacks</h1>
        <p className='text-2xl font-thin'>Coming soon</p>
      </div>

      <div id='x' className='text-white opacity-0'>
        <h1 className='text-17xl font-extrabold drop-shadow-[0_5px_30px_rgba(255,255,255,0.10)]'>
          X
        </h1>
      </div>
    </div>
  );
}
