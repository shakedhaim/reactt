// _app.js
import '../styles/global.css';
import { AppProps } from 'next/app'; // Import AppProps from Next.js

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp;