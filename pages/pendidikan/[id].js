import React, { useEffect, useState } from 'react';
import Header from '../../components/header';
import Footer from '../../components/Footer';
import ContentDetail from '../../components/Pendidikan/ContentDetail';
import ContentListJurusan from '../../components/Jurusan/ContentListJurusan';
import { useRouter } from 'next/router';
import axios from 'axios';
import Link from 'next/link';
import Head from 'next/head';

const DetailFakultas = () => {
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const response = await axios.get(
          process.env.NEXT_PUBLIC_API + '/fakultas/' + id
        );
        setData(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    if (id) {
      fetchDataAsync();
    }
  }, [id]);

  return (
    <>
      <Head>
        <title>UNIMA - {data?.name}</title>
      </Head>
      <Header />
      <div className="body">
        <div class="education-page">
          <div class="breadcrumb-wrap">
            <div class="container">
              <ul class="breadcrumb">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/pendidikan">Pendidikan</Link>
                </li>
                <li class="active">{data ? data.name : ''}</li>
              </ul>
            </div>
          </div>
          {data ? (
            <>
              <ContentDetail data={data} />
              <ContentListJurusan data={data} />
            </>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DetailFakultas;
