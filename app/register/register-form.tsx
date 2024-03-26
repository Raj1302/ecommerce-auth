'use client';

import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import Link from 'next/link';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { CreateUserInput, createUserSchema } from '@/lib/user-schema';
import { trpc } from '@/utils/trpc';
import FormInput from '@/components/form-input';
import { LoadingButton } from '@/components/loading-button';

export default function RegisterForm() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);

  const methods = useForm<CreateUserInput>({
    resolver: zodResolver(createUserSchema),
  });

  const { reset, handleSubmit } = methods;

  const { mutate: registerFn } = trpc.registerUser.useMutation({
    onMutate() {
      setSubmitting(true);
    },
    onSettled() {
      setSubmitting(false);
    },
    onError(error) {
      reset({ password: '', passwordConfirm: '' });
      toast.error(error.message);
      console.log('Error message:', error.message);
    },
    onSuccess() {
      toast.success('registered successfully');
      router.push('/login');
    },
  });

  const onSubmitHandler: SubmitHandler<CreateUserInput> = (values) => {
    registerFn(values);
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmitHandler)}
        className='max-w-md w-full mx-auto overflow-hidden p-8 space-y-5'
      >
        <FormInput label='Full Name' name='name' />
        <FormInput label='Email' name='email' type='email' />
        <FormInput label='Password' name='password' type='password' />
        <FormInput
          label='Confirm Password'
          name='passwordConfirm'
          type='password'
        />
        
        <LoadingButton loading={submitting} textColor='text-zinc-50'>
          REGISTER
        </LoadingButton>
        <hr/>
        <span className='block text-center text-zinc-500'>
          Already have an account?{' '}
          <Link href='/login' className='text-zinc-900'>
            LOGIN
          </Link>
        </span>
      </form>
    </FormProvider>
  );
}