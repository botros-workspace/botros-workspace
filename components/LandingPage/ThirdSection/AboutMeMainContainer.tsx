import { Flex, Box, Image } from '@chakra-ui/react'
import React, {
  FunctionComponent,
  LegacyRef,
  useCallback,
  useEffect,
  useState,
} from 'react'
import CustomCursor from '../../shared/CustomCursor'
import IndexContainer from './IndexContainer'
import ContentContainer from './ ContentContainer'
import { AboutMeIndexTypes } from '../../../shared/enums/about-me-index-types.enum'
import { scroller } from 'react-scroll'
import LightSwitcherContainer from './LightSwitcherContainer'

const AboutMeMainContainer: FunctionComponent = () => {
  const [selectedIndex, setSelectedIndex] = useState<AboutMeIndexTypes>()
  const [isLightOn, setIsLightOn] = useState(false)
  const [didMount, setDidMount] = useState(false)
  const [coverHeight, setCoverHeight] = useState(0)

  const scrollToAboutMe = useCallback(() => {
    if (selectedIndex !== AboutMeIndexTypes.ABOUT_ME) {
      scroller.scrollTo('aboutMeComponent', {
        duration: 800,
        delay: 5,
        smooth: 'easeInOutQuart',
        offset: -window.innerHeight / 4,
      })
    }
  }, [selectedIndex])
  const scrollToExperience = useCallback(() => {
    if (selectedIndex !== AboutMeIndexTypes.EXPERIENCE) {
      scroller.scrollTo('experienceComponent', {
        duration: 500,
        delay: 5,
        smooth: 'easeInOutQuart',
        offset: -window.innerHeight / 4 + 70,
      })
    }
  }, [selectedIndex])
  const scrollToProjects = useCallback(() => {
    if (selectedIndex !== AboutMeIndexTypes.PROJECTS) {
      scroller.scrollTo('projectsComponent', {
        duration: 500,
        delay: 5,
        smooth: 'easeInOutQuart',
        offset: -window.innerHeight / 4 + 50,
      })
    }
  }, [selectedIndex])
  const scrollToProgrammingLanguages = useCallback(() => {
    if (selectedIndex !== AboutMeIndexTypes.PROGRAMING_LANGUAGES) {
      scroller.scrollTo('programmingLanguagesComponent', {
        duration: 500,
        delay: 5,
        smooth: 'easeInOutQuart',
        offset: -window.innerHeight / 4 - 50,
      })
    }
  }, [selectedIndex])
  const scrollToFrameworks = useCallback(() => {
    if (selectedIndex !== AboutMeIndexTypes.FRAMEWORKS) {
      scroller.scrollTo('frameworksComponent', {
        duration: 500,
        delay: 5,
        smooth: 'easeInOutQuart',
        offset: -window.innerHeight / 4 - 100,
      })
    }
  }, [selectedIndex])
  const scrollToSpeakingLanguages = useCallback(() => {
    if (selectedIndex !== AboutMeIndexTypes.SPEAKING_LANGUAGES) {
      scroller.scrollTo('speakingLanguagesComponent', {
        duration: 500,
        delay: 5,
        smooth: 'easeInOutQuart',
        offset: -window.innerHeight + 600,
      })
    }
  }, [selectedIndex])

  useEffect(() => {
    const interval = setInterval(() => {
      if (coverHeight + 10 <= 100 && isLightOn) {
        setCoverHeight(coverHeight + 10)
      } else {
        clearInterval(interval)
      }
    }, 1)

    return () => {
      clearInterval(interval)
    }
  }, [coverHeight, isLightOn])
  useEffect(() => {
    if (!isLightOn) {
      setCoverHeight(0)
    }
  }, [isLightOn])
  useEffect(() => {
    const interval = setInterval(() => {
      setDidMount(true)
    }, 4000)

    return () => {
      clearInterval(interval)
    }
  }, [])
  return (
    <Box bg={'#121212'}>
      <Box bg={'#121212'} pos={'fixed'} h={'100%'} w={'100%'} />

      <Flex
        w={'100%'}
        h={'100%'}
        flexDir={{ base: 'column', lg: 'row' }}
        bg={'#121212'}
        pos={'absolute'}
      >
        <LightSwitcherContainer
          setIsLightOn={setIsLightOn}
          isLightOn={isLightOn}
        />
        {!isLightOn && didMount && <CustomCursor />}
        <Image
          alt='background'
          src='./aboutMeCover.jpg'
          opacity={{ base: 0, xl: isLightOn ? 1 : 0 }}
          pos={'fixed'}
          h={`100vh`}
          w={'100vw'}
          top={0}
          left={0}
          transition={'ease-in-out 1.5s'}
        />
        <Flex w={{ base: '100%', lg: '50%' }} flexDir={'column'}>
          <Box
            pos={{ base: 'initial', lg: 'fixed' }}
            w={{ base: '100%', lg: '45%' }}
            h={'80%'}
            mt={16}
            overflow={{ base: 'visible', lg: 'scroll', xl: 'visible' }}
            zIndex={999999}
            pb={{ base: 0, lg: 28 }}
          >
            <IndexContainer
              selectedIndex={selectedIndex || AboutMeIndexTypes.ABOUT_ME}
              setSelectedIndex={setSelectedIndex}
              scrollToAboutMe={scrollToAboutMe}
              scrollToExperience={scrollToExperience}
              scrollToProjects={scrollToProjects}
              scrollToProgrammingLanguages={scrollToProgrammingLanguages}
              scrollToFrameworks={scrollToFrameworks}
              scrollToSpeakingLanguages={scrollToSpeakingLanguages}
            />
          </Box>
        </Flex>
        <Flex
          w={{ base: '100%', lg: '50%' }}
          pt={{ base: '20px', lg: '70px' }}
          flexDir={'column'}
          pos={{ base: 'unset', lg: 'absolute' }}
          right={0}
          bg={'transparent'}
          zIndex={99}
        >
          <ContentContainer setSelectedIndex={setSelectedIndex} />
        </Flex>
      </Flex>
    </Box>
  )
}

export default AboutMeMainContainer
