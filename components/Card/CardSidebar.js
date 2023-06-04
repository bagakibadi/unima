import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { LiSidebar } from './LiSidebar';

const CardSidebar = () => {
  const [data, setData] = useState(null);
  const [dataContent, setDataContent] = useState(null);

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const response = await axios.get(
          process.env.NEXT_PUBLIC_SIDEBAR + 'about'
        );
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDataAsync();
  }, []);

  const renderDataContent = (data) => {
    setDataContent(data);
  };
  return (
    <section class="section-page sc-about--menu">
      <div class="container">
        <div class="row">
          <div class="col-sm-4">
            <a class="btn btn-tabmenu hidden-sm hidden-md hidden-lg">
              <i class="fa fa-bars"></i> TAB MENU
            </a>

            <div class="menu-box widget widget_menu">
              <div class="widget-header">
                <h3 class="widget-title">Tentang UNIMA</h3>
              </div>
              <ul>
                {data ? (
                  <LiSidebar data={data.data} dataContent={renderDataContent} />
                ) : (
                  <p>Loading...</p>
                )}
              </ul>
            </div>
          </div>
          {dataContent ? (
            <div class="col-sm-8">
              <div class="section-title">
                <h3>{dataContent.title}</h3>
              </div>
              <div
                class="post"
                dangerouslySetInnerHTML={{ __html: dataContent.content }}
              ></div>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    </section>
  );
};

export default CardSidebar;
