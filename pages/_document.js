import { Html, Head, Main, NextScript } from 'next/document';

export default function document() {
  return (
    <Html>
      <Head>
        <link
          rel="stylesheet"
          href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
        />
        <link
          rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.0/css/ionicons.css"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <script
          type="text/javascript"
          src="../utility/js/jquery-3.1.1.min.js"
        />
        <script
          type="text/javascript"
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"
        />
        <script type="text/javascript" src="../utility/js/Chart.min.js" />
        <script type="text/javascript" src="../utility/js/slick.min.js" />
        <script type="text/javascript" src="../utility/js/jquery.pin.min.js" />
        <script type="text/javascript" src="../utility/js/jquery.nav.js" />
        <script
          type="text/javascript"
          src="../utility/js/jquery.matchHeight-min.js"
        />
        <script type="text/javascript" src="../utility/js/apps.min.js" />
        <script type="text/javascript" src="../utility/js/" />
      </Head>
      <body>
        <NextScript />
      </body>
    </Html>
  );
}
