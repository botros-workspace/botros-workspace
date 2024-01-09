import { NextPage } from 'next'
import React from 'react'
import GSAPContainer from '../components/LandingPage/GSAP'
import { Box } from '@chakra-ui/react'

const LandingPage: NextPage = () => {
  return (
    <>
      <Box w={'100%'} h={'100vh'} pos={'absolute'}>
        <GSAPContainer />
      </Box>
    </>
  )
}

export default LandingPage
