import React from 'react';
import CardBerita from '../../components/Card/CardBerita';
import Header from '../../components/header';
import Footer from '../../components/Footer';

const Berita = () => {
  const dataBerita = {
    title: 'UNIMA Jadi Peserta Terbanyak Lolos PIMNAS 2023',
    description:
      'Perkembangan teknologi digital berjalan begitu pesat dan masif membawa pengaruh dalam berbagai aspek kehidupan. Salah satunya budaya membaca buku yang mengalami perubahan besar di era digital saat ini.',
    date: '18 Mei 2023',
    image: 'https://unima.ac.id/uploads/img_berita/1656386925905.jpg',
    link: '/',
  };

  const renderAllBerita = () => {
    const list = [];
    for (let i = 0; i < 10; i++) {
      list.push(
        <div class="col-md-4 col-xs-6">
          <CardBerita data={dataBerita} />
        </div>
      );
    }
    return list;
  };
  return (
    <>
      <Header />
      <section class="news-event news-col section-page">
        <div class="container">
          <div class="section-title">
            <h3>Semua Berita</h3>
          </div>
          <div class="row wrap">{renderAllBerita()}</div>
        </div>
      </section>
    </>
  );
};

export default Berita;
