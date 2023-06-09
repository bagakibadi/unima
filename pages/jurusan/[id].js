import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Header from '../../components/header';
import Footer from '../../components/Footer';
import { LiSidebar } from '../../components/Card/LiSidebar';
import CardSidebar from '../../components/Card/CardSidebar';
import Head from 'next/head';

const JurusanDeatail = () => {
  const router = useRouter();
  const { id } = router.query;

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const response = await axios.get(
          process.env.NEXT_PUBLIC_API + '/jurusan/' + id
        );
        setData(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    if (id) {
      fetchDataAsync();
    }
  }, [id]);

  const renderJumbotron = () => {
    return (
      <>
        <Head>
          <title>UNIMA - {data.name}</title>
        </Head>
        <section class="section-page top sc-about--offright">
          <div class="container">
            <div class="about-img">
              <img src="/images/UNIMA.jpg" alt="" />
            </div>
            <div class="about-content">
              <div class="section-box">
                <div class="section-title">
                  <h2>{data.name}</h2>
                </div>
                <div class="section-subtitle" style={{ visibility: 'hidden' }}>
                  JURUSAN UNIMA
                </div>
              </div>
            </div>
          </div>
        </section>
        {data ? (
          <CardSidebar sidebarTitle={'Jurusan UNIMA'} data={data.contents} />
        ) : (
          ''
        )}
      </>
    );
  };
  return (
    <>
      <Header />
      {data ? renderJumbotron() : <p>Loading...</p>}
      <Footer />
    </>
  );
};

export default JurusanDeatail;
