import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <meta name="description" content="조강훈 포트폴리오" />
        <meta name="keywords" content="프론트엔드, frontend" />
      </Head>
      <body className="bg-gradient-to-r from-primary to-blue-400 dark:from-dark-500 dark:to-dark-700 dark:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
