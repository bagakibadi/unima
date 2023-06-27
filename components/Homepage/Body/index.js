import React, { useEffect, useState } from 'react';
import { SambutanRektor } from '../SambutanRektor';
import { Statistic } from '../Statistic';
import { Berita } from '../Berita';
import Agenda from '../Agenda';
import axios from 'axios';
import Search from '../Search';
import Jumbotron from '../Jumbotron';

const BodyHomepage = () => {
  const [dataAgenda, setDataAgenda] = useState(null);

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const response = await axios.get(
          process.env.NEXT_PUBLIC_API + '/agenda/highlight'
        );
        setDataAgenda(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDataAsync();
  }, []);

  return (
    <div id="body">
      <div class="homepage homepage-id">
        <Jumbotron />
        <Search />

        {/* Import Component Berita Homepage */}
        <Berita />

        {/* Import Component Data Statistic Homepage */}
        <Statistic />

        {/* Import Component Data Agenda Event Homepage */}
        {dataAgenda ? <Agenda data={dataAgenda} /> : <p>Loading...</p>}

        {/* Import Component Sambutan Rektor Homepage*/}
        <SambutanRektor />
      </div>
    </div>
  );
};

export default BodyHomepage;
