import React, { useEffect, useState } from 'react';
import Header from '../../components/header';
import Footer from '../../components/Footer';
import HasilSearch from '../../components/Search/HasilSearch';
import { useRouter } from 'next/router';
import axios from 'axios';

const SearchPage = () => {
  const router = useRouter();
  const { program, name } = router.query;
  const [data, setData] = useState('');

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API}/jurusan?program=${program}&name=${name}`
        );
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    console.log(program);
    if (program || name) {
      fetchDataAsync();
    }
  }, [program, name]);
  return (
    <>
      <Header />
      <section class="section-page top sc-about--offright">
        <div class="container">
          <div class="about-img">
            <img
              src="https://unima.ac.id/uploads/img_galeri/1650442701563.jpg"
              alt=""
            />
          </div>
          <div class="about-content">
            <div class="section-box">
              <div class="section-title">
                <h2>Search Result</h2>
              </div>
              <div class="section-subtitle">Bisnis</div>
            </div>
          </div>
        </div>
      </section>
      <HasilSearch />
      <Footer />
    </>
  );
};

export default SearchPage;
