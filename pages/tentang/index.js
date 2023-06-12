import React from 'react';
import Header from '../../components/header';
import CardSidebar from '../../components/Card/CardSidebar';
import Footer from '../../components/Footer';

const Tentang = () => {
  return (
    <>
      <Header />
      <section class="section-page top sc-about--offright">
        <div class="container">
          <div class="about-img">
            <img
              src="https://unima.ac.id/uploads/img_galeri/1650442701563.jpg"
              alt=""
            />
          </div>
          <div class="about-content">
            <div class="section-box">
              <div class="section-title">
                <h2>Tentang UNIMA</h2>
              </div>
              <div class="section-subtitle">
                Visi UNIMA "Unima Unggul dan Inovatif berdasarkan Mapalus."
              </div>
            </div>
          </div>
        </div>
      </section>
      <CardSidebar />
      <Footer />
    </>
  );
};

export default Tentang;
