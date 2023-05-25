import React from 'react';
import Header from '../../../components/header';
import ShareMedia from '../../../components/Berita/ShareMedia';
import ContentBerita from '../../../components/Berita/ContentBerita';

const id = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <ContentBerita />
          <ShareMedia />
        </div>
      </div>
    </>
  );
};

export default id;
