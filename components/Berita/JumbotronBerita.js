import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import CustomDate from '../CustomDate';

const JumbotronBerita = () => {
  const [dataAgenda, setDataAgenda] = useState(null);
  const [dataBerita, setDataBerita] = useState(null);

  useEffect(() => {
    const fetchDataAgenda = async () => {
      try {
        const response = await axios.get(
          process.env.NEXT_PUBLIC_API + '/agenda/highlight'
        );
        setDataAgenda(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    const fetchDataBerita = async () => {
      try {
        const response = await axios.get(
          process.env.NEXT_PUBLIC_API + '/berita/highlight'
        );
        setDataBerita(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDataAgenda();
    fetchDataBerita();
  }, []);

  const renderAgendaList = () => {
    return dataAgenda.map((obj, idx) => (
      <article class="post post-event">
        <div class="row">
          <div class="col-md-3 col-sm-3 col-xs-3 event-date">
            <span>
              <CustomDate dateTime={obj.start_date} formatPattern="dd" />
              <strong>
                <CustomDate dateTime={obj.start_date} formatPattern="MMM" />
              </strong>
            </span>
          </div>
          <div class="col-md-9 col-sm-9 col-xs-9 post-content">
            <div class="post-title">
              <h3>
                <Link href={'/agenda/detail/' + obj.id}>{obj.title}</Link>
              </h3>
            </div>
          </div>
        </div>
      </article>
    ));
  };

  const renderFirst = () => {
    return dataBerita.map((obj, idx) => (
      <>
        {idx === 0 ? (
          <div class="col-md-12">
            <article class="post post-block">
              <div class="post-img">
                <Link href={'/berita/detail/' + obj.id}>
                  <img src={obj.image} />
                </Link>
              </div>
              <div class="post-content">
                <div class="post-title">
                  <h3>
                    <Link href={'/berita/detail/' + obj.id}>{obj.title}</Link>
                  </h3>
                  <span class="post-date">
                    <CustomDate
                      dateTime={obj.updated_at}
                      formatPattern="dd MMMM YYY"
                    />
                  </span>
                </div>
              </div>
            </article>
          </div>
        ) : (
          ''
        )}
      </>
    ));
  };
  const renderLast = () => {
    return dataBerita.map((obj, idx) => (
      <>
        {idx === 3 ? (
          <article class="post hidden-sm hidden-xs">
            <div class="post-img">
              <Link href={'/berita/detail/' + obj.id}>
                <img src={obj.image} />
              </Link>
            </div>
            <div class="post-content">
              <div class="post-title">
                <h3>
                  <Link href={'/berita/detail/' + obj.id}>{obj.title}</Link>
                </h3>
                <span class="post-date">
                  <CustomDate
                    dateTime={obj.updated_at}
                    formatPattern="dd MMMM YYY"
                  />
                </span>
              </div>
            </div>
          </article>
        ) : (
          ''
        )}
      </>
    ));
  };
  const renderMiddle = () => {
    return dataBerita.map((obj, idx) => (
      <>
        {idx === 1 || idx === 2 ? (
          <div class="col-md-6 col-sm-6">
            <article class="post post-inline">
              <div class="post-img">
                <Link href={'/berita/detail/' + obj.id}>
                  <img src={obj.image} />
                </Link>
              </div>
              <div class="post-content">
                <div class="post-title">
                  <h3>
                    <Link href={'/berita/detail/' + obj.id}>{obj.title}</Link>
                  </h3>
                  <span class="post-date">
                    <CustomDate
                      dateTime={obj.updated_at}
                      formatPattern="dd MMMM YYY"
                    />
                  </span>
                </div>
                <Link href={'/berita/detail/' + obj.id}>Baca Selengkapnya</Link>
              </div>
            </article>
          </div>
        ) : (
          ''
        )}
      </>
    ));
  };

  const renderHighlight = () => {
    return (
      <div class="row">
        <div class="col-md-8">
          <div class="row">{renderFirst()}</div>
          <div class="row">{renderMiddle()}</div>
        </div>
        <div class="col-md-4">
          {renderLast()}
          <div id="event-list">
            <div class="event">
              <div class="event-wrap">
                <div class="section-title">
                  <h3>Agenda Terbaru</h3>
                </div>
                {dataAgenda ? renderAgendaList() : ''}
              </div>
            </div>

            <div class="text-right btn-box no-border">
              <Link href="/agenda" class="btn btn-more">
                Lihat Semua Agenda
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const renderBeritaList = () => {
    return;
  };
  return (
    <section class="news-event section-page">
      <div class="container">
        <div class="section-title">
          <h2>Berita Terbaru</h2>
        </div>
        {dataAgenda && dataBerita ? renderHighlight() : ''}
      </div>
    </section>
  );
};

export default JumbotronBerita;
