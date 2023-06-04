import Link from 'next/link';
import React from 'react';
import CustomDate from '../CustomDate';

const CardBerita = ({ data }) => {
  return (
    <article class="post">
      <div class="post-img">
        <Link href={'/berita/detail/' + data.id}>
          <img src={data.image} />
        </Link>
      </div>
      <div class="post-content">
        <div class="post-title">
          <h3>
            <Link href={'/berita/detail/' + data.id}>{data.title}</Link>
          </h3>
          <span class="post-date">
            <CustomDate
              dateTime={data.created_at}
              formatPattern={'dd MMM yyyy'}
            />
          </span>
        </div>
      </div>
    </article>
  );
};

export default CardBerita;
