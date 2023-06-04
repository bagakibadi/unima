import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
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
                <a href="https://www.ugm.ac.id/id/berita" title="Berita">
                  Kuliah di UNIMA
                </a>
              </li>
              <li>
                <Link href="/berita" title="Arsip Berita">
                  Berita
                </Link>
              </li>
              <li>
                <a href="https://lms.unima.ac.id/" title="Simaster">
                  LMS
                </a>
              </li>
              <li>
                <a href="https://mbkm.unima.ac.id/" title="Webmail">
                  MBKM
                </a>
              </li>
              <li>
                <a href="http://ugm.ac.id/id/directory" title="Direktori">
                  RPL
                </a>
              </li>
              <li>
                <a
                  href="https://ugm.ac.id/id/node/3686-kabar-ugm"
                  title="Kabar UGM"
                >
                  Info Covid-19
                </a>
              </li>
              <li>
                <a
                  href="https://ugm.ac.id/id/arsip/suara-bulaksumur"
                  title="Suara Bulaksumur"
                >
                  DEIUNIMA
                </a>
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
            <li>
              <Link href="/tentang">PROFIL</Link>
            </li>
            <li>
              <Link href="https://www.ugm.ac.id/id/pendidikan">PENDIDIKAN</Link>
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
            <li>
              <Link href="/pengabdian">PENGABDIAN</Link>
            </li>
            <li>
              <a href="https://www.ugm.ac.id/id/pengabdian">PENDAFTARAN</a>
            </li>
            <li>
              <a href="http://um.ugm.ac.id/">MAHASISWA & ALUMNI</a>
            </li>
            <li>
              <a href="http://um.ugm.ac.id/">STAFF</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
