import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/Footer';
import HasilSearch from '../../components/Search/HasilSearch';

const SearchPage = () => {
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
                <h2>Search Result</h2>
              </div>
              <div class="section-subtitle">Bisnis</div>
            </div>
          </div>
        </div>
      </section>
      <HasilSearch />
      <Footer />
    </>
  );
};

export default SearchPage;
