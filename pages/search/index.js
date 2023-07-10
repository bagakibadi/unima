import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/Footer';
import HasilSearch from '../../components/Search/HasilSearch';
import { useRouter } from 'next/router';
import Head from 'next/head';

const SearchPage = () => {
  const router = useRouter();
  const { keyword } = router.query;

  return (
    <>
      <Head>
        <title>UNIMA - Search {keyword}</title>
      </Head>
      <Header />
      <section class="section-page top sc-about--offright">
        <div class="container">
          <div class="about-img">
            <img src="/images/UNIMA.jpg" alt="" />
          </div>
          <div class="about-content">
            <div class="section-box">
              <div class="section-title">
                <h2>Search Result</h2>
              </div>
              <div class="section-subtitle">{keyword}</div>
            </div>
          </div>
        </div>
      </section>
      <HasilSearch />
      <Footer />
    </>
  );
};

export default SearchPage;
