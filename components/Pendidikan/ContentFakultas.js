import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const ContentFakultas = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API}/fakultas`
        );
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDataAsync();
  }, []);

  const renderFakultasList = () => {
    return data.data.map((obj, idx) => (
      <figure key={idx} class="gallery-item col-md-3 col-sm-6 col-xs-6">
        <div class="gallery-img">
          <Link href={'/pendidikan/' + obj.id}>
            <img src="/images/UNIMA.jpg" />
          </Link>
        </div>
        <figcaption class="gallery-caption">
          <a href="pendidikan/fakultas-biologi.html">{obj.name}</a>
        </figcaption>
      </figure>
    ));
  };

  return (
    <>
      <section class="section-studies section-page">
        <div class="container">
          <div class="section-box">
            <div class="section-title inline-title">
              <h3>Fakultas dan Sekolah</h3>
            </div>
          </div>
          <div class="gallery">
            <div class="row wrap">{data ? renderFakultasList() : ''}</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContentFakultas;
