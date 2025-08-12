// pages/_app.js
import { ThemeProvider } from 'next-themes';
import Layout from '../components/Layout/Layout';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" enableSystem={false}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
