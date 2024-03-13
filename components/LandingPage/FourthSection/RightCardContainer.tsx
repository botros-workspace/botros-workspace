import React, { FunctionComponent } from 'react'
import { Box, Image, Text } from '@chakra-ui/react'

const RightCardContainer: FunctionComponent = () => {
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
      <Text
        fontSize={{ base: 24, md: 32 }}
        fontWeight={700}
        pt={0}
        pos={'absolute'}
        top={0}
      >
        Contact info
      </Text>
      <Image
        alt='qrcode'
        src='./contactQR.png'
        w={'100%'}
        borderRadius={18}
      ></Image>
      <Text
        fontSize={{ base: 24, md: 28 }}
        fontWeight={700}
        pos={'absolute'}
        bottom={1}
      >
        Scan to save
      </Text>
    </Box>
  )
}

export default RightCardContainer
