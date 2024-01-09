import { Box } from '@chakra-ui/react'
import React, { FunctionComponent, useEffect, useRef, useState } from 'react'
import UpperNavigatorPoint from './UpperNavigatorPoint'
import { SectionsTypes } from '../../../shared/enums/sections-types.enum'
import { gsap } from 'gsap'

type Props = {
  currentSection: SectionsTypes
  selectedSection: SectionsTypes | null
  containerSetter: (value: SectionsTypes) => void
  handleContainerChangeFromInside: (value: SectionsTypes) => void
}
const UpperNavigator: FunctionComponent<Props> = ({
  currentSection,
  selectedSection,
  containerSetter,
  handleContainerChangeFromInside,
}) => {
  const elementRef = useRef<any>([])
  const timelineRef = useRef(gsap.timeline())
  const [isHoveringFirstSection, setIsHoveringFirstSection] = useState(false)
  const [isHoveringSecondSection, setIsHoveringSecondSection] = useState(false)
  const [isHoveringThirdSection, setIsHoveringThirdSection] = useState(false)
  const [isHoveringFourthSection, setIsHoveringFourthSection] = useState(false)
  useEffect(() => {
    const context = gsap.context(() => {
      const tl = timelineRef.current

      tl.fromTo(
        elementRef.current,
        {
          y: -50,
        },
        {
          y: 0,
          stagger: 0.2,
          delay: 2,
          duration: 1.5,
          ease: 'expo.inOut',
        }
      )
    })
    return () => context.revert()
  }, [])
  return (
    <Box
      pos={'absolute'}
      w={'100%'}
      display={'flex'}
      justifyContent={'center'}
      gap={4}
      alignItems={'center'}
      mt={1}
      zIndex={9999}
    >
      <Box
        ref={(text: any) => elementRef.current.push(text)}
        onMouseEnter={() => setIsHoveringFirstSection(true)}
        onMouseLeave={() => setIsHoveringFirstSection(false)}
        cursor={'pointer'}
        zIndex={9999}
        w={3}
        h={3}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
        onClick={() => {
          if (
            selectedSection !== SectionsTypes.NONE &&
            selectedSection !== null
          ) {
            handleContainerChangeFromInside(SectionsTypes.FIRST_SECTIONS)
          } else {
            containerSetter(SectionsTypes.FIRST_SECTIONS)
          }
        }}
      >
        <UpperNavigatorPoint
          isActive={
            currentSection === SectionsTypes.FIRST_SECTIONS ||
            isHoveringFirstSection
          }
        />
      </Box>
      <Box
        ref={(text: any) => elementRef.current.push(text)}
        onMouseEnter={() => setIsHoveringSecondSection(true)}
        onMouseLeave={() => setIsHoveringSecondSection(false)}
        cursor={'pointer'}
        zIndex={9999}
        w={3}
        h={3}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
        onClick={() => {
          if (
            selectedSection !== SectionsTypes.NONE &&
            selectedSection !== null
          ) {
            handleContainerChangeFromInside(SectionsTypes.SECOND_SECTIONS)
          } else {
            containerSetter(SectionsTypes.SECOND_SECTIONS)
          }
        }}
      >
        <UpperNavigatorPoint
          isActive={
            currentSection === SectionsTypes.SECOND_SECTIONS ||
            isHoveringSecondSection
          }
        />
      </Box>
      <Box
        ref={(text: any) => elementRef.current.push(text)}
        onMouseEnter={() => setIsHoveringThirdSection(true)}
        onMouseLeave={() => setIsHoveringThirdSection(false)}
        cursor={'pointer'}
        zIndex={9999}
        w={3}
        h={3}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
        onClick={() => {
          if (
            selectedSection !== SectionsTypes.NONE &&
            selectedSection !== null
          ) {
            handleContainerChangeFromInside(SectionsTypes.THIRD_SECTIONS)
          } else {
            containerSetter(SectionsTypes.THIRD_SECTIONS)
          }
        }}
      >
        <UpperNavigatorPoint
          isActive={
            currentSection === SectionsTypes.THIRD_SECTIONS ||
            isHoveringThirdSection
          }
        />
      </Box>
      <Box
        ref={(text: any) => elementRef.current.push(text)}
        onMouseEnter={() => setIsHoveringFourthSection(true)}
        onMouseLeave={() => setIsHoveringFourthSection(false)}
        cursor={'pointer'}
        zIndex={9999}
        w={3}
        h={3}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
        onClick={() => {
          if (
            selectedSection !== SectionsTypes.NONE &&
            selectedSection !== null
          ) {
            handleContainerChangeFromInside(SectionsTypes.FOURTH_SECTIONS)
          } else {
            containerSetter(SectionsTypes.FOURTH_SECTIONS)
          }
        }}
      >
        <UpperNavigatorPoint
          isActive={
            currentSection === SectionsTypes.FOURTH_SECTIONS ||
            isHoveringFourthSection
          }
        />
      </Box>
    </Box>
  )
}

export default UpperNavigator
