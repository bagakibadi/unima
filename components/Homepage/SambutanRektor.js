import Link from 'next/link';
import React from 'react';

export const SambutanRektor = ({ data }) => {
  return (
    <section class="section-page no-paddingbottom sc-about--greeting">
      <div class="container">
        <div class="row wrap">
          <div class="col-md-7 col-md-push-5 greeting__text">
            <div class="section-box">
              <div class="section-category">Sambutan Rektor</div>
              <div class="section-title">
                <h3>{data.name}</h3>
              </div>
              <div class="section-subtitle">{data.subtitle}</div>
              <div class="post btn-box no-border">
                <Link href={data.link} className="btn btn-more">
                  Pelajari Selengkapnya
                </Link>
              </div>
            </div>
          </div>
          <div class="col-md-5 col-md-pull-7 greeting__img">
            <img src={data.images} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};
