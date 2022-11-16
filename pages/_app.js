import '../styles/main.scss';

import { Layout } from '../components';
import { Navbar, Footer} from '../structure';

function MyApp({ Component, pageProps, iletisimData }) {
  return(
    <Layout>
      <Navbar/>
      <Component {...pageProps} />
      <Footer/> 
    </Layout>
  ) 
}


export const getServerSideProps = async () => {


	const iletisimQuery = '*[_type == "iletisim"]';
	const iletisimData = await client.fetch(iletisimQuery);



	return {
		props: { iletisimData }
	}
}


export default MyApp