import React, { useEffect, useState } from 'react';
import Header from '../../../components/header';
import Footer from '../../../components/Footer';
import axios from 'axios';
import { useRouter } from 'next/router';
import ContentAgenda from '../../../components/agenda/ContentAgenda';
import ShareMedia from '../../../components/Utility/ShareMedia';
import Link from 'next/link';
import AgendaInfoCard from '../../../components/agenda/AgendaInfoCard';
import Head from 'next/head';

const DetailAgenda = () => {
  const router = useRouter();
  const { id } = router.query;

  const [data, setData] = useState(null);
  const [dataTerkait, setDataTerkait] = useState(null);

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const response = await axios.get(
          process.env.NEXT_PUBLIC_API + '/agenda?id=' + id
        );
        setData(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    const fetchDataAsyncTerkait = async () => {
      try {
        const response = await axios.get(
          process.env.NEXT_PUBLIC_API + '/agenda/highlight'
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
            <ContentAgenda data={data} dataTerkait={dataTerkait} />
          ) : (
            <p>Loading...</p>
          )}
          <ShareMedia left={true} />
          {data && dataTerkait ? (
            <div className="mobile-hidden">
              <AgendaInfoCard className="mobile-hidden" data={data} />
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DetailAgenda;
