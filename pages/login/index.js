export async function getServerSideProps({ res }) {
  res.setHeader('Location', 'https://unima-be-dev.luckymedical.co.id/login');
  res.statusCode = 302;
  res.end();

  return {
    props: {},
  };
}

export default function LoginPage() {
  // This component will not be rendered as the page will be redirected
  return null;
}
