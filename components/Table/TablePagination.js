import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';

const TablePagination = ({ dataUrl }) => {
  const [data, setData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const response = await axios.get(
          process.env.NEXT_PUBLIC_API + '/dosen?page=' + currentPage
        );
        setData(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDataAsync();
  }, [currentPage]);

  const renderTable = () => {
    return data.data.map((obj, idx) => (
      <tr>
        <td>{idx + 1}</td>
        <td>{obj.name}</td>
        <td>{obj.front_title}</td>
        <td>{obj.back_degree}</td>
        <td>{obj.group}</td>
        <td>{obj.faculty.name}</td>
      </tr>
    ));
  };

  const renderPagination = () => {
    const handlePageClick = (event) => {
      setCurrentPage(event.selected + 1);
    };

    const pageCount = Math.round(data.total / data.per_page);
    return (
      <div className="d-flex justify-content-between align-items-center">
        <div>
          Showing {data.from} to {data.to} of {data.total} entries
        </div>
        <ReactPaginate
          breakLabel="..."
          nextLabel="Next >>"
          previousLabel="<< Prev"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
          onPageChange={handlePageClick}
          pageRangeDisplayed={10}
          pageCount={pageCount}
          renderOnZeroPageCount={null}
        />
      </div>
    );
  };

  return (
    <>
      <table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>No.</th>
            <th>Nama Dosen</th>
            <th>Gelar Depan</th>
            <th>Gelar Belakang</th>
            <th>Pangkat</th>
            <th>Fakultas</th>
          </tr>
        </thead>
        <tbody>
          {data ? (
            renderTable()
          ) : (
            <tr>
              <td>Loading...</td>
            </tr>
          )}
        </tbody>
      </table>
      {data ? renderPagination() : 'Loading...'}
    </>
  );
};

export default TablePagination;
