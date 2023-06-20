import React, { useEffect, useState } from 'react';
import Header from '../../components/header';
import Footer from '../../components/Footer';
import axios from 'axios';
import CardSidebar from '../../components/Card/CardSidebar';

const index = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const response = await axios.get(
          process.env.NEXT_PUBLIC_API + '/registration'
        );
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDataAsync();
  }, []);

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
                <h2>PENDAFTARAN UNIMA</h2>
              </div>
              <div class="section-subtitle" style={{ visibility: 'hidden' }}>
                PENDAFTARAN UNIMA
              </div>
            </div>
          </div>
        </div>
      </section>

      {data ? <CardSidebar data={data.data} /> : ''}

      <Footer />
    </>
  );
};

export default index;
