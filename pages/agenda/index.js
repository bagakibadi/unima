import React, { useEffect, useState } from 'react';
import Header from '../../components/header';
import Footer from '../../components/Footer';
import AgendaCard from '../../components/agenda/AgendaCard';
import axios from 'axios';
import NewCardAgenda from '../../components/agenda/NewCardAgenda';
import Head from 'next/head';

const index = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const response = await axios.get(
          process.env.NEXT_PUBLIC_API + '/agenda/list'
        );
        setData(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDataAsync();
  }, []);

  const renderCard = () => {
    return data.data.map((obj, idx) => (
      <div class="col-md-4 col-xs-6 mb-6 mt-6">
        <NewCardAgenda data={obj} />
      </div>
    ));
  };

  return (
    <>
      <Head>
        <title>UNIMA - Agenda</title>
      </Head>
      <Header />
      <section class="news-event news-col section-page">
        <div class="container">
          <div class="section-title">
            <h3>Semua Agenda</h3>
          </div>
          <div class="row wrap agenda-list">
            {data ? renderCard() : <p>Loading...</p>}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default index;
