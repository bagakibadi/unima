import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import CardNewsHome from '../Card/CardNewsHome';
import axios from 'axios';
import CustomDate from '../CustomDate';

export const Berita = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const response = await axios.get(
          process.env.NEXT_PUBLIC_SIDEBAR + 'berita/highlight'
        );
        setData(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDataAsync();
  }, []);

  // Render Berita Homepage
  const renderBerita = (data) => {
    return data.map((items, idx) => (
      <>
        {idx === 0 ? (
          <div className="col-md-12 col-sm-12">
            <article class="container-fluid post post-block" key={items.id}>
              <div class="post-img">
                <Link href={'/berita/detail/' + items.id}>
                  <img src={items.image} alt={items.title} />
                </Link>
              </div>
              <div class="post-content">
                <div class="post-title">
                  <span class="post-date">
                    <CustomDate
                      dateTime={items.created_at}
                      formatPattern={'dd MMM yyyy'}
                    />
                  </span>
                  <h3>
                    <Link href={'/berita/detail/' + items.id}>
                      {items.title}
                    </Link>
                  </h3>
                </div>
                <div class="entry-content">
                  <div
                    className="child line-lamp-3"
                    dangerouslySetInnerHTML={{ __html: items.content }}
                  ></div>
                </div>
                <Link href={'/berita/detail/' + items.id} class="btn btn-more">
                  Baca selengkapnya
                </Link>
              </div>
            </article>
          </div>
        ) : (
          <div class="col-md-4 col-sm-4">
            <CardNewsHome key={items.id} data={items} />
          </div>
        )}
      </>
    ));
  };
  return (
    <section
      id="newsfeed"
      style={{ marginTop: '80px' }}
      class="section-page news-event"
    >
      <div class="container">
        <div class="section-title">
          <h2>Rilis Berita</h2>
        </div>
        {data ? renderBerita(data) : <p>Loading..</p>}
        <div class="text-center btn-box no-border">
          <Link href="/berita" class="btn btn-more">
            Berita Selengkapnya
          </Link>
        </div>
      </div>
    </section>
  );
};
