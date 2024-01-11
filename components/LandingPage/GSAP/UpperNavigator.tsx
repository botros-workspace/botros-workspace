import { Box } from '@chakra-ui/react'
import React, {
  FunctionComponent,
  LegacyRef,
  useEffect,
  useRef,
  useState,
} from 'react'
import UpperNavigatorPoint from './UpperNavigatorPoint'
import { SectionsTypes } from '../../../shared/enums/sections-types.enum'
import { gsap } from 'gsap'

type Props = {
  currentSection: SectionsTypes
  selectedSection: SectionsTypes | null
  containerSetter: (value: SectionsTypes) => void
  handleContainerChangeFromInside: (value: SectionsTypes) => void
  firstSectionMainContainerRef: any
  secondSectionMainContainerRef: any
  thirdSectionMainContainerRef: any
  fourthSectionMainContainerRef: any
  galleryMainContainerRef: any
  currentTitleRef: any
}
const UpperNavigator: FunctionComponent<Props> = ({
  currentSection,
  selectedSection,
  containerSetter,
  handleContainerChangeFromInside,
  firstSectionMainContainerRef,
  secondSectionMainContainerRef,
  thirdSectionMainContainerRef,
  fourthSectionMainContainerRef,
  galleryMainContainerRef,
  currentTitleRef,
}) => {
  const elementRef = useRef<any>([])
  const timelineRef = useRef(gsap.timeline())
  const [isHoveringFirstSection, setIsHoveringFirstSection] = useState(false)
  const [isHoveringSecondSection, setIsHoveringSecondSection] = useState(false)
  const [isHoveringThirdSection, setIsHoveringThirdSection] = useState(false)
  const [isHoveringFourthSection, setIsHoveringFourthSection] = useState(false)
  const handleNavigatorPress = (value: SectionsTypes) => {
    if (selectedSection !== SectionsTypes.NONE && selectedSection !== null) {
      if (currentSection === SectionsTypes.FIRST_SECTIONS) {
        const context = gsap.context(() => {
          const tl = timelineRef.current

          tl.to(firstSectionMainContainerRef.current, {
            transform: 'scale(0)',
            opacity: 0,
            duration: 0.8,
            ease: 'expo.inOut',
            onComplete: () => {
              handleContainerChangeFromInside(value)
            },
          })
        })
        return () => context.revert()
      }
      if (currentSection === SectionsTypes.SECOND_SECTIONS) {
        const context = gsap.context(() => {
          const tl = timelineRef.current

          tl.to(secondSectionMainContainerRef.current, {
            transform: 'scale(0)',
            opacity: 0,
            duration: 0.8,
            ease: 'expo.inOut',
            onComplete: () => {
              handleContainerChangeFromInside(value)
            },
          })
        })
        return () => context.revert()
      }
      if (currentSection === SectionsTypes.THIRD_SECTIONS) {
        const context = gsap.context(() => {
          const tl = timelineRef.current

          tl.to(thirdSectionMainContainerRef.current, {
            transform: 'scale(0)',
            opacity: 0,
            duration: 0.8,
            ease: 'expo.inOut',
            onComplete: () => {
              handleContainerChangeFromInside(value)
            },
          })
        })
        return () => context.revert()
      }
      if (currentSection === SectionsTypes.FOURTH_SECTIONS) {
        const context = gsap.context(() => {
          const tl = timelineRef.current

          tl.to(fourthSectionMainContainerRef.current, {
            transform: 'scale(0)',
            opacity: 0,
            duration: 0.8,
            ease: 'expo.inOut',
            onComplete: () => {
              handleContainerChangeFromInside(value)
            },
          })
        })
        return () => context.revert()
      }
    } else {
      const context = gsap.context(() => {
        const tl = timelineRef.current

        tl.to(galleryMainContainerRef.current, {
          transform: 'scale(0)',
          opacity: 0,
          duration: 0.5,
          ease: 'expo.inOut',
        }).to(
          currentTitleRef.current,
          {
            transform: 'translateY(350%) scale(2.5)',
            opacity: 0,
            duration: 0.5,
            ease: 'expo.inOut',
            onComplete: () => {
              containerSetter(value)
            },
          },
          '<'
        )
      })
      return () => context.revert()
    }
  }
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
          if (currentSection !== SectionsTypes.FIRST_SECTIONS) {
            handleNavigatorPress(SectionsTypes.FIRST_SECTIONS)
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
          if (currentSection !== SectionsTypes.SECOND_SECTIONS) {
            handleNavigatorPress(SectionsTypes.SECOND_SECTIONS)
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
          if (currentSection !== SectionsTypes.THIRD_SECTIONS) {
            handleNavigatorPress(SectionsTypes.THIRD_SECTIONS)
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
          if (currentSection !== SectionsTypes.FOURTH_SECTIONS) {
            handleNavigatorPress(SectionsTypes.FOURTH_SECTIONS)
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
