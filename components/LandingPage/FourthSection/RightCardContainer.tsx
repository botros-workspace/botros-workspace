import React from 'react'
import { Box, Image, Text } from '@chakra-ui/react'

const RightCardContainer = () => {
  return (
    <Box
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      w={'100%'}
      h={'100%'}
      flexDir={'column'}
      pos={'relative'}
    >
      <Text fontSize={32} fontWeight={700} pt={4} pos={'absolute'} top={0}>
        Contact info
      </Text>
      <Image alt='qrcode' src='./contactQR.png' w={'100%'}></Image>
      <Text fontSize={28} fontWeight={700} pos={'absolute'} bottom={4}>
        Scan to save
      </Text>
    </Box>
  )
}

export default RightCardContainer
