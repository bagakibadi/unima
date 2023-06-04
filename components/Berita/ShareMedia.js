import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const ShareMedia = ({ left }) => {
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    const url = window.location.href;
    const encodedUrl = encodeURIComponent(url);
    setCurrentUrl(encodedUrl);
  }, []);

  const renderMedia = () => {
    return (
      <ul class="share-box" id="yw1">
        <li>
          <Link
            class="facebook"
            title="Facebook"
            target="_blank"
            href={'http://www.facebook.com/sharer/sharer.php?u=' + currentUrl}
          >
            <i class="fa fa-facebook"></i>
          </Link>
        </li>
        <li>
          <Link
            class="twitter"
            title="Twitter"
            target="_blank"
            href={'http://twitter.com/share?url=' + currentUrl}
          >
            <i class="fa fa-twitter"></i>
          </Link>
        </li>
        <li>
          <Link
            class="whatsapp"
            title="WHATSAPP"
            target="_blank"
            href={'https://wa.me/?text=' + currentUrl}
          >
            <i class="fa fa-whatsapp"></i>
          </Link>
        </li>
      </ul>
    );
  };

  return left ? (
    <div class="col-md-1 col-md-pull-8 share-box-wrapper">{renderMedia()}</div>
  ) : (
    renderMedia()
  );
};

export default ShareMedia;
