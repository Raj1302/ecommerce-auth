import Header from '@/components/header';
import RegisterForm from './register-form';

export default async function RegisterPage() {
  return (
    <>
      <Header />
      <section className='py-8 bg-ct-blue-600 min-h-screen grid place-items-center'>
        <div className='w-2/5 p-8 border-2 rounded-2xl'>
          <h1 className='text-4xl text-center font-semibold text-zinc-800 mb-4'>
            Create your account
          </h1>
          <RegisterForm />
        </div>
      </section>
    </>
  );
}