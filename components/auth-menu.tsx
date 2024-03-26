'use client';

import queryClient from '@/utils/query-client';
import { trpc } from '@/utils/trpc';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

export default function AuthMenu() {
  const router = useRouter();

  const { mutate: logoutFn } = trpc.logoutUser.useMutation({
    onError(error) {
      toast.error(error.message);
      console.log('Error message:', error.message);
    },
    onSuccess() {
      queryClient.clear();
      toast.success('logout successful');
      router.push('/');
    },
  });

  return (
    <ul className='flex items-center gap-4'>
      <li>
        <Link href='/profile' className='text-zinc-600 font-light text-xs'>
          Profile
        </Link>
      </li>
      <li className='cursor-pointer text-zinc-600 font-light text-xs' onClick={() => logoutFn()}>
        Logout
      </li>
    </ul>
  );
}