import swampHacksLogo from '@/public/logos/swamphacks_code_logo.svg';
import HeaderLink from './headerlink';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className='border-green flex h-20 w-full flex-row items-center bg-black bg-opacity-75 px-6 text-white fixed top-0 left-0 z-50'>
      <div className='flex select-none flex-row items-center justify-between gap-10 sm:justify-start'>
        <a href='/'>
          <Image
            priority
            className='w-32 shadow-md'
            src={swampHacksLogo}
            alt='SwampHacks Logo'
          />
        </a>
        <Link href={'/'}>
          <p className={`text-3xl font-bold`}>SwampHacks X</p>
        </Link>
        <HeaderLink link='#'>
          Schedule
        </HeaderLink>
        <HeaderLink link='#'>
          Sponsors
        </HeaderLink>
        <HeaderLink link='#'>
          Apply
        </HeaderLink>
        <HeaderLink link='#'>
          FAQ
        </HeaderLink>
      </div>
      <div className='flex grow flex-row justify-end'>
        <HeaderLink link='/api/auth/signin'>
          Sign-In
        </HeaderLink>
      </div>
    </header>
  );
};

export default Header;
