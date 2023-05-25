import Link from 'next/link';
import React from 'react';

const ContentBerita = () => {
  const data = {
    title:
      'Gelar Upacara Peringatan Hari Kebangkitan Nasional ke-115, WR Donal: Demi Wujudkan Indonesia Emas 2045',
  };
  return (
    <div id="content" class="col-md-8 col-md-push-1 sidebar-right">
      <ul class="breadcrumbs breadcrumb">
        <li>
          <Link href="/berita">Beranda</Link>
          <span class="divider"></span>
        </li>
        <li class="active">{data.title}</li>
      </ul>
      <article class="single-post">
        <div class="post-heading">
          <h1 class="post-title">{data.title}</h1>
          <ul class="entry-meta">
            <li class="post-date">17 Juni 2008, 23:38 WIB</li>
            <li class="post-author">Oleh: Humas UGM</li>
            <li class="post-reads">3507</li>
            <li class="post-comments"></li>
          </ul>
        </div>

        <div class="post-content">
          <p>
            Satu lagi prestasi mahasiswa UGM dalam ajang
            <b>Innovative Entrepreneurship Challenge</b> 3 KM ITB, perlu
            diketahui ajang ini sudah berlangsung yang ke 3 kalinya, dan
            merupakan ajang bergengsi dalam lomba bussines plan antar mahasiswa
            tingkat nasional.
          </p>
          <p>
            Dari sekitar 100an peserta awal, kemudian diseleksi menjadi 30 dan
            kemudian diseleksi menjadi 10 besar, seleksi akhir dilakukan di
            hotel borobudur jakarta pada tanggal 13 Juni 2008. Dan hasilnya Tim
            Natta De Cassava yang beranggotakan N. Kartika Indah M (TIP 05),
            Indra (Biologi 05) dan Farid (Ilmu Ekonomi 05) membuat produk Nata
            yang dihasilkan dari limbah tapioka, memenangkan juara 1. Sedangkan
            Tim Nuci Makmur Sentosa, yang semuanya merupakan mahasiswa TIP UGM
            berhasil meraih posisi juara harapan 2 dengan produk gula semut. Ini
            adalah buah akan keyakinan bahwa jiwa kewirausahaan dapat kita
            ajarkan dan berkembang cukup baik. di kalangan mahasiswa. Sebagi
            informasi juga bahwa setiap tahun kita selalu mengikuti acara ini,
            saat kompetisi di tahun 2005 hanya sampai 30 besar saja, di tahun
            2006 dan 2008 ini kita berhasil mendapatkan buahnya, semoga prestasi
            ini menjadi awal kepedulian kita bersama dalam pengembangan
            pembelajaran kewirausahaan di UGM.
          </p>{' '}
        </div>

        <ul class="share-box" id="yw1">
          <li>
            <a
              class="facebook"
              title="Facebook"
              target="_blank"
              href="http://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fugm.ac.id%2Fid%2Fberita%2F333-mahasiswa-ugm-juara-innovative-entrepreneurship-challenge-3-itb-2008"
            >
              <i class="fa fa-facebook"></i>
            </a>
          </li>
          <li>
            <a
              class="twitter"
              title="Twitter"
              target="_blank"
              href="http://twitter.com/share?url=https%3A%2F%2Fugm.ac.id%2Fid%2Fberita%2F333-mahasiswa-ugm-juara-innovative-entrepreneurship-challenge-3-itb-2008"
            >
              <i class="fa fa-twitter"></i>
            </a>
          </li>
          <li>
            <a
              class="whatsapp"
              title="WHATSAPP"
              target="_blank"
              href="https://wa.me/?text=https%3A%2F%2Fugm.ac.id%2Fid%2Fberita%2F333-mahasiswa-ugm-juara-innovative-entrepreneurship-challenge-3-itb-2008"
            >
              <i class="fa fa-whatsapp"></i>
            </a>
          </li>
        </ul>
        <div class="related-post">
          <div class="content-header">
            <h3 class="content-title">Berita Terkait</h3>
          </div>
          <ul class="post-list">
            <li>
              <a href="https://ugm.ac.id/id/berita/367-tim-nata-de-cassava-ugm-raih-juara-i-young-entrepreneur-award-2008">
                <h4>
                  Tim Nata De Cassava UGM Raih Juara I â€œYoung Entrepreneur
                  Award 2008â€
                </h4>
              </a>
              <div class="entry-meta">
                <span class="meta-date">Friday,11 July 2008 - 10:43</span>
              </div>
            </li>

            <li>
              <a href="https://ugm.ac.id/id/berita/301-tim-softball-putri-ugm-juara-i-uny-cup-2008">
                <h4>Tim Softball Putri UGM Juara I UNY Cup 2008 </h4>
              </a>
              <div class="entry-meta">
                <span class="meta-date">Friday,23 May 2008 - 14:04</span>
              </div>
            </li>

            <li>
              <a href="https://ugm.ac.id/id/berita/1182-tim-ugm-telah-berhasil-menjadi-juara-ke-i-pddc">
                <h4>Tim UGM telah berhasil menjadi juara ke I PDDC</h4>
              </a>
              <div class="entry-meta">
                <span class="meta-date">Wednesday,30 April 2008 - 8:37</span>
              </div>
            </li>

            <li>
              <a href="https://ugm.ac.id/id/berita/443-tim-hockey-ugm-runner-up-ihrpt-2008">
                <h4>Tim Hockey UGM Runner-Up IHRPT 2008</h4>
              </a>
              <div class="entry-meta">
                <span class="meta-date">Tuesday,02 September 2008 - 9:10</span>
              </div>
            </li>

            <li>
              <a href="https://ugm.ac.id/id/berita/18594-tim-ugm-juara-fushion-innovative-contest-2019">
                <h4>Tim UGM Juara Fushion Innovative Contest 2019 </h4>
              </a>
              <div class="entry-meta">
                <span class="meta-date">Thursday,17 October 2019 - 12:29</span>
              </div>
            </li>
          </ul>
        </div>
      </article>
      <div id="comments" class="comments-area">
        <div id="fb-root"></div>
      </div>
    </div>
  );
};

export default ContentBerita;
