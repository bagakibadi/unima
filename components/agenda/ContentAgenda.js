import Link from 'next/link';
import React from 'react';
import CustomDate from '../CustomDate';
import ShareMedia from '../Utility/ShareMedia';
import TerkaitAgenda from './Terkait';

const ContentAgenda = ({ data, dataTerkait }) => {
  return (
    <div id="content" class="col-md-8 col-md-push-1 sidebar-right">
      <ul class="breadcrumbs breadcrumb">
        <li>
          <Link href="/agenda">Beranda</Link>
          <span class="divider"></span>
        </li>
        <li class="active">{data.title}</li>
      </ul>
      <article class="single-post">
        <div class="post-heading">
          <h1 class="post-title">{data.title}</h1>
          <ul class="entry-meta">
            <li class="post-date">
              <CustomDate
                dateTime={data.created_at}
                formatPattern="dd MMM yyy - H:mm"
              />{' '}
              WIB
            </li>
            <li class="post-author">Oleh: {data.author.name}</li>
            <li class="post-reads">{data.views}</li>
          </ul>
        </div>

        <div
          class="post-content"
          dangerouslySetInnerHTML={{ __html: data.content }}
        ></div>

        <ShareMedia />

        {dataTerkait ? <TerkaitAgenda data={dataTerkait} /> : <p>Loading...</p>}
      </article>
      <div id="comments" class="comments-area">
        <div id="fb-root"></div>
      </div>
    </div>
  );
};

export default ContentAgenda;
