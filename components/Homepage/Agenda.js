import Link from 'next/link';
import React, { useState } from 'react';
import Slider from 'react-slick';
import CustomDate from '../CustomDate';

function SampleArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    />
  );
}

const Agenda = ({ data }) => {
  const [dataAgenda, setDataAgenda] = useState(data);
  const renderAgenda = () => {
    return dataAgenda.map((obj, idx) => (
      <div
        data-aos="zoom-out"
        className="px-20"
        style={{
          paddingRight: '20px',
          paddingLeft: '20px',
        }}
      >
        <h4 class="event-date">
          <span>
            <CustomDate dateTime={obj.created_at} formatPattern="dd" />
          </span>
          <span>
            <CustomDate dateTime={obj.created_at} formatPattern="MM" />
          </span>
          <span>
            <CustomDate dateTime={obj.created_at} formatPattern="yyyy" />
          </span>
        </h4>
        <h4 class="event-title">
          <Link href={'/agenda/detail/' + obj.id} tabindex="0">
            {obj.title}
          </Link>
        </h4>
        <div
          class="event-info child line-lamp-3"
          dangerouslySetInnerHTML={{ __html: obj.content }}
        ></div>
      </div>
    ));
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    nextArrow: <SampleArrow />,
    prevArrow: <SampleArrow />,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <section class="section-page schome-event">
      <link
        rel="stylesheet"
        type="text/css"
        charset="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"
      />
      <div class="container">
        <div data-aos="fade-down" class="section-title">
          <h3>Agenda Terbaru</h3>
        </div>
        <Slider {...settings} className="event-slider">
          {dataAgenda ? renderAgenda() : <p>Loading...</p>}
        </Slider>
        <div class="text-center btn-box no-border">
          <Link data-aos="fade" href="/agenda" class="btn btn-more">
            LIHAT SEMUA AGENDA
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Agenda;
