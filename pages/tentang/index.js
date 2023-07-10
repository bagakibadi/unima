import React, { useEffect, useState } from 'react';
import Header from '../../components/header';
import CardSidebar from '../../components/Card/CardSidebar';
import Footer from '../../components/Footer';
import axios from 'axios';
import Head from 'next/head';

const Tentang = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const response = await axios.get(
          process.env.NEXT_PUBLIC_API + '/about'
        );
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDataAsync();
  }, []);

  return (
    <>
      <Head>
        <title>UNIMA - Tentang UNIMA</title>
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
                <h2>Tentang UNIMA</h2>
              </div>
              <div class="section-subtitle">
                Visi UNIMA "Unima Unggul dan Inovatif berdasarkan Mapalus."
              </div>
            </div>
          </div>
        </div>
      </section>
      {data ? (
        <CardSidebar sidebarTitle={'Tentang UNIMA'} data={data.data} />
      ) : (
        <p>Loading...</p>
      )}
      <Footer />
    </>
  );
};

export default Tentang;
