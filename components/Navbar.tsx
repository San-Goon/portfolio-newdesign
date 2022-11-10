import { useState, useCallback } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [activeItem, setActiveItem] = useState('');

  const onClickAbout = useCallback(() => {
    setActiveItem('About');
  }, []);
  const onClickProjects = useCallback(() => {
    setActiveItem('Projects');
  }, []);
  const onClickResume = useCallback(() => {
    setActiveItem('Resume');
  }, []);

  return (
    <div>
      <span className="font-bold text-green-400">{activeItem}</span>
      <div className="flex space-x-3 text-red-400 font-lg">
        {activeItem !== 'About' ? (
          <Link href="/" passHref>
            <span onClick={onClickAbout}>About</span>
          </Link>
        ) : null}
        {activeItem !== 'Projects' ? (
          <Link href="/projects" passHref>
            <span onClick={onClickProjects}>Projects</span>
          </Link>
        ) : null}
        {activeItem !== 'Resume' ? (
          <Link href="/resume" passHref>
            <span onClick={onClickResume}>Resume</span>
          </Link>
        ) : null}
      </div>
    </div>
  );
};

export default Navbar;
