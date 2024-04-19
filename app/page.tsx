import Header from '@/components/header/header';
import Title from '@/components/title/title';

export default function Home() {
  return (
    <div className='flex h-screen flex-col'>
      <Header />
      <main className='mt-20 flex flex-1 flex-col items-center justify-center'>
        <Title />
      </main>
    </div>
  );
}
