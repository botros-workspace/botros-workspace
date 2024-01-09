import { Box, Flex } from '@chakra-ui/react'
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const ContentSeparator = () => {
  const rightSepratorRef = useRef(null)
  const leftSepratorRef = useRef(null)
  const timelineRef = useRef(gsap.timeline())

  useEffect(() => {
    const context = gsap.context(() => {
      const tl = timelineRef.current

      tl.to([leftSepratorRef.current, rightSepratorRef.current], {
        width: '100%',
        duration: 2,
        delay: 2.1,
        ease: 'expo.inOut',
      })
    })
    return () => context.revert()
  }, [])
  return (
    <Flex
      h={1}
      w={'90%'}
      opacity={{ base: 0, lg: 1 }}
      my={{ base: 0, lg: 12 }}
      mx={{ lg: 'unset', xxl: 'auto' }}
      flexDir={'row'}
    >
      <Box w={'50%'} h={'100%'} pos={'relative'}>
        <Box
          w={'0%'}
          h={'100%'}
          pos={'absolute'}
          right={0}
          bg={'white'}
          borderLeftRadius={'lg'}
          ref={leftSepratorRef}
        ></Box>
      </Box>
      <Box w={'50%'} h={'100%'} pos={'relative'}>
        <Box
          w={'0%'}
          h={'100%'}
          pos={'absolute'}
          left={0}
          bg={'white'}
          borderRightRadius={'lg'}
          ref={rightSepratorRef}
        ></Box>
      </Box>
    </Flex>
  )
}

export default ContentSeparator
