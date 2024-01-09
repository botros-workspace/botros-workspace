import { Box, Center } from '@chakra-ui/react'
import React, { FunctionComponent } from 'react'

type Props = {
  heroCoverSmallScale: number
  heroCoverBigScale: number
  heroWidthScale: number
  isHeroVisible: boolean
}
const HeroCover: FunctionComponent<Props> = ({
  heroCoverBigScale,
  heroCoverSmallScale,
  heroWidthScale,
  isHeroVisible,
}) => {
  return (
    <Center
      w='100%'
      h='150vh'
      position='relative'
      zIndex={3}
      bg={{ base: '#121212', xl: isHeroVisible ? 'none' : '#121212' }}
      transition={'linear .2s'}
    >
      <Box w='100%' h='80%' position='absolute' top={0} overflow='hidden'>
        <Box
          position='absolute'
          bottom='0'
          right='0'
          borderLeft={`720px solid #121212`}
          borderBottom={`${heroWidthScale}px solid  #121212`}
          transition='linear .7s'
        />

        <Box
          position='absolute'
          bottom='0'
          left='0'
          borderRight={`720px solid #121212`}
          borderBottom={`${heroWidthScale}px solid  #121212`}
          transition='linear .7s'
        />

        <Box
          position='absolute'
          top='0'
          right='0'
          borderLeft={`${heroCoverSmallScale}px solid transparent`}
          borderTop={`${heroCoverBigScale}px solid #121212`}
          transition='linear .7s'
        />

        <Box
          position='absolute'
          top='0'
          left='0'
          borderRight={`${heroCoverSmallScale}px solid transparent`}
          borderTop={`${heroCoverBigScale}px solid #121212`}
          transition='linear .7s'
        />
      </Box>
    </Center>
  )
}

export default HeroCover
