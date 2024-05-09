'use client';
import Image from 'next/image';
import DiscordIcon from '../public/logos/discord.svg';
import { useAnimate } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

export default function Home() {
  const [scope, animate] = useAnimate();
  const isPhone = useMediaQuery({ maxWidth: 767 });

  // Move animated things to different file (TODO)
  const animateIntro = async () => {
    await animate(
      '#first',
      {
        opacity: [0, 1],
      },
      {
        duration: 2,
        ease: 'easeInOut',
      }
    );
    await animate(
      '#first',
      {
        opacity: [1, 0],
      },
      {
        duration: 2,
        ease: 'easeInOut',
      }
    );

    await animate(
      '#second',
      {
        opacity: [0, 1],
      },
      {
        duration: 2,
        ease: 'easeInOut',
      }
    );
    await animate(
      '#second',
      {
        opacity: [1, 0],
      },
      {
        duration: 2,
        ease: 'easeInOut',
      }
    );
  };

  const animatePage = () => {
    animate(
      '#x-text',
      {
        opacity: [0, 1],
      },
      {
        duration: 2,
        ease: 'easeInOut',
        delay: 1.3,
      }
    );

    animate(
      '#modal',
      {
        opacity: [0, 1],
      },
      {
        duration: 2,
        ease: 'easeInOut',
        delay: 0.7,
      }
    );

    animate(
      '#swamp',
      {
        opacity: [0, 1],
      },
      {
        duration: 2,
        ease: 'easeInOut',
      }
    );

    animate(
      '#hacks',
      {
        opacity: [0, 1],
      },
      {
        duration: 2,
        ease: 'easeInOut',
        delay: 0.3,
      }
    );

    animate(
      '#subtext',
      {
        opacity: [0, 1],
      },
      {
        duration: 2,
        ease: 'easeInOut',
      }
    );

    animate(
      '#sponsor-button',
      {
        opacity: [0, 1],
      },
      {
        duration: 2,
        ease: 'easeInOut',
        delay: 0.5,
      }
    );

    animate(
      '#discord-button',
      {
        opacity: [0, 1],
      },
      {
        duration: 2,
        ease: 'easeInOut',
        delay: 0.5,
      }
    );
  };

  const animateAll = async () => {
    await animateIntro();
    animatePage();
  };

  useEffect(() => {
    try {
      const visited = localStorage.getItem('visited');
      console.log(visited);

      if (visited) {
        animatePage();
      } else {
        animateAll();
        localStorage.setItem('visited', 'true');
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  return (
    <div
      ref={scope}
      className='relative flex h-screen w-screen flex-col items-center overflow-hidden sm:justify-center'
    >
      <h1
        id='x-text'
        className='x-size absolute z-[-1] select-none font-bold opacity-0'
      >
        X
      </h1>
      <div className='mt-5 flex h-fit w-fit flex-col items-center justify-center'>
        <div
          id='modal'
          className='border-padding flex items-center justify-center rounded-full bg-gradient-to-r from-green-500 from-20% via-purple-600 via-80% to-pink-500 opacity-0'
        >
          <p className='h-full w-full rounded-full bg-black px-4 py-2 text-sm text-white sm:text-lg'>
            10th Anniversary
          </p>
        </div>
        <div className='sm: mb-5 flex select-none flex-col items-center justify-center text-white md:text-8xl lg:text-11xl'>
          <h1 id='swamp' className='mb-[-5%] font-semibold opacity-0'>
            SWAMP
          </h1>
          <h1 id='hacks' className='font-medium text-zinc-400 opacity-0'>
            HACKS
          </h1>
        </div>

        {isPhone ? (
          <div
            id='subtext'
            className='mb-10 flex flex-col items-center justify-center text-lg text-zinc-300 opacity-0 sm:text-lg md:text-xl'
          >
            <p>Florida&apos;s Flagship Hackathon</p>
            <p>Gainesville, FL</p>
            <span className='from-green-500 from-20% via-purple-600 via-80% to-pink-500'>
              Coming Spring 2025
            </span>
          </div>
        ) : (
          <div id='subtext' className='mb-10 text-xl text-zinc-300 opacity-0'>
            Florida&apos;s Flagship Hackathon{' '}
            <span className='tracking-tighter text-zinc-500'>&lt;/&gt;</span>{' '}
            Gainesville, FL{' '}
            <span className='tracking-tighter text-zinc-500'>&lt;/&gt;</span>{' '}
            <span className='from-green-500 from-20% via-purple-600 via-80% to-pink-500'>
              Coming Spring 2025
            </span>
          </div>
        )}

        <div className='flex w-5/6 flex-col items-center justify-evenly border sm:w-2/3 sm:flex-row'>
          <button
            onClick={() => {
              window.location.href = 'mailto:info@swamphacks.com';
            }}
            id='sponsor-button'
            className='w-full rounded-md bg-white px-5 py-3 text-xl text-black opacity-0 shadow-[] transition-all hover:bg-zinc-300 sm:w-44'
          >
            Sponsor Us
          </button>
          <button
            onClick={() =>
              window.open('https://discord.swamphacks.com', '_blank')
            }
            id='discord-button'
            className='flex w-full flex-row items-center justify-evenly rounded-md border border-zinc-800 bg-zinc-950 px-5 py-3 text-xl text-white opacity-0 transition-all hover:border-zinc-700 sm:w-44'
          >
            Discord
            <Image
              src={DiscordIcon}
              alt='Discord Icon'
              style={{
                height: 'auto',
                width: '25%',
              }}
            />
          </button>
        </div>
      </div>

      {/* For intro  */}

      <h1 id='first' className='absolute text-3xl text-white opacity-0'>
        University of Florida&apos;s flagship hackathon
      </h1>

      <h1 id='second' className='absolute text-3xl text-white opacity-0'>
        celebrates its 10th anniversary.
      </h1>
    </div>
  );
}
