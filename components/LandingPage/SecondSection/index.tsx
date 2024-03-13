import React, {
  FunctionComponent,
  LegacyRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import { gsap } from 'gsap'
import { Box, Image } from '@chakra-ui/react'
import TitleContainer from './TitleContainer'
import SkillsGallery from './SkillsGallery'

const SkillsMainContainer: FunctionComponent = () => {
  const backgroundRef = useRef<any>([])
  const timelineRef = useRef(gsap.timeline())

  useEffect(() => {
    const context = gsap.context(() => {
      const tl = timelineRef.current

      tl.to(backgroundRef.current, {
        opacity: 0.1,
        duration: 1,
        ease: 'power2.inOut',
      })
    })
    return () => context.revert()
  }, [])

  return (
    <Box
      w={'100vw'}
      h={'100vh'}
      pos={'absolute'}
      overflow={'hidden'}
      bg={'#121212'}
    >
      <Box w={'100%'} h={'100%'}>
        <TitleContainer />
        <SkillsGallery />
        <Image
          src='./skillsBanner.webp'
          alt=''
          pos={'absolute'}
          w={'100%'}
          h={'100%'}
          bottom={0}
          left={0}
          objectFit={'contain'}
          opacity={0}
          ref={backgroundRef}
        />
      </Box>
    </Box>
  )
}

export default SkillsMainContainer
