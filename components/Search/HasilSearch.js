import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CardBerita from '../Card/CardBerita';
import AgendaCard from '../agenda/AgendaCard';
import NewCardAgenda from '../agenda/NewCardAgenda';
import { useRouter } from 'next/router';

const HasilSearch = () => {
  const [dataBerita, setDataBerita] = useState(null);
  const [dataAgenda, setDataAgenda] = useState(null);

  const router = useRouter();

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const response = await axios.get(
          process.env.NEXT_PUBLIC_API + '/berita/list'
        );
        setDataBerita(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    const fetchDataAsyncAgenda = async () => {
      try {
        const response = await axios.get(
          process.env.NEXT_PUBLIC_API + '/agenda/list'
        );
        setDataAgenda(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDataAsync();
    fetchDataAsyncAgenda();
  }, []);

  const renderAllBerita = () => {
    return dataBerita.data.map((obj, idx) => (
      <div class="col-md-4 col-xs-6">
        <CardBerita data={obj} />
      </div>
    ));
  };

  const renderCard = () => {
    return dataAgenda.data.map((obj, idx) => (
      <div class="col-md-4 col-xs-6 mb-6 mt-6">
        <NewCardAgenda data={obj} />
      </div>
    ));
  };

  return (
    <section class="section-page sc-about--menu">
      <div class="container">
        <div class="section-title">
          <h3>Semua Agenda</h3>
        </div>
        <div class="row wrap agenda-list">
          {dataAgenda ? renderCard() : <p>Loading...</p>}
        </div>
      </div>
      <div class="container">
        <div class="section-title">
          <h3>Semua Berita</h3>
        </div>
        <div class="row wrap">
          {dataBerita ? renderAllBerita() : <p>Loading...</p>}
        </div>
      </div>
    </section>
  );
};

export default HasilSearch;
