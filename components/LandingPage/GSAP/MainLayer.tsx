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
    <>
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
    </>
  )
}

export default MainLayer
