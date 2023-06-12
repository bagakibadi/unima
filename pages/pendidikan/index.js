import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/Footer';
import ContentFakultas from '../../components/Pendidikan/ContentFakultas';

const index = () => {
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
                <h2>Pendidikan</h2>
              </div>
              <div class="section-subtitle">Data Pendidikan</div>
            </div>
          </div>
        </div>
      </section>

      <ContentFakultas />
      <Footer />
    </>
  );
};

export default index;
