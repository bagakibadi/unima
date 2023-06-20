import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const ContentListJurusan = ({ data }) => {
  const [dataStudi, setDataStudi] = useState(null);
  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const response = await axios.get(
          process.env.NEXT_PUBLIC_API_NOAPI + data.contents[1].content_link
        );
        setDataStudi(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    if (data) {
      fetchDataAsync();
    }
  }, [data]);
  const renderStudi = () => {
    return (
      <div class="col-md-8">
        <div class="custom-list custom-list--link">
          <ul>
            {dataStudi.map((obj, idx) => (
              <li>
                <Link href={'/jurusan/' + obj.id}>{obj.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  return (
    <section class="section-page no-paddingbottom">
      <div class="container">
        <div class="section-title inline-title">
          <h3>Program Studi</h3>
        </div>

        <div class="row">{dataStudi ? renderStudi() : <p>No Data</p>}</div>
      </div>
    </section>
  );
};

export default ContentListJurusan;
