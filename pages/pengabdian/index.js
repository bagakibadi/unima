import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/Footer';
import ContentPengabdian from '../../components/pengabdian/ContentPengabdian';
import Head from 'next/head';

const Pengabdian = () => {
  return (
    <>
      <Head>
        <title>UNIMA - Pengabdian</title>
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
                <h2>Pengabdian Masyarakat di UNIMA</h2>
              </div>
              <div class="section-subtitle">
                Tujuan pengabdian kepada masyarakat adalah untuk memberikan
                solusi terhadap permasalahan yang dihadapi oleh masyarakat.
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContentPengabdian />

      <Footer />
    </>
  );
};

export default Pengabdian;
