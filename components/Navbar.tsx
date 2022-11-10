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
    <div>
      <span className="font-bold text-green-400">{activeItem}</span>
      <div className="flex space-x-3 text-red-400 font-lg">
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
