import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';

const Footer = () => {
  const [dataFooter, setDataFooter] = useState(null);

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const response = await axios.get(
          process.env.NEXT_PUBLIC_SIDEBAR + 'footer'
        );
        setDataFooter(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDataAsync();
  }, []);

  // Render Footer List Title
  const renderFooter = () => {
    return dataFooter.map((items) => (
      <div className="col-md-3 col-sm-6 widget" key={items.id}>
        <div className="widget-header">
          <h3 className="widget-title">{items.title}</h3>
        </div>
        <div className="menu-footer">{renderLi(items.children)}</div>
      </div>
    ));
  };

  // Render Li  Footer
  const renderLi = (dataLi) => {
    return (
      <ul id="menu-footer-pages" className="menu">
        {dataLi.map((items) => (
          <li key={items.id}>
            <Link href={items.link}>{items.title}</Link>
          </li>
        ))}
      </ul>
    );
  };
  return (
    <div>
      <section class="home-socmed section-page">
        <div class="container">
          <div class="row">
            <div class="col-md-9">
              <div class="section-title">
                <h2>Tetaplah Terhubung</h2>
              </div>
              <div class="section-subtitle">
                Mari jalin silaturahmi dengan mengikuti akun sosial media kami
              </div>
            </div>
            <div class="col-md-3">
              <ul class="share-box">
                <li>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/unima_1955/"
                    class="instagram"
                  >
                    <i class="fa fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.facebook.com/1955Unima"
                    class="facebook"
                  >
                    <i class="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://twitter.com/unima_1955"
                    class="twitter"
                  >
                    <i class="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/c/UniversitasNegeriManado"
                    class="youtube"
                  >
                    <i class="fa fa-youtube-play"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div id="instafeed" class="instafeed clearfix"></div>
        </div>
      </section>

      <footer id="footer">
        <div className="footer-body">
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-sm-5 footer-brand-wrapper">
                <a href="/" class="footer-brand">
                  <img
                    width="90px"
                    src="/images/logo.png"
                    alt="Universitas Negeri Manado"
                  />
                </a>
                <address>
                  <strong>UNIVERSITAS NEGERI MANADO</strong>
                  <br />
                  Jl. Kampus Unima, Kelurahan Tonsaru, Kecamatan Tondano Selatan
                  <br />
                  <i class="fa fa-envelope"></i>&nbsp;&nbsp;
                  <a href="mailto:info@unima.ac.id">info@unima.ac.id</a>
                  <br />
                  <i class="fa fa-phone"></i>&nbsp;&nbsp;
                  <a href="tel:+62-851-56179875">+62 (851) 5617 9875</a>
                  <br />
                  <i class="fa fa-whatsapp"></i>&nbsp;&nbsp;
                  <a href="https://wa.me/6285156179875">+62 851 5617 9875</a>
                  <br />
                </address>
              </div>
              <div class="col-md-9 col-sm-7 footer-menu-wrapper">
                <div class="row">
                  {dataFooter ? renderFooter() : <p>Loading...</p>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
