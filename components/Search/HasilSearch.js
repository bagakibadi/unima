import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CardBerita from '../Card/CardBerita';
import AgendaCard from '../agenda/AgendaCard';
import NewCardAgenda from '../agenda/NewCardAgenda';
import { useRouter } from 'next/router';
import Link from 'next/link';

const HasilSearch = () => {
  const [dataBerita, setDataBerita] = useState(null);
  const [dataAgenda, setDataAgenda] = useState(null);
  const [data, setData] = useState(null);

  const router = useRouter();
  const { keyword } = router.query;

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const response = await axios.get(
          process.env.NEXT_PUBLIC_API + '/search?keyword=' + keyword
        );
        setData(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    if (keyword) {
      fetchDataAsync();
    }
  }, [keyword]);

  const renderAllBerita = () => {
    return data.news.map((obj, idx) => (
      <div class="col-md-4 col-xs-6">
        <CardBerita data={obj} />
      </div>
    ));
  };

  const renderCard = () => {
    return data.event.map((obj, idx) => (
      <div class="col-md-4 col-xs-6 mb-6 mt-6">
        <NewCardAgenda data={obj} />
      </div>
    ));
  };

  const renderFakultasList = () => {
    return data.fakultas.map((obj, idx) => (
      <figure key={idx} class="gallery-item col-md-3 col-sm-6 col-xs-6">
        <div class="gallery-img">
          <Link href={'/pendidikan/' + obj.id}>
            <img src="/images/UNIMA.jpg" />
          </Link>
        </div>
        <figcaption class="gallery-caption">
          <a href="pendidikan/fakultas-biologi.html">{obj.name}</a>
        </figcaption>
      </figure>
    ));
  };

  const renderJurusanList = () => {
    return data.jurusan.map((obj, idx) => (
      <article style={{ paddingBottom: '10px' }} className="post">
        <div className="row m-0">
          <div className="col-md-8 post-content">
            <div className="post-title">
              <h2 style={{ marginTop: '5px' }}>
                <Link
                  style={{
                    fontWeight: 'bold',
                    color: '#083d62',
                    textDecoration: 'none',
                  }}
                  href={'/jurusan/' + obj.id}
                >
                  {obj.name}
                </Link>
              </h2>
            </div>
          </div>
        </div>
      </article>
    ));
  };

  return (
    <section class="section-page sc-about--menu">
      {data?.event?.length ? (
        <div class="container">
          <div class="section-title">
            <h3>Semua Agenda</h3>
          </div>
          <div class="row wrap agenda-list">{renderCard()}</div>
        </div>
      ) : (
        ''
      )}
      {data?.news?.length ? (
        <div class="container">
          <div class="section-title">
            <h3>Semua Berita</h3>
          </div>
          <div class="row wrap">{renderAllBerita()}</div>
        </div>
      ) : (
        ''
      )}

      {data?.fakultas?.length ? (
        <div className="section-studies section-page">
          <div className="container">
            <div class="section-title">
              <h3>Fakultas dan Sekolah</h3>
            </div>
            <div class="gallery">
              <div class="row wrap">{renderFakultasList()}</div>
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
      {data?.jurusan?.length ? (
        <div class="container">
          <div class="section-title">
            <h3>Jurusan</h3>
          </div>
          <div class="row wrap justify-content-center">
            <div className="col-md-12 my-15">{renderJurusanList()}</div>
          </div>
        </div>
      ) : (
        ''
      )}
    </section>
  );
};

export default HasilSearch;
