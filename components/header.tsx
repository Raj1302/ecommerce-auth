import Link from 'next/link';
import AuthMenu from './auth-menu';
import { getAuthUser } from '@/utils/get-auth-user';
import { ChevronLeft, ChevronRight, Search, ShoppingCart } from 'lucide-react';

const Header = async () => {
  const user = await getAuthUser({ shouldRedirect: false });

  return (
    <header className='bg-zinc-50 w-full'>
      <div className='flex justify-end gap-4 px-6'>
      <ul className='flex items-center gap-4'>
          <li>
            <Link href='/' className='text-zinc-600 font-light text-xs'>
              Help
            </Link>
          </li>
          <li>
            <Link href='/' className='text-zinc-600 font-light text-xs'>
              Orders & Returns
            </Link>
          </li> 
        </ul>
      {!user && (
            <ul className='flex items-center gap-4'>
              <li>
                <Link href='/register' className='text-zinc-600 font-light text-xs'>
                  Register
                </Link>
              </li>
              <li>
                <Link href='/login' className='text-zinc-600 font-light text-xs'>
                  Login
                </Link>
              </li>
            </ul>
          )}
          {user && <AuthMenu />}
      </div>
      <nav className='w-full flex justify-between items-center px-6 py-4'>
        <div>
          <Link href='/' className='text-zinc-800 text-3xl font-bold'>
            ECOMMERCE
          </Link>
        </div>
        <ul className='flex items-center gap-6'>
          <li>
            <Link href='/' className='text-zinc-800 p-2 hover:bg-zinc-100 hover:rounded-lg font-medium'>
              Catogries
            </Link>
          </li>
          <li>
            <Link href='/' className='text-zinc-800 p-2 hover:bg-zinc-100 hover:rounded-lg font-medium'>
              Sale
            </Link>
          </li> 
          <li>
            <Link href='/' className='text-zinc-800 p-2 hover:bg-zinc-100 hover:rounded-lg font-medium'>
              Clearance
            </Link>
          </li>
          <li>
            <Link href='/' className='text-zinc-800 p-2 hover:bg-zinc-100 hover:rounded-lg font-medium'>
              New Stock
            </Link>
          </li>
          <li>
            <Link href='/' className='text-zinc-800 p-2 hover:bg-zinc-100 hover:rounded-lg font-medium'>
              Trending
            </Link>
          </li>
        </ul>
        <div className='flex gap-8 items-center text-zinc-800'>
          <Search/>
          <ShoppingCart/>
        </div>
      </nav>
      <div className='w-full bg-zinc-200 text-zinc-800 p-2 flex items-center justify-center gap-6'>
        <ChevronLeft/>
        <div className='text-sm'>Get 10% off on business sign up</div>
        <ChevronRight/>
      </div>
    </header>
  );
};

export default Header;