import React, { useEffect, useState } from 'react';
import Header from '../../components/header';
import Footer from '../../components/Footer';
import CardSidebar from '../../components/Card/CardSidebar';
import axios from 'axios';
import Head from 'next/head';

const index = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const response = await axios.get(
          process.env.NEXT_PUBLIC_API + '/staff'
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
        <title>UNIMA - Staff & Dosen</title>
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
                <h2>Staff & Dosen</h2>
              </div>
              <div class="hidden section-subtitle">
                Visi UNIMA "Unima Unggul dan Inovatif berdasarkan Mapalus."
              </div>
            </div>
          </div>
        </div>
      </section>
      {data ? (
        <CardSidebar sidebarTitle={'Staff & Dosen UNIMA'} data={data.data} />
      ) : (
        <p>Loading...</p>
      )}

      <Footer />
    </>
  );
};

export default index;
