import '../utility/styles/globals.css';
import '../utility/styles/fold.css';
import '../utility/styles/ps-style.css';
import '../utility/styles/custom-1.css';
import '../utility/styles/custom-2.css';
import '../utility/styles/card-agenda.css';
import '../utility/styles/card-fakultas.css';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      once: false,
      mirror: true,
      duration: 1100,
    });
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
