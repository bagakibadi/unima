import Link from 'next/link';
import React from 'react';
import CustomDate from '../CustomDate';

const AgendaCard = ({ data }) => {
  return (
    <Link href={'/agenda/detail/' + data.id} class="text-dark">
      <div class="card-agenda mb-3 rounded-custom shadow-sm border-0">
        <img
          src={data.image}
          class="card-img-top rounded-custom"
          alt="News"
          style={{ width: '100%', height: '171px' }}
        />
        <div class="card-body">
          <h5 class="card-title one-line">{data.title}</h5>
          <p></p>
          <div class="d-flex justify-content-start align-items-center mb-2">
            <i class="fa fa-calendar me-2" aria-hidden="true"></i>
            <p class="card-text">
              <small class="text-muted">
                <CustomDate
                  dateTime={data.start_date}
                  formatPattern="MMMM e, yyyy -"
                />
                <CustomDate
                  dateTime={data.end_date}
                  formatPattern=" MMMM e, yyyy"
                />
              </small>
            </p>
          </div>
          {/* <div class="d-flex justify-content-start align-items-center mb-2">
            <i class="fa fa-map-marker me-2" aria-hidden="true"></i>
            <p class="card-text one-line">
              <small class="text-muted">
                Jl. Raya Janti - Gedongkuning No.336, Modalan, Banguntapan, Kec.
                Banguntapan, Kabupaten Bantul, Daerah Istimewa Yogyakarta 55198
              </small>
            </p>
          </div> */}
        </div>
      </div>
    </Link>
  );
};

export default AgendaCard;
