import React, { useState } from 'react';
import { useRouter } from 'next/router';

const Search = () => {
  const router = useRouter();
  const [program, setProgram] = useState('sarjana');
  const [name, setName] = useState('');

  const search = (e) => {
    e.preventDefault();
    router.replace(`/searchjurusan?program=${program}&name=${name}`);
  };

  return (
    <section
      data-aos="fade-up"
      data-aos-duration="800"
      className="search-section"
    >
      <div className="row wrap m-0">
        <div className="col-md-6">
          <div
            className="row justify-content-end mx-10 align-items-center"
            style={{ height: '100%' }}
          >
            <h1 className="subcontent-title">
              Temukan Program Studi,
              <br /> Jurusan,
              <br /> dan Fakultas
            </h1>
          </div>
        </div>
        <div className="col-md-6" style={{ backgroundColor: '#f8f9fb' }}>
          <div className="row mx-10">
            <div className="col-md-8 py-10">
              <h3>Apa yang anda cari ?</h3>
              <form onSubmit={(e) => search(e)} className="search-form  ">
                <div className="row">
                  <div className="col-md-4">
                    <input
                      value="sarjana"
                      type="radio"
                      onChange={(v) => setProgram(v.target.value)}
                      className="form-radio"
                      name="optionSearch"
                      checked={program === 'sarjana'}
                      id="sarjana"
                    />
                    <label style={{ marginLeft: '5px' }} for="sarjana">
                      Sarjana
                    </label>
                  </div>
                  <div className="col-md-5">
                    <input
                      value="pascasarjana"
                      onChange={(v) => setProgram(v.target.value)}
                      type="radio"
                      className="form-radio"
                      name="optionSearch"
                      checked={program === 'pascasarjana'}
                      id="pascasarjana"
                    />
                    <label style={{ marginLeft: '5px' }} for="pascasarjana">
                      Pascasarjana
                    </label>
                  </div>
                </div>
                <hr className="my-15" />
                <div class="input-group-lg input-group form-group btn-group btn-group-lg">
                  <input
                    value={name}
                    onChange={(v) => setName(v.target.value)}
                    type="text"
                    class="form-control"
                    name="s"
                    placeholder="Search ..."
                  />
                  <button type="submit" class="btn">
                    <i class="fa fa-search"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Search;
