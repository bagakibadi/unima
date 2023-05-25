import Link from 'next/link';
import React from 'react';

const CardBerita = ({ data }) => {
  return (
    <article class="post">
      <div class="post-img">
        <Link href={data.link}>
          <img src={data.image} />
        </Link>
      </div>
      <div class="post-content">
        <div class="post-title">
          <h3>
            <Link href={data.link}>{data.title}</Link>
          </h3>
          <span class="post-date">{data.date}</span>
        </div>
      </div>
    </article>
  );
};

export default CardBerita;
