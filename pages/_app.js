import Layout from '../comps/globalComps/Layout'
import Theme from '../styles/theme';


function MyApp({ Component, pageProps }) {
  return (
    <Theme>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </Theme>  
  )
}

export default MyApp
