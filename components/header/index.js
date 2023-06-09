import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Header() {
  const [search, setSearch] = useState('');
  const router = useRouter();
  const path = router.asPath;
  const pathArray = path.split('/').filter(Boolean);
  // console.log();
  const searchAll = (e) => {
    e.preventDefault();
    if (search) {
      router.replace({
        pathname: '/search',
        query: {
          keyword: search,
        },
      });
    }
  };

  const openMenu = (e) => {
    e.preventDefault();
    const navbar = document.getElementById('navbar');
    const checkDisplay = navbar.classList.contains('d-block');
    if (checkDisplay) return navbar.classList.remove('d-block');
    navbar.classList.add('d-block');
  };
  return (
    <header id="header" className="header-fancy">
      <nav className="navbar navbar-default topbar">
        <div className="container">
          <div className="header-nav">
            <button className="nav-more">
              <i className="ion ion-android-more-vertical"></i>
            </button>
            <ul className="nav navbar-nav">
              <li>
                <Link href="#" title="Berita">
                  Kuliah di UNIMA
                </Link>
              </li>
              <li>
                <Link href="/berita" title="Arsip Berita">
                  Berita
                </Link>
              </li>
              <li>
                <Link href="https://lms.unima.ac.id/" target="_blank">
                  LMS
                </Link>
              </li>
              <li>
                <Link target="_blank" href="https://mbkm.unima.ac.id/">
                  MBKM
                </Link>
              </li>
              <li>
                <Link target="_blank" href="http://rpl.unima.ac.id/">
                  RPL
                </Link>
              </li>
              <li>
                <Link target="_blank" href="https://covid19.go.id/id">
                  Info Covid-19
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  href="https://bapksi.unima.ac.id/bank_data/"
                >
                  DEIUNIMA
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <Navbar /> */}
      <div class="container">
        <div class="navbar-header">
          <Link href="/" class="navbar-brand noscroll">
            <img
              src="/images/logo.png"
              alt="Universitas Negeri Manado"
              class="img-responsive"
            />
            <span>Universitas Negeri Manado</span>
          </Link>
          <Link href="/" class="navbar-brand scrolling">
            <img
              src="/images/logo.png"
              alt="Universitas Negeri Manado"
              class="img-responsive"
            />
            <span>Universitas Negeri Manado</span>
          </Link>
          <button
            onClick={(e) => openMenu(e)}
            type="button"
            class="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#navbar"
            aria-expanded="false"
            aria-controls="navbar"
          >
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
        </div>
        <nav id="navbar" class="navbar navbar-collapse navbar-default collapse">
          <ul class="nav navbar-nav navbar-left">
            <li className={pathArray.includes('tentang') ? 'active' : ''}>
              <Link href="/tentang">PROFILe</Link>
            </li>
            <li
              className={
                pathArray.includes('pendidikan') ||
                pathArray.includes('jurusan')
                  ? 'active'
                  : ''
              }
            >
              <Link href="/pendidikan">PENDIDIKAN</Link>
            </li>
            <li class="dropdown">
              <a href="#" class="">
                PENELITIAN <span class="caret"></span>
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a href="#">E-Jurnal</a>
                </li>
                <li>
                  <a href="#">E-Jurnal MAPALUS</a>
                </li>
                <li>
                  <a href="#">Repository</a>
                </li>
                <li>
                  <a href="#">Repository MAPALUS</a>
                </li>
              </ul>
            </li>
            <li className={pathArray.includes('pengabdian') ? 'active' : ''}>
              <Link href="/pengabdian">PENGABDIAN</Link>
            </li>
            <li className={pathArray.includes('pendaftaran') ? 'active' : ''}>
              <a href="/pendaftaran">PENDAFTARAN</a>
            </li>
            <li
              className={pathArray.includes('mahsiswa-alumni') ? 'active' : ''}
            >
              <Link href="/mahasiswa-alumni">MAHASISWA & ALUMNI</Link>
            </li>
            <li className={pathArray.includes('staff') ? 'active' : ''}>
              <Link href="/staff">STAFF</Link>
            </li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li>
              <form onSubmit={searchAll} class="search-form">
                <div class="input-group btn-group">
                  <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    type="text"
                    class="form-control"
                    name="searchAll"
                    placeholder="Search ..."
                  />
                  <button type="submit" class="btn">
                    <i class="fa fa-search"></i>
                  </button>
                </div>
              </form>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
