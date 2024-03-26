import React from 'react';
import { twMerge } from 'tailwind-merge';
import Spinner from './spinner';

type LoadingButtonProps = {
  loading: boolean;
  btnColor?: string;
  textColor?: string;
  children: React.ReactNode;
};

export const LoadingButton: React.FC<LoadingButtonProps> = ({
  textColor = 'text-zinc-50',
  btnColor = 'bg-zinc-800',
  children,
  loading = false,
}) => {
  return (
    <button
      type='submit'
      className={twMerge(
        `w-full py-3 font-semibold rounded-lg outline-none border-none flex justify-center`,
        `${btnColor} ${loading && 'bg-zinc-700'}`
      )}
    >
      {loading ? (
        <div className='flex items-center gap-3'>
          <Spinner />
          <span className='text-zinc-100 inline-block'>Loading...</span>
        </div>
      ) : (
        <span className={`${textColor}`}>{children}</span>
      )}
    </button>
  );
};