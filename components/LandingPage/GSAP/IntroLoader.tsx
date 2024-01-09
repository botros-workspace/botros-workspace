import { Box, Flex, Text } from '@chakra-ui/react'
import React, { FunctionComponent, useRef, useEffect } from 'react'
import { IntroWords } from '../../../shared/constants/IntroWords'

type Props = {
  timeline: gsap.core.Timeline | null
}
const IntroLoader: FunctionComponent<Props> = ({ timeline }) => {
  const wordsContainerRef = useRef(null)
  const mainContainerRef = useRef(null)
  const upperCoverRef = useRef(null)
  const lowerCoverRef = useRef(null)

  useEffect(() => {
    if (!timeline) return
    timeline
      .to(wordsContainerRef.current, {
        yPercent: -233.5,
        duration: 5,
        ease: 'expo.inOut',
      })
      .to([upperCoverRef.current, lowerCoverRef.current], {
        height: '50%',
        duration: 1,
        ease: 'expo.inOut',
      })
  }, [timeline])
  return (
    <Box
      h={'100%'}
      w={'100%'}
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      ref={mainContainerRef}
    >
      <Box
        w={36}
        h={96}
        display={'flex'}
        pos={'relative'}
        justifyContent={'center'}
        alignContent={'center'}
        alignSelf={'center'}
        overflow={'hidden'}
      >
        <Flex flexDir={'column'} ref={wordsContainerRef}>
          {IntroWords.map((title: string, index: number) => {
            return <Text key={index}>{title}</Text>
          })}
        </Flex>
        <Box
          ref={upperCoverRef}
          pos={'absolute'}
          h={'0%'}
          w={'100%'}
          bg={'white'}
          zIndex={9}
        ></Box>
        <Box
          ref={lowerCoverRef}
          pos={'absolute'}
          bottom={0}
          h={'0%'}
          w={'100%'}
          bg={'white'}
          zIndex={9}
        ></Box>
        <Box
          pos={'absolute'}
          h={'49%'}
          w={'100%'}
          bg={'rgba(255,255,255,0.9)'}
        ></Box>
        <Box
          pos={'absolute'}
          bottom={0}
          h={'46%'}
          w={'100%'}
          bg={'rgba(255,255,255,0.9)'}
        ></Box>
      </Box>
    </Box>
  )
}

export default IntroLoader
