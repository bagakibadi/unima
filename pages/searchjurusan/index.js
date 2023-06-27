import React, { useEffect, useState } from 'react';
import Header from '../../components/header';
import Footer from '../../components/Footer';
import HasilSearch from '../../components/Search/HasilSearch';
import { useRouter } from 'next/router';
import axios from 'axios';
import Link from 'next/link';

const SearchPage = () => {
  const router = useRouter();
  const { program, name } = router.query;
  const [data, setData] = useState(null);

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
    if (program || name) {
      fetchDataAsync();
    }
  }, [program, name]);

  const renderListSearch = () => {
    return data.data.map((obj, idx) => (
      <article style={{ paddingBottom: '10px' }} className="post">
        <div className="row m-0">
          <div className="col-md-8 post-content">
            <div className="post-title">
              <h2 style={{ marginTop: '5px' }}>
                <Link
                  style={{
                    fontWeight: 'bold',
                    color: '#083d62',
                    textDecoration: 'none',
                  }}
                  href={'/jurusan/' + obj.id}
                >
                  {obj.name}
                </Link>
              </h2>
            </div>
            <div class="entry-content">
              Fakultas :
              <Link href={'/pendidikan/' + obj.faculty_id}>
                {obj.faculty.name}
              </Link>
            </div>
          </div>
        </div>
      </article>
    ));
  };
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
              <div class="section-subtitle">{name}</div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container pt-50">
          <div className="row justify-content-center">
            <div className="col-md-10 my-15">
              {data ? renderListSearch() : ''}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default SearchPage;
