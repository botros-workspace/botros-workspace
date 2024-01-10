import { NextPage } from 'next'
import React from 'react'
import GSAPContainer from '../components/LandingPage/GSAP'
import { Box } from '@chakra-ui/react'
import Head from 'next/head'

const LandingPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Botros Portfolio</title>
        <link rel='icon' href='./logoBlack.png' />
      </Head>
      <Box w={'100%'} h={'100vh'} pos={'absolute'}>
        <GSAPContainer />
      </Box>
    </>
  )
}

export default LandingPage
