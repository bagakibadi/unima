import React, { useEffect, useState } from 'react';
import CardBerita from '../../components/Card/CardBerita';
import Header from '../../components/header';
import Footer from '../../components/Footer';
import axios from 'axios';
import JumbotronBerita from '../../components/Berita/JumbotronBerita';
import Head from 'next/head';

const Berita = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const response = await axios.get(
          process.env.NEXT_PUBLIC_API + '/berita/list'
        );
        setData(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDataAsync();
  }, []);

  const renderAllBerita = () => {
    return data.data.map((obj, idx) => (
      <div class="col-md-4 col-xs-6">
        <CardBerita data={obj} />
      </div>
    ));
  };
  return (
    <>
      <Head>
        <title>UNIMA - Berita</title>
      </Head>
      <Header />
      <JumbotronBerita />
      <section class="news-event news-col section-page">
        <div class="container">
          <div class="section-title">
            <h3>Semua Berita</h3>
          </div>
          <div class="row wrap">
            {data ? renderAllBerita() : <p>Loading...</p>}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Berita;
