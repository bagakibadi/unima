import Link from 'next/link';
import React from 'react';

const ShareMedia = () => {
  return (
    <div class="col-md-1 col-md-pull-8 share-box-wrapper">
      <ul class="share-box" id="yw2">
        <li>
          <Link
            class="facebook"
            title="Facebook"
            target="_blank"
            href="http://www.facebook.com/sharer/sharer.php?u=http://localhost:3000/berita/detail/32"
          >
            <i class="fa fa-facebook"></i>
          </Link>
        </li>
        <li>
          <Link
            class="twitter"
            title="Twitter"
            target="_blank"
            href="http://twitter.com/share?url=https%3A%2F%2Fugm.ac.id%2Fid%2Fberita%2F333-mahasiswa-ugm-juara-innovative-entrepreneurship-challenge-3-itb-2008"
          >
            <i class="fa fa-twitter"></i>
          </Link>
        </li>
        <li>
          <Link
            class="whatsapp"
            title="WHATSAPP"
            target="_blank"
            href="https://wa.me/?text=https%3A%2F%2Fugm.ac.id%2Fid%2Fberita%2F333-mahasiswa-ugm-juara-innovative-entrepreneurship-challenge-3-itb-2008"
          >
            <i class="fa fa-whatsapp"></i>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ShareMedia;
