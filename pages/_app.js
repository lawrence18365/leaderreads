import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('../styles/globals.css')
  }, [])

  return <Component {...pageProps} />
}

export default MyApp
