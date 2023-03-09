import Head from 'next/head'
import Script from 'next/script'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
return (
  
<>
  <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-JYP9JKTEYJ"/>
  <Script
    id='google-analytics'
    strategy="afterInteractive"
    dangerouslySetInnerHTML={{
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-JYP9JKTEYJ');
      `,
    }}
/>
 <Component {...pageProps} />
    </>
    )
}

export default MyApp
