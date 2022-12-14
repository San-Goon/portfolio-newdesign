import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import { ThemeProvider } from 'next-themes';
import { AnimatePresence } from 'framer-motion';
import Head from 'next/head';

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <div className="grid grid-cols-12 gap-6 px-5 my-14 lg:px-48 sm:px-20 md:px-32">
        <Head>
          <title>조강훈 포트폴리오</title>
        </Head>
        <div className="col-span-12 p-4 text-center bg-white dark:bg-dark-500 rounded-2xl lg:col-span-3 shadow-custom-light dark:shadow-custom-dark">
          <Sidebar />
        </div>
        <div className="flex flex-col col-span-12 overflow-hidden bg-white rounded-2xl lg:col-span-9 dark:bg-dark-500 shadow-custom-light dark:shadow-custom-dark">
          <Navbar />
          <AnimatePresence mode="wait">
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </div>
      </div>
    </ThemeProvider>
  );
}
