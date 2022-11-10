import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import NavItem from './NavItem';

const NAV_ITEMS = [
  { name: 'About', route: '/' },
  { name: 'Projects', route: '/projects' },
  { name: 'Resume', route: '/resume' },
];

const Navbar = () => {
  const [activeItem, setActiveItem] = useState('');
  const { pathname } = useRouter();

  useEffect(() => {
    if (pathname === '/') setActiveItem('About');
    if (pathname === '/projects') setActiveItem('Projects');
    if (pathname === '/resume') setActiveItem('Resume');
  }, [pathname]);

  return (
    <div className="flex justify-between px-5 py-3 my-3">
      <span className="text-xl font-bold text-green-400 border-b-4 border-green-400 md:text-2xl">
        {activeItem}
      </span>
      <div className="flex space-x-5 text-lg">
        {NAV_ITEMS.map(({ name, route }) => (
          <NavItem
            key={name}
            activeItem={activeItem}
            setActiveItem={setActiveItem}
            name={name}
            route={route}
          />
        ))}
      </div>
    </div>
  );
};

export default Navbar;
