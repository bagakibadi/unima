import React, { useEffect, useState } from 'react';
import { SambutanRektor } from '../SambutanRektor';
import { Statistic } from '../Statistic';
import { Berita } from '../Berita';
import Agenda from '../Agenda';
import axios from 'axios';

const BodyHomepage = () => {
  const [dataAgenda, setDataAgenda] = useState(null);

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const response = await axios.get(
          process.env.NEXT_PUBLIC_SIDEBAR + 'agenda/highlight'
        );
        setDataAgenda(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDataAsync();
  }, []);

  const dataRektor = {
    name: 'Prof. Dr. Deitje A. Katuuk, M.Pd',
    subtitle:
      'Universitas Negeri Manado sebagai Lembaga Penyelenggaraan Pendidikan Tinggi di Sulawesi Utara, memiliki Visi "UNIMA Unggul, Inovatif Berdasarkan Mapalus". Terletak di Puncak Tonsaru, Tondano, UNIMA menyelenggarakan Pendidikan Jenjang Diploma 3, Sarjana, Magister dan Doktor.',
    link: '#',
    images: '/images/photo/rektor.png',
  };

  const dataStatic = {
    description:
      '<p>Universitas Negeri Manado sebagai Lembaga Penyelenggaraan Pendidikan Tinggi di Sulawesi Utara, memiliki Visi <b>"UNIMA Unggul, Inovatif Berdasarkan Mapalus"</b>. Terletak di Puncak Tonsaru, Tondano, UNIMA menyelenggarakan Pendidikan Jenjang Diploma 3, Sarjana, Magister dan Doktor. </p>',
    awardDescription:
      'Meraih tiga penghargaan Kementdikbudristek dan Kemenkeu atas pencapaian Indikator Kinerja Utama (IKU) 2, 3 serta masuk 10 besar liga PTN Satker (27/6/2023)',
    awardImage: '/images/trophy.png',
    data: [
      {
        name: 'Latest Graduates',
        value: '900+',
      },
      {
        name: 'Teachers',
        value: '300+',
      },
      {
        name: 'Programs',
        value: '9',
      },
      {
        name: 'Students',
        value: '17000+',
      },
    ],
  };

  return (
    <div id="body">
      <div class="homepage homepage-id">
        <section class="section-page top schome-hero schome-hero--video">
          <div id="home-video" class="schome-hero__video">
            <img
              class="unima-jumbotron"
              src="https://unima.ac.id/uploads/img_galeri/1650442822042.jpg"
              style={{ objectFit: 'contain', backgroundColor: 'white' }}
              width="100%"
              height="100%"
            />
          </div>

          <div class="schome-hero__logotitle text-center">
            <h1>UNIVERSITAS NEGERI MANADO</h1>
          </div>
        </section>
        {/* Import Component Sambutan Rektor Homepage*/}
        <SambutanRektor data={dataRektor} />

        {/* Import Component Berita Homepage */}
        <Berita />

        {/* Import Component Data Statistic Homepage */}
        <Statistic data={dataStatic} />

        {/* Import Component Data Agenda Event Homepage */}
        {dataAgenda ? <Agenda /> : <p>Loading...</p>}
      </div>
    </div>
  );
};

export default BodyHomepage;
