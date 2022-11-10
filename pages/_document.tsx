import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="ko">
      <Head>{/*여기에 폰트넣기*/}</Head>
      <body className="bg-gradient-to-r from-green-400 to-blue-400 dark:from-dark-500 dark:to-dark-700 dark:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
