'use client';

import Link from 'next/link';
import '../app/layout';
// import { useAuth } from '../contexts/AuthContext';

const NavBar = () => {
  // const { user, logout } = useAuth();

  return (
    <nav className="NavContainer flex items-center p-6">
      <div className="flex items-center flex-grow">
        <ul className="flex items-center gap-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/sites">Sites</Link>
          </li>
          <li>
            <Link href="/contacts">Contacts</Link>
          </li>
          <li>
            <Link href="/admin">Admin</Link>
          </li>
        </ul>
      </div>

        <div className='user_layer'>
          <Link href="/signup" className='text-blue-600 hover:text-blue-800 visited:text-purple-600'>Signup</Link>
          <Link href="/login" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-6'>
            Login
          </Link>
        </div>
  
    </nav>
  );
};

export default NavBar;










