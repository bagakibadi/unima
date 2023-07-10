import axios from 'axios';
import { useEffect, useState } from 'react';

export const Statistic = () => {
  const [dataSekilas, setDataSekilas] = useState(null);

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const response = await axios.get(
          process.env.NEXT_PUBLIC_API + '/landing/sekilas'
        );
        setDataSekilas(response.data.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDataAsync();
  }, []);

  const renderSekilas = () => {
    return (
      <>
        <div class="row">
          <div class="col-md-7 col-sm-6 number-desc">
            <div data-aos="fade-right" class="section-title">
              <h3>{dataSekilas.title}</h3>
            </div>
            <div
              data-aos="fade-up"
              class="section-subtitle"
              dangerouslySetInnerHTML={{ __html: dataSekilas.content_left }}
            ></div>
          </div>
          <div data-aos="fade-left" class="col-md-5 col-sm-6">
            <div class="number-trophy text-center">
              <img src="/images/trophy.png" alt="" />
              <h3
                dangerouslySetInnerHTML={{ __html: dataSekilas.content_right }}
              />
            </div>
          </div>
        </div>
        <div class="number-counter number-row text-center">
          <div class="row">{renderPenghargaan()}</div>
        </div>
      </>
    );
  };

  const renderPenghargaan = () => {
    return dataSekilas.penghargaan.map((obj, idx) => (
      <div data-aos="zoom-in" data-aos-duration="800" class="col-xs-6 col-md-3">
        <div class="number-col" style={{ height: '275px' }}>
          <div style={{ margin: '0px auto 30px auto' }}>
            <img style={{ width: '74px' }} src="/images/icons/medal.png" />
          </div>
          <p>{obj.name}</p>
        </div>
      </div>
    ));
  };
  return (
    <section
      class="section-page no-paddingbottom sc-about--number"
      style={{ marginBottom: '80px' }}
    >
      <div class="container">{dataSekilas ? renderSekilas() : ''}</div>
    </section>
  );
};
