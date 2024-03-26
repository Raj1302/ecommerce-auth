import Header from '@/components/header';
import LoginForm from './login-form';

export default async function LoginPage() {
  return (
    <>
      <Header />
      <section className='min-h-screen grid place-items-center'>
        <div className='w-2/5 p-8 border-2 rounded-2xl'>
          <h1 className='text-4xl text-center font-semibold text-zinc-800 mb-4'>
            Login
          </h1>
          <h2 className='text-xl text-center text-zinc-800'>
            Welcome back to ECOMMERCE
          </h2>
          <h2 className='mb-4 text-sm text-center text-zinc-600'>
            The next gen business marketplace 
          </h2>
          <LoginForm />
        </div>
      </section>
    </>
  );
}