import '../styles/main.scss';

import { Layout } from '../components';
import { Navbar, Footer} from '../structure';

function MyApp({ Component, pageProps }) {
  return(
    <Layout>
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>
    </Layout>
  ) 
}

export default MyApp