import Header from '@/components/header';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Header />
      <section className='min-h-screen'>
        <div className='max-w-4xl mx-auto py-14 flex justify-center items-center'>
          <p className='text-2xl bg-zinc-100 p-4 font-light rounded-xl'>
          Simply click <span className='font-semibold'>'Register'</span> in the top-right menu to kickstart your experience.
          </p>
        </div>
        <div className='flex items-center justify-center gap-4'>
          <div className='bg-zinc-100 rounded-xl p-6'>
            <Image src={"/product1.jpeg"} alt='image' width={500} height={300} className='rounded-xl'/>
            <h1 className='text-center pt-4 text-2xl'>Makeup</h1>
          </div>
          <div className='bg-zinc-100 rounded-xl p-6'>
          <Image src={"/product2.jpeg"} alt='image' width={500} height={300} className='rounded-xl'/>
          <h1 className='text-center pt-4 text-2xl'>Shoes</h1>
          </div>
        </div>
        <div className='mt-4 flex items-center justify-center pb-14 gap-4'>
          <div className='bg-zinc-100 rounded-xl p-6'>
          <Image src={"/product3.jpeg"} alt='image' width={500} height={300} className='rounded-xl'/>
          <h1 className='text-center pt-4 text-2xl'>Watch</h1>
          </div>
          <div className='bg-zinc-100 rounded-xl p-6'>
          <Image src={"/product4.jpeg"} alt='image' width={500} height={300} className='rounded-xl'/>
          <h1 className='text-center pt-4 text-2xl'>Jewellery</h1>
          </div>
        </div>
      </section>
    </>
  );
}