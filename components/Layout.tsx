import React, { FunctionComponent, ReactNode } from 'react'
import { Box } from '@chakra-ui/react'
import Navbar from './Navbar'

interface Props {
  children: ReactNode
}

export const Layout: FunctionComponent<Props> = ({ children }) => {
  return (
    <Box w={'100%'} h={'100%'}>
      {/* <Navbar /> */}
      <Box minH={'94vh'}>{children}</Box>
    </Box>
  )
}

export default Layout
