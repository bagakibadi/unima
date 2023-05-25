import Link from 'next/link';
import React from 'react';
import CardNewsHome from '../Card/CardNewsHome';

export const Berita = ({ data }) => {
  // Render Berita Homepage
  const renderBerita = (data) => {
    return data.map((items, idx) => (
      <>
        {idx === 0 ? (
          <div className="col-md-12 col-sm-12">
            <article class="container-fluid post post-block" key={items.id}>
              <div class="post-img">
                <Link href={items.link}>
                  <img src={items.image} alt={items.title} />
                </Link>
              </div>
              <div class="post-content">
                <div class="post-title">
                  <span class="post-date">{items.date}</span>
                  <h3>
                    <Link href={items.link}>{items.title}</Link>
                  </h3>
                </div>
                <div class="entry-content">
                  <p>{items.description}</p>
                  <Link href={items.link} class="btn btn-more">
                    Baca selengkapnya
                  </Link>
                </div>
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
        {renderBerita(data)}
        <div class="text-center btn-box no-border">
          <Link href="/berita" class="btn btn-more">
            Berita Selengkapnya
          </Link>
        </div>
      </div>
    </section>
  );
};
