import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import { GiTie } from 'react-icons/gi';
import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';

const Sidebar = () => {
  const [themeText, setThemeText] = useState('');
  const onClickEmail = useCallback(() => {
    window.open('mailto:joganghun06@gmail.com');
  }, []);

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    if (theme === 'light') {
      setThemeText('다크 모드');
    } else {
      setThemeText('라이트 모드');
    }
  }, [theme]);

  const onClickChangeTheme = useCallback(() => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }, [theme]);

  return (
    <div>
      <Image
        src="/images/me.png"
        alt="temp"
        className="mx-auto"
        height="300"
        width="200"
        quality="100"
      />
      <h3 className="my-4 text-3xl font-medium">조 강 훈</h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200">
        Frontend Developer
      </p>
      <a
        className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200"
        href="https://drive.google.com/file/d/14ehyak0AqF4zMRxD1CQNWFXjKLkRfBv8/view?usp=sharing"
        target="_blank"
        rel="noreferrer noopener"
      >
        <GiTie className="w-6 h-6" />
        이력서 열람
      </a>
      <div className="flex justify-around w-9/12 mx-auto my-5 text-green-500 md:w-full">
        <a
          href="https://github.com/San-Goon"
          target="_blank"
          rel="noreferrer noopener"
        >
          <AiFillGithub className="w-8 h-8 cursor-pointer" />
        </a>
        <a
          href="https://www.linkedin.com/in/%EA%B0%95%ED%9B%88-%EC%A1%B0-697372242/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
      </div>
      <div
        className="py-4 my-5 bg-gray-200 dark:bg-dark-200"
        style={{ marginLeft: '-1rem', marginRight: '-1rem' }}
      >
        <div className="flex items-center justify-center space-x-2">
          <GoLocation />
          <span>고양시, 경기도</span>
        </div>
        <p className="my-2">joganghun06@gmail.com</p>
        <p className="my-2">010-6611-2574</p>
      </div>
      <button
        className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-primary to-blue-400"
        onClick={onClickEmail}
      >
        Email me
      </button>
      <button
        className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-primary to-blue-400"
        onClick={onClickChangeTheme}
      >
        {themeText}
      </button>
    </div>
  );
};

export default Sidebar;
