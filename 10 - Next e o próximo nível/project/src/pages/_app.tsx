import type { AppProps } from 'next/app'
import Head from 'next/head'

import Footer from '../components/Footer'
import Navbar from '../components/NavBar'
import GlobalStyle from '../styles/global'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <title>Blogão da Info</title>
            </Head>
            <Navbar />
            <Component {...pageProps} />
            <Footer />
            <GlobalStyle />
        </>
    )
}
export default MyApp
