import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export const SambutanRektor = ({ data }) => {
  const [dataSambutan, setDataSambutan] = useState(null);

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const response = await axios.get(
          process.env.NEXT_PUBLIC_API + '/landing/sambutan'
        );
        setDataSambutan(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDataAsync();
  }, []);

  return (
    <section class="section-page no-paddingbottom sc-about--greeting">
      <div class="container">
        {dataSambutan ? (
          <div class="row wrap">
            <div class="col-md-7 col-md-push-5 greeting__text">
              <div class="section-box">
                <div data-aos="fade-down" class="section-category">
                  Sambutan Rektor
                </div>
                <div data-aos="fade-down" class="section-title">
                  <h3>{dataSambutan.name}</h3>
                </div>
                <div data-aos="fade-left" class="section-subtitle">
                  {dataSambutan.subtitle}
                </div>
                <div data-aos="fade" class="post btn-box no-border">
                  <Link href={dataSambutan.link} className="btn btn-more">
                    Pelajari Selengkapnya
                  </Link>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-right"
              class="col-md-5 col-md-pull-7 greeting__img"
            >
              <img src={dataSambutan.images} alt="" />
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
    </section>
  );
};
