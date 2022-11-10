import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Sidebar from '../components/Sidebar';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="grid grid-cols-12 gap-6 my-14 px-5 lg:px-48">
      <div className="bg-white rounded-2xl col-span-12 p-4 text-center lg:col-span-3">
        <Sidebar />
      </div>
      <div className="bg-white rounded-2xl col-span-12 lg:col-span-9">
        <Component {...pageProps} />
      </div>
    </div>
  );
}
