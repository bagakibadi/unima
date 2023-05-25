import Link from 'next/link';
import React from 'react';

const CardNews = ({ data }) => {
  return (
    <article class="post post-inline">
      <div class="post-img">
        <Link href={data.link}>
          <img src={data.image} alt={data.title} />
        </Link>
      </div>
      <div class="post-content">
        <div class="post-title">
          <h3>
            <Link href={data.link}>{data.title}</Link>
          </h3>
        </div>
        <div class="entry-content">
          <Link class="btn btn-more" href={data.link}>
            Baca Selengkapnya
          </Link>
        </div>
      </div>
    </article>
  );
};

export default CardNews;
