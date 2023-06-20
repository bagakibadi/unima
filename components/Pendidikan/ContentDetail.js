import Link from 'next/link';
import React from 'react';

const ContentDetail = ({ data }) => {
  return (
    <section class="section-page gray-bg">
      <div class="container">
        <div class="box-imgtext">
          <div class="row wrap">
            <div class="col-md-12">
              <div class="section-box">
                <div class="section-title">
                  <h3>{data.name}</h3>
                </div>
              </div>
            </div>
            <div className="col-md-7">
              <img
                src={
                  data.image ||
                  'https://unima.ac.id/uploads/img_galeri/1650442701563.jpg'
                }
                alt=""
                class="img-full"
              />
            </div>
            <div className="col-md-5">
              {data.contents.content_link ? (
                <div class="faculty-table">
                  {/* <table class="table">
                    <tbody>
                      <tr>
                        <td>Alamat</td>
                        <td>:</td>
                        <td>Jl. MANADO</td>
                      </tr>
                      <tr>
                        <td>Telp</td>
                        <td>:</td>
                        <td>(021) 123456</td>
                      </tr>
                      <tr>
                        <td>Faks</td>
                        <td>:</td>
                        <td>(021) 123456</td>
                      </tr>
                      <tr>
                        <td>E-mail</td>
                        <td>:</td>
                        <td> name@email.com</td>
                      </tr>
                      <tr>
                        <td>Web</td>
                        <td>:</td>
                        <td>www.url.com</td>
                      </tr>
                    </tbody>
                  </table> */}
                  <Link
                    href={data.contents[2].content_link}
                    target="_blank"
                    class="btn btn-primary"
                  >
                    KUNJUNGI LAMAN FAKULTAS
                  </Link>
                </div>
              ) : (
                ''
              )}
            </div>
            <div class="col-md-12 col-sm-12">
              <div class="section-box">
                <div
                  class=""
                  dangerouslySetInnerHTML={{ __html: data.contents[0].content }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentDetail;
