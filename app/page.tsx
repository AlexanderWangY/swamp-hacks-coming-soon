import Header from '@/components/header/header';
import Title from '@/components/title/title';

export default function Home() {
  return (
    <div className='flex flex-col h-screen border'>
      <Header />
      <main className='flex flex-col justify-center items-center flex-1'>
        <Title />
      </main>
    </div>
  );
}
