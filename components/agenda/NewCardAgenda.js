import Link from 'next/link';
import React from 'react';
import CustomDate from '../CustomDate';

const NewCardAgenda = ({ data }) => {
  return (
    <div class="agenda-card clearfix">
      <div class="agenda-list-inner">
        <div class="agenda-thumbnail">
          <Link href={'/agenda/detail/' + data.id}>
            <img src={data.image} width="900" height="500" alt="" />
          </Link>
        </div>
        <span class="agenda-item-info agenda-caption agenda-start-date-month">
          <span class="agenda-date">
            <CustomDate dateTime={data.created_at} formatPattern="ee" />
          </span>
          <span class="agenda-month">
            <CustomDate dateTime={data.created_at} formatPattern="MMM" />
          </span>
        </span>
        <div class="agenda-item-content-wrap">
          <h3
            class="agenda-item-title"
            style={{ letterSpacing: '0px', textTransform: 'none' }}
          >
            <Link href={'/agenda/detail/' + data.id}>{data.title}</Link>
          </h3>
          <div class="agenda-item-info-wrap">
            <span class="agenda-item-info agenda-caption">
              <span class="agenda-head">
                <i class="fa fa-clock-o"></i>
              </span>
              <span class="agenda-tail">
                <CustomDate
                  dateTime={data.start_date}
                  formatPattern="H:mm - "
                />
                <CustomDate dateTime={data.end_date} formatPattern="H:mm" />
              </span>
            </span>
            <span class="agenda-item-info agenda-caption agenda-type-location">
              <span class="agenda-head">
                <i class="fa fa-map-marker"></i>
              </span>
              <span class="agenda-tail">
                {data.location || 'Workshop UNIMA'}
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCardAgenda;
