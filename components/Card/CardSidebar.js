import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { LiSidebar } from './LiSidebar';
import TablePagination from '../Table/TablePagination';

const CardSidebar = ({ data }) => {
  const [dataContent, setDataContent] = useState(null);
  const [dataBiaya, setDataBiaya] = useState(null);
  const [dataTable, setDataTable] = useState('');

  const renderDataContent = async (id) => {
    fetchDataAsync(id);
  };
  useEffect(() => {
    if (data[0]?.children?.length) {
      fetchDataAsync(data[0].children[0].id);
    } else {
      fetchDataAsync(data[0].id);
    }
  }, []);
  const fetchDataAsync = async (id) => {
    const response = await axios.get(
      process.env.NEXT_PUBLIC_API + '/about/' + id
    );
    if (!response.data.data.link) {
      setDataContent(response.data.data);
    } else {
      window.open(response.data.data.link, '_blank');
    }
    if (response.data.data.content_link) {
      fetchTable(response.data.data.content_link);
    } else {
      setDataBiaya(null);
      setDataTable(null);
    }
  };

  const fetchTable = async (data) => {
    if (data.includes('biaya')) {
      const response = await axios.get(
        process.env.NEXT_PUBLIC_API_NOAPI + data
      );
      setDataBiaya(response.data.data);
    } else {
      setDataTable(data);
    }
  };

  const renderTable = () => {
    return (
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>No</th>
            <th>Nama Kategori</th>
            <th>Jumlah UKT</th>
          </tr>
        </thead>
        {dataBiaya ? (
          <tbody>
            {dataBiaya.map((obj, idx) => (
              <tr>
                <td>{idx + 1}</td>
                <td>{obj.name}</td>
                <td>{renderBiaya(obj.biaya)}</td>
              </tr>
            ))}
          </tbody>
        ) : (
          ''
        )}
      </table>
    );
  };

  const renderBiaya = (data) => {
    return data.map((obj, idx) => <li>{obj.value}</li>);
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
                  <LiSidebar data={data} dataContent={renderDataContent} />
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
              {dataBiaya ? renderTable() : ''}
              {dataTable ? <TablePagination dataUrl={dataTable} /> : ''}
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
