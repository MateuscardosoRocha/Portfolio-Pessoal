import '../styles/globals.css';


//Componentes
import Layout from '../components/Layout';
import Nav from '../components/Nav';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp;
