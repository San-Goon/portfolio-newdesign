'use client';

import { useState } from 'react';
import CardProject from './CardProject';
import AnimationContainer from '../utils/AnimationContainer';
import { CardProjectProps } from '@/types';

const allProjectsInfo = [
  {
    id: '1',
    title: '로아검문소 (개발중)',
    des: '온라인게임 "로스트아크" 에서 OCR 기능을 활용하여 자동으로 캐릭터의 정보를 불러올 수 있는 웹사이트입니다.',
    category: [
      'typescript',
      'next.js',
      'tanstack query',
      'zustand',
      'tesseract'
    ],
    repo: 'https://github.com/San-Goon/loa-checkpointer'
  },
  {
    id: '2',
    title: 'LG ThinQ App Back-Office',
    des: '(주)레이슬론에서 근무하며 개발한 관리자 및 대시보드 페이지 입니다.',
    category: ['typescript', 'next.js', 'redux', 'turborepo'],
    docs: ''
  },
  {
    id: '3',
    title: '개인 포트폴리오',
    des: '구직을위한 개인 포트폴리오 입니다.',
    category: ['typescript', 'next.js'],
    repo: 'https://github.com/San-Goon/portfolio-newdesign'
  },
  {
    id: '4',
    title: '배달 앱',
    des: 'react-native 학습을 위해 개발했던 배달 어플리케이션 입니다.',
    category: ['typescript', 'react native'],
    repo: 'https://github.com/San-Goon/food-delivery-app'
  },
  {
    id: '5',
    title: 'Stauter',
    des: '똑똑한개발자에서 근무하며 개발한 개발자와 클라이언트를 매칭시켜주는 플랫폼입니다.',
    category: ['typescript', 'next.js', 'tanstack query', 'redux'],
    link: 'https://stauter.co.kr',
    docs: 'https://magenta-forest-566.notion.site/Stauter-1a005404c12946149f4ffd521659f22f'
  },
  {
    id: '6',
    title: 'INCOURSE',
    des: '라이브러리 학습을 위해 개발했던 폐쇄몰 사이트입니다.',
    category: ['typescript', 'next.js', 'tanstack query', 'redux'],
    repo: 'https://github.com/San-Goon/e-commerce-project',
    link: 'https://fastcampas-5-commerce-fe-nwm6-kylecho.vercel.app/login'
  },
  {
    id: '7',
    title: '다팔자',
    des: '라스트일마일에 근무하며 개발했던 통합 상품관리 프로그램입니다.',
    category: ['typescript', 'react', 'graphql', 'electron'],
    link: 'https://www.ownerclan.com/V2/info_page/dafalza2.php',
    docs: 'https://magenta-forest-566.notion.site/153f21e6b7de4505b3df259aa204a72b'
  }
];

const SearchAllProjects = () => {
  const [projectSearch, setProjectSearch] = useState<string>('');

  const resultSearch: CardProjectProps[] = allProjectsInfo.filter((project) => {
    for (const category of project.category) {
      if (category.includes(projectSearch.toLowerCase())) {
        return true;
      }
    }
  });

  return (
    <>
      <AnimationContainer customClassName="w-full group flex flex-col justify-center items-center mb-8">
        <div className="w-full flex items-center lg:w-3/6 h-12 rounded shadow-lg bg-black border border-gray-800 group-hover:border-gray-500 transition-all ease">
          <div className="grid place-items-center h-full w-12 text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <input
            className="peer h-full w-full outline-none rounded text-sm text-white bg-black px-2 group-hover:border-gray-500 transition-all ease"
            type="text"
            id="search"
            placeholder="Languages, frameworks, libraries, etc..."
            onChange={(e) => setProjectSearch(e.target.value)}
          />
        </div>
      </AnimationContainer>

      <article className="w-full flex justify-center items-center content-center flex-wrap gap-6 mx-auto">
        {resultSearch.map(({ id, title, des, category, repo, link, docs }) => (
          <CardProject
            key={id}
            title={title}
            des={des}
            category={category}
            repo={repo}
            link={link}
            docs={docs}
          />
        ))}
      </article>
    </>
  );
};

export default SearchAllProjects;
