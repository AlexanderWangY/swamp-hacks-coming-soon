import Header from '@/components/header/header';
import Title from '@/components/title/title';

// I GIVE UP ON THE BACKGROUND IMAGE FOR NOW LMAO

export default function Home() {
  return (
    <>
      <div className='flex h-screen flex-col'>
        <Header />
        <main className='mt-20 flex flex-1 flex-col items-center justify-center'>
          <Title />
        </main>
      </div>
      <div className='flex h-screen flex-1 flex-col items-center justify-center bg-cover'>
        <p className='text-3xl font-bold text-white opacity-100'>
          University of Florida&apos;s premiere hackathon celebrates its 10th
          anniversary.
        </p>
      </div>
    </>
  );
}
