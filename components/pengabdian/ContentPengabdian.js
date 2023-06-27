import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ContentPengabdian = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const response = await axios.get(
          process.env.NEXT_PUBLIC_API + '/pengabdian'
        );
        setData(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDataAsync();
  }, []);

  const renderPengabdianContent = () => {
    return data.map((obj, idx) => (
      <>
        {idx % 2 === 0 ? (
          <section class="section-page pengabdi-pengabdian no-paddingbottom">
            <div class="container">
              <div class="row">
                <div class="sc-offright__img col-md-4 col-sm-6 img-offset-bawah">
                  <img src={obj.image} alt="" />
                </div>
                <div class="col-md-8 col-sm-6">
                  <div class="section-box section-box-pad">
                    <div class="section-title-pengabdian">
                      <h3>{obj.title}</h3>
                    </div>
                    <div
                      class="section-subtitle"
                      dangerouslySetInnerHTML={{ __html: obj.content }}
                    />
                    {/* <div class="post btn-box no-border">
                      <a
                        href="http://pengabdian.ugm.ac.id/"
                        class="btn btn-primary"
                      >
                        PELAJARI SELENGKAPNYA
                      </a>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : (
          <section class="section-page pengabdi-pengabdian gray-bg no-paddingbottom">
            <div class="container">
              <div class="row">
                <div class="sc-offleft__img col-sm-5 col-sm-push-7 text-center offsetleftbawah">
                  <img src={obj.image} alt="" />
                </div>
                <div class="col-sm-7 col-sm-pull-5">
                  <div class="section-box section-box-turun">
                    <div class="section-title-pengabdian">
                      <h3>{obj.title}</h3>
                    </div>
                    <div
                      class="section-subtitle"
                      dangerouslySetInnerHTML={{ __html: obj.content }}
                    />
                    {/* <div class="post btn-box no-border">
                      <a
                        href="http://pengabdian.ugm.ac.id/"
                        class="btn btn-primary"
                      >
                        PELAJARI SELENGKAPNYA
                      </a>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </>
    ));
  };

  return (
    <div style={{ marginBottom: '50px' }}>
      {data ? renderPengabdianContent() : <p>Loading...</p>}
    </div>
  );
};

export default ContentPengabdian;
