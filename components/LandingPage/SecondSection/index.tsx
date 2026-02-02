import React, {
  FunctionComponent,
  LegacyRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import { gsap } from 'gsap'
import { Box, Flex, Image } from '@chakra-ui/react'
import TitleContainer from './TitleContainer'
import SkillsGallery from './SkillsGallery'
import { SectionsTypes } from '../../../shared/enums/sections-types.enum'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6'
import { NavigationArrow } from '../../shared/NavigationArrow'
type Props = {
  setCurrentSection: (value: SectionsTypes) => void
}
const SkillsMainContainer: FunctionComponent<Props> = ({
  setCurrentSection,
}) => {
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
        <NavigationArrow
          direction='left'
          onClick={() => setCurrentSection(SectionsTypes.FIRST_SECTIONS)}
        />

        <NavigationArrow
          direction='right'
          onClick={() => setCurrentSection(SectionsTypes.THIRD_SECTIONS)}
        />

        <TitleContainer />
        <SkillsGallery />
      </Box>
    </Box>
  )
}

export default SkillsMainContainer
