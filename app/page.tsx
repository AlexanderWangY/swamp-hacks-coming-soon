import Header from '@/components/header/header';
import Title from '@/components/title/title';

// I GIVE UP ON THE BACKGROUND IMAGE FOR NOW LMAO

export default function Home() {
  return (
    <div className='relative flex h-screen w-screen flex-col items-center justify-center overflow-hidden'>
      <h1 className='animate-text1 absolute text-5xl text-white'>
        University of Florida&apos;s biggest hackathon...
      </h1>
      <h1 className='animate-text2 absolute text-5xl text-white opacity-0'>
        Celebrates it&apos;s 10th anniversary.
      </h1>
      <Title />
    </div>
  );
}
