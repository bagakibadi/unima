import Link from 'next/link';
import React from 'react';
import CustomDate from '../CustomDate';

const TerkaitAgenda = ({ data }) => {
  const renderListBerita = () => {
    return data.map((obj, idx) => (
      <li>
        <Link href={'/agenda/detail/' + obj.id}>
          <h4>{obj.title}</h4>
        </Link>
        <div class="entry-meta">
          <span class="meta-date">
            <CustomDate
              dateTime={obj.created_at}
              formatPattern="eeee, dd MMM yyyy - H:mm"
            />
          </span>
        </div>
      </li>
    ));
  };
  return (
    <div class="related-post">
      <div class="content-header">
        <h3 class="content-title">Berita Terkait</h3>
      </div>
      <ul class="post-list">{renderListBerita()}</ul>
    </div>
  );
};

export default TerkaitAgenda;
