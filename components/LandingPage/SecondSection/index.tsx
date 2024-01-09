import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import { gsap } from 'gsap'
import { Box, Image } from '@chakra-ui/react'
import TitleContainer from './TitleContainer'
import SkillsGallery from './SkillsGallery'
import { SectionsTypes } from '../../../shared/enums/sections-types.enum'
import { HiArrowNarrowLeft, HiArrowNarrowRight } from 'react-icons/hi'
import InnerNavigatorContainer from '../../shared/InnerNavigatorContainer'
type Props = {
  handleContainerChangeFromInside: (value: SectionsTypes) => void
}
const SkillsMainContainer: FunctionComponent<Props> = ({
  handleContainerChangeFromInside,
}) => {
  const backgroundRef = useRef<any>([])
  const mainContainerRef = useRef(null)
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
      <Box w={'100%'} h={'100%'} ref={mainContainerRef}>
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
        <InnerNavigatorContainer
          containerRef={mainContainerRef}
          handleContainerChangeFromInside={handleContainerChangeFromInside}
          nextSection={SectionsTypes.THIRD_SECTIONS}
          previousSection={SectionsTypes.FIRST_SECTIONS}
          delay={3}
        />
      </Box>
    </Box>
  )
}

export default SkillsMainContainer
