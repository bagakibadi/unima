import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Jumbotron = () => {
  const [dataVideo, setDataVideo] = useState(null);

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const response = await axios.get(
          process.env.NEXT_PUBLIC_API + '/landing/header-video'
        );
        setDataVideo(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDataAsync();
  }, []);

  return (
    <section class="section-page top schome-hero schome-hero--video">
      <div id="home-video" class="schome-hero__video">
        {dataVideo ? (
          <video width="100%" height="100%" muted="muted" autoPlay>
            <source src={dataVideo.source} type="video/mp4" />
          </video>
        ) : (
          ''
        )}
      </div>

      <div class="schome-hero__logotitle text-center"></div>
    </section>
  );
};

export default Jumbotron;
