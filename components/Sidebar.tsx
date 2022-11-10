import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import { GiTie } from 'react-icons/gi';
import { useCallback } from 'react';
import Image from 'next/image';

const Sidebar = () => {
  const onClickEmail = useCallback(() => {
    window.open('mailto:joganghun06@gmail.com');
  }, []);

  const onClickTheme = useCallback(() => {}, []);

  return (
    <div>
      <Image src="" alt="temp" className="w-32 h-32 mx-auto rounded-full" />
      <h3 className="my-4 text-3xl font-medium">조 강 훈</h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full">
        Frontend Developer
      </p>
      <a
        className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full"
        href=""
        target="_blank"
        rel="noreferrer noopenner"
      >
        <GiTie className="w-6 h-6" />
        이력서 다운로드
      </a>
      <div className="flex justify-around w-9/12 mx-auto my-5 text-green-500 md:w-full">
        <a
          href="https://github.com/San-Goon"
          target="_blank"
          rel="noreferrer noopenner"
        >
          <AiFillGithub className="w-8 h-8 cursor-pointer" />
        </a>
        <a
          href="https://www.linkedin.com/in/%EA%B0%95%ED%9B%88-%EC%A1%B0-697372242/"
          target="_blank"
          rel="noreferrer noopenner"
        >
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
      </div>
      <div
        className="py-4 my-5 bg-gray-200"
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
        className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green-400 to-blue-400"
        onClick={onClickEmail}
      >
        Email me
      </button>
      <button className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green-400 to-blue-400">
        Theme
      </button>
    </div>
  );
};

export default Sidebar;
