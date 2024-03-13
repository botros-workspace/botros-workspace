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
  const lowerBorderRef = useRef(null)
  const upperBorderRef = useRef(null)
  const middleLayerRef = useRef(null)
  const lowerOverlayRef = useRef(null)
  const upperOverlayRef = useRef(null)
  useEffect(() => {
    if (!timeline) return
    timeline
      .to(wordsContainerRef.current, {
        yPercent: -233.5,
        duration: 3,
        ease: 'expo.inOut',
      })
      .to([upperCoverRef.current, lowerCoverRef.current], {
        height: '50%',
        duration: 0.6,
        ease: 'expo.inOut',
      })
      .to([lowerBorderRef.current, upperBorderRef.current], {
        scaleX: 1,
        opacity: 1,
        duration: 0.6,
        ease: 'expo.inOut',
      })
      .to([lowerOverlayRef.current, upperOverlayRef.current], {
        background: 'white',
        opacity: 1,
        duration: 0.0001,
        ease: 'expo.inOut',
      })
      .to(middleLayerRef.current, {
        background: '#121212',
        opacity: 1,
        duration: 0.0001,
        ease: 'expo.inOut',
      })
      .to([lowerOverlayRef.current, upperOverlayRef.current], {
        height: '0%',
        duration: 0.6,
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
      <Box
        h={0.5}
        display={'inline-block'}
        width={'100%'}
        transform={'scaleX(0)'}
        opacity={0}
        transformOrigin={'center center'}
        ref={upperBorderRef}
        bg={'#121212'}
        zIndex={9999}
        top={'50%'}
        pos={'absolute'}
      ></Box>
      <Box
        h={0.5}
        display={'inline-block'}
        width={'100%'}
        transform={'scaleX(0)'}
        opacity={0}
        transformOrigin={'center center'}
        ref={upperBorderRef}
        bg={'#121212'}
        zIndex={9999}
        top={'50%'}
        pos={'absolute'}
      ></Box>
      <Box
        h={0.5}
        display={'inline-block'}
        width={'100%'}
        transform={'scaleX(0)'}
        opacity={0}
        transformOrigin={'center center'}
        ref={lowerBorderRef}
        bg={'#121212'}
        zIndex={9999}
        top={'50%'}
        pos={'absolute'}
      ></Box>
      <Box
        h={0.5}
        display={'inline-block'}
        width={'100%'}
        transform={'scaleX(0)'}
        opacity={0}
        transformOrigin={'center center'}
        ref={lowerBorderRef}
        bg={'#121212'}
        zIndex={9999}
        top={'50%'}
        pos={'absolute'}
      ></Box>
      <Box
        ref={middleLayerRef}
        pos={'absolute'}
        top={0}
        left={0}
        w={'100%'}
        h={'100%'}
        bg={'transparent'}
        opacity={0}
        zIndex={80}
      ></Box>
      <Box
        ref={upperOverlayRef}
        pos={'absolute'}
        borderBottomWidth={1}
        borderColor={'#121212'}
        top={0}
        left={0}
        w={'100%'}
        h={'50%'}
        bg={'white'}
        opacity={0}
        zIndex={99}
      ></Box>
      <Box
        ref={lowerOverlayRef}
        borderBottomWidth={1}
        borderColor={'#121212'}
        pos={'absolute'}
        bottom={0}
        opacity={0}
        left={0}
        w={'100%'}
        h={'50%'}
        bg={'white'}
        zIndex={99}
      ></Box>
    </Box>
  )
}

export default IntroLoader
