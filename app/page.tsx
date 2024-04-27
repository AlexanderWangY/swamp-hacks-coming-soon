'use client';
import swampHacksLogo from '@/public/logos/swamphacks_code_logo.svg';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion, animate, useAnimate } from 'framer-motion';

export default function Home() {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animateRed();
    animateBlue();
    animateGreen();
  }, []);

  const animateRed = async () => {
    while (true) {
      await animate(
        '#red',
        {
          x: '0rem',
        },
        {
          duration: 2,
        }
      );
      await animate(
        '#red',
        {
          x: '6rem',
        },
        {
          duration: 2,
        }
      );
    }
  };

  const animateBlue = async () => {
    while (true) {
      await animate(
        '#blue',
        {
          x: '6rem',
        },
        {
          duration: 2,
        }
      );
      await animate(
        '#blue',
        {
          x: '0rem',
        },
        {
          duration: 2,
        }
      );
    }
  };

  const animateGreen = async () => {
    while (true) {
      await animate(
        '#green',
        {
          x: '6rem',
        },
        {
          duration: 2,
        }
      );
      await animate(
        '#green',
        {
          x: '0rem',
        },
        {
          duration: 2,
        }
      );
    }
  };

  return (
    <div className='flex h-screen w-screen flex-row items-center justify-evenly'>
      <div className='flex h-full flex-col justify-center'>
        <h1 className='text-8xl font-bold text-gray-200'>Swamphacks</h1>
        <p className='self-end text-2xl text-gray-400'>Coming Spring 2025...</p>
      </div>
      <div ref={scope} className='flex h-full flex-col justify-center'>
        <div id='green' className='h-24 w-24 bg-green-400'></div>
        <div id='red' className='h-24 w-24 translate-x-24 bg-red-400'></div>
        <div id='blue' className='h-24 w-24 bg-blue-400'></div>
      </div>
    </div>
  );
}
