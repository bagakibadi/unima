import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/Footer';
import ContentFakultas from '../../components/Pendidikan/ContentFakultas';

const index = () => {
  return (
    <>
      <Header />
      <section class="section-offset section-offset--right section-page top">
        <div class="offset-img">
          <img
            src="https://unima.ac.id/uploads/img_galeri/1650442701563.jpg"
            alt=""
          />
        </div>
        <div class="container">
          <div class="offset-content">
            <div class="offset-title section-title">
              <h2>Pendidikan</h2>
            </div>
            <div class="offset-text">
              {/* <p>
                Universitas MANADO
              </p> */}
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
