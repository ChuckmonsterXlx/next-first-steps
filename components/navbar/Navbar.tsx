import { HomeIcon } from '@primer/octicons-react';
import Link from 'next/link';
import { ActiveLink } from '../active-link/ActiveLink';

const navItems = [
  { path: '/about', label: 'About' },
  { path: '/pricing', label: 'Pricing' },
  { path: '/contact', label: 'Contact' },
];

export const Navbar = () => {
  return (
    <nav className='flex justify-between p-2 m-2 bg-blue-800 rounded bg-opacity-30'>
      <Link href={'/'} className='flex items-center gap-1'>
        <HomeIcon />
        <span>Home</span>
      </Link>

      <div className='flex gap-1'>
        {navItems.map((navItem) => (
          <ActiveLink key={navItem.path} {...navItem} />
        ))}
      </div>
    </nav>
  );
};
