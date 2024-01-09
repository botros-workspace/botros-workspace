import React from 'react'
import type { AppProps } from 'next/app'
import '../src/app/globals.css'
import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import Layout from '../components/Layout'
import '../src/app/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <CSSReset />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}
export default MyApp
