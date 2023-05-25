import Link from 'next/link';
import React from 'react';
import Slider from 'react-slick';

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

const Agenda = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    nextArrow: <SampleArrow />,
    prevArrow: <SampleArrow />,
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
        <div class="section-title">
          <h3>Agenda Terbaru</h3>
        </div>
        <Slider {...settings} className="event-slider">
          <div
            className="px-20"
            style={{
              paddingRight: '20px',
              paddingLeft: '20px',
            }}
          >
            <h4 class="event-date">
              <span>18</span>
              <span>05</span>
              <span>2023</span>
            </h4>
            <h4 class="event-title">
              <Link href="#" tabindex="0">
                UNIMA Festival
              </Link>
            </h4>
            <div class="event-info">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>
          <div
            className="px-20"
            style={{
              paddingRight: '20px',
              paddingLeft: '20px',
            }}
          >
            <h4 class="event-date">
              <span>18</span>
              <span>05</span>
              <span>2023</span>
            </h4>
            <h4 class="event-title">
              <Link href="#" tabindex="0">
                UNIMA Festival
              </Link>
            </h4>
            <div class="event-info">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>
          <div
            className="px-20"
            style={{
              paddingRight: '20px',
              paddingLeft: '20px',
            }}
          >
            <h4 class="event-date">
              <span>18</span>
              <span>05</span>
              <span>2023</span>
            </h4>
            <h4 class="event-title">
              <Link href="#" tabindex="0">
                UNIMA Festival
              </Link>
            </h4>
            <div class="event-info">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>
        </Slider>
        <div class="text-center btn-box no-border">
          <Link href="id/agenda/listAgenda.html" class="btn btn-more">
            LIHAT SEMUA EVENT
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Agenda;
