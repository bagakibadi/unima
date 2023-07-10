import React, { useEffect, useState } from 'react';
import Header from '../../../components/header';
import ContentBerita from '../../../components/Berita/ContentBerita';
import axios from 'axios';
import { useRouter } from 'next/router';
import Footer from '../../../components/Footer';
import ShareMedia from '../../../components/Utility/ShareMedia';
import Head from 'next/head';

const id = () => {
  const router = useRouter();
  const { id } = router.query;

  const [data, setData] = useState(null);
  const [dataTerkait, setDataTerkait] = useState(null);

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const response = await axios.get(
          process.env.NEXT_PUBLIC_API + '/berita?id=' + id
        );
        setData(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    const fetchDataAsyncTerkait = async () => {
      try {
        const response = await axios.get(
          process.env.NEXT_PUBLIC_API + '/berita/highlight'
        );
        setDataTerkait(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    if (id) {
      fetchDataAsync();
      fetchDataAsyncTerkait();
    }
  }, [id]);

  return (
    <>
      <Head>
        <title>UNIMA - {data?.title}</title>
      </Head>
      <Header />
      <div className="container">
        <div className="row">
          {data && dataTerkait ? (
            <ContentBerita data={data} dataTerkait={dataTerkait} />
          ) : (
            <p>Loading...</p>
          )}
          <ShareMedia left={true} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default id;
