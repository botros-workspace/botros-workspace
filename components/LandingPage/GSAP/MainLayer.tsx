import React, { FunctionComponent, useCallback, useRef, useState } from 'react'
import { SectionsTypes } from '../../../shared/enums/sections-types.enum'
import { Box, Flex } from '@chakra-ui/react'
import SkillsMainContainer from '../SecondSection'
import AboutMeMainContainer from '../ThirdSection/AboutMeMainContainer'
import ContactMeMainContainer from '../FourthSection'
import { gsap } from 'gsap'
import FirstSectionContainer from '../FirstSection/FirstSectionContainer'
import UpperNavigator from './UpperNavigator'

const MainLayer: FunctionComponent = () => {
  const [currentSection, setCurrentSection] = useState(
    SectionsTypes.FIRST_SECTIONS
  )
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)
  const minSwipeDistance = 20

  const onTouchStart = (e: any) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: any) => setTouchEnd(e.targetTouches[0].clientX)

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance
    if (isLeftSwipe) {
      if (currentSection === SectionsTypes.FIRST_SECTIONS) {
        setCurrentSection(SectionsTypes.SECOND_SECTIONS)
      }
      if (currentSection === SectionsTypes.SECOND_SECTIONS) {
        setCurrentSection(SectionsTypes.THIRD_SECTIONS)
      }
      if (currentSection === SectionsTypes.THIRD_SECTIONS) {
        setCurrentSection(SectionsTypes.FOURTH_SECTIONS)
      }
    }

    if (isRightSwipe) {
      if (currentSection === SectionsTypes.FOURTH_SECTIONS) {
        setCurrentSection(SectionsTypes.THIRD_SECTIONS)
      }
      if (currentSection === SectionsTypes.THIRD_SECTIONS) {
        setCurrentSection(SectionsTypes.SECOND_SECTIONS)
      }
      if (currentSection === SectionsTypes.SECOND_SECTIONS) {
        setCurrentSection(SectionsTypes.FIRST_SECTIONS)
      }
    }
  }
  const setContainerToFirstSection = useCallback(() => {
    setCurrentSection(SectionsTypes.FIRST_SECTIONS)
  }, [])
  const setContainerToSecondSection = useCallback(() => {
    setCurrentSection(SectionsTypes.SECOND_SECTIONS)
  }, [])
  const setContainerToThirdSection = useCallback(() => {
    setCurrentSection(SectionsTypes.THIRD_SECTIONS)
  }, [])
  const setContainerToFourthSection = useCallback(() => {
    setCurrentSection(SectionsTypes.FOURTH_SECTIONS)
  }, [])
  const handleContainerChangeFromInside = (selectedSection: SectionsTypes) => {
    if (selectedSection === SectionsTypes.FIRST_SECTIONS) {
      setContainerToFirstSection()
    }
    if (selectedSection === SectionsTypes.SECOND_SECTIONS) {
      setContainerToSecondSection()
    }
    if (selectedSection === SectionsTypes.THIRD_SECTIONS) {
      setContainerToThirdSection()
    }
    if (selectedSection === SectionsTypes.FOURTH_SECTIONS) {
      setContainerToFourthSection()
    }
  }
  return (
    <Box
      h={'100%'}
      w={'100%'}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <Box h={6} w={'100%'} pos={'absolute'} zIndex={9999}>
        <UpperNavigator
          currentSection={currentSection}
          handleNavigatorPress={handleContainerChangeFromInside}
        />
      </Box>
      {currentSection === SectionsTypes.FIRST_SECTIONS && (
        <FirstSectionContainer
          setContainerToFourthSection={setContainerToFourthSection}
        />
      )}
      {currentSection === SectionsTypes.SECOND_SECTIONS && (
        <SkillsMainContainer />
      )}
      {currentSection === SectionsTypes.THIRD_SECTIONS && (
        <AboutMeMainContainer />
      )}
      {currentSection === SectionsTypes.FOURTH_SECTIONS && (
        <ContactMeMainContainer />
      )}
    </Box>
  )
}

export default MainLayer
