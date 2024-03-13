'use client';

import { usePathname } from 'next/navigation';

const Head = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const pathname = usePathname() as string;

  const titleFixedToShow =
    pathname.slice(1).charAt(0).toUpperCase() + pathname.slice(2);

  const meta = {
    title: `프론트엔드 조강훈 포트폴리오`,
    description: `안녕하세요 JavaScript, TypeScript, React, Next.js 를 메인 스킬로 개발하고 있는 3년차 프론트엔드 개발자 조강훈입니다`,
    keywords:
      '조강훈, Kyle Cho, 프론트엔드, 앱개발, 포트폴리오, 개발자 포트폴리오, 프론트엔드 포트폴리오, HTML, CSS, Javascript, Typescript, React, Next.js, Node.js, Express',
    type: 'website'
  };

  return (
    <>
      <title>{meta.title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="follow, index" />
      <meta content={meta.description} name="description" />
      <meta name="keywords" content={meta.keywords} />
      <meta
        property="og:url"
        content={`https://kylecho.vercel.app${pathname}`}
      />
      <link rel="canonical" href={`https://kylecho.vercel.app${pathname}`} />
      <link rel="me" href="mailto:joganghun06@gmail.com" />
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content="Kyle Cho" />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta
        name="google-site-verification"
        content="IO8qsepjZRvC7Tz1JXVu6-neMi3rYARGSU4wFyj6Qck"
      />
    </>
  );
};

export default Head;
