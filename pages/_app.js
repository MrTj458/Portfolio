import Layout from '../components/Layout'
import Head from 'next/head'

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default App
