import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import { SectionsTypes } from '../../../shared/enums/sections-types.enum'
import { Box, Image, Flex, Text } from '@chakra-ui/react'
import { gsap } from 'gsap'
import AboutMeMainContainer from '../ThirdSection/AboutMeMainContainer'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { HiArrowNarrowLeft } from 'react-icons/hi'
import SkillsMainContainer from '../SecondSection'
import HeroContainer from '../FirstSection/HeroContainer'
import UpperNavigator from './UpperNavigator'
import ContactMeMainContainer from '../FourthSection'
import IntroductionLayout from './IntroductionLayout'
import { TfiInfoAlt } from 'react-icons/tfi'

const MainContainer: FunctionComponent = () => {
  const [selectedSection, setSelectedSection] = useState<SectionsTypes | null>(
    null
  )
  const [currentSection, setCurrentSection] = useState(
    SectionsTypes.FIRST_SECTIONS
  )
  const [currentTitle, setCurrentTitle] = useState('Introduction')
  const [currentImage, setCurrentImage] = useState('./introductionSection.png')
  const [isHoveringScrollPanel, setIsHoveringScrollPanel] = useState(false)
  const [isNavigating, setIsNavigating] = useState(false)
  const imageContainerRef = useRef(null)
  const imageRef = useRef(null)
  const titleContainerRef = useRef(null)
  const titleRef = useRef(null)
  const leftArrowRef = useRef(null)
  const rightArrowRef = useRef(null)
  const navbarTitleRef = useRef(null)
  const infoIconRef = useRef(null)
  const backButtonRef = useRef(null)
  const leftArrowContainerRef = useRef(null)
  const rightArrowContainerRef = useRef(null)
  const upperContainerCoverRef = useRef(null)
  const upperContainerOverlayRef = useRef(null)
  const lowerContainerOverlayRef = useRef(null)
  const lowerContainerCoverRef = useRef(null)
  const lowerBorderRef = useRef(null)
  const upperBorderRef = useRef(null)
  const firstSectionMainContainerRef = useRef(null)
  const secondSectionMainContainerRef = useRef(null)
  const thirdSectionMainContainerRef = useRef(null)
  const fourthSectionMainContainerRef = useRef(null)
  const galleryMainContainerRef = useRef(null)
  const [didMount, setDidMount] = useState(false)
  const [shouldPresentIntroduction, setShouldPresentIntroduction] =
    useState(false)
  const timelineRef = useRef(gsap.timeline())

  const setContainerToFirstSection = useCallback(() => {
    setCurrentSection(SectionsTypes.FIRST_SECTIONS)
    setCurrentTitle('Introduction')
    setCurrentImage('./introductionSection.png')
  }, [])
  const setContainerToSecondSection = useCallback(() => {
    setCurrentSection(SectionsTypes.SECOND_SECTIONS)
    setCurrentTitle('Skills      ')
    setCurrentImage('./skillSection.png')
  }, [])
  const setContainerToThirdSection = useCallback(() => {
    setCurrentSection(SectionsTypes.THIRD_SECTIONS)
    setCurrentTitle('Portfolio   ')
    setCurrentImage('./portfolioSection.png')
  }, [])
  const setContainerToFourthSection = useCallback(() => {
    setCurrentSection(SectionsTypes.FOURTH_SECTIONS)
    setCurrentTitle('Contact     ')
    setCurrentImage('./contactSection.png')
  }, [])
  const containerSetter = (wantedContainer: SectionsTypes) => {
    if (wantedContainer === SectionsTypes.FIRST_SECTIONS) {
      setContainerToFirstSection()
    }
    if (wantedContainer === SectionsTypes.SECOND_SECTIONS) {
      setContainerToSecondSection()
    }
    if (wantedContainer === SectionsTypes.THIRD_SECTIONS) {
      setContainerToThirdSection()
    }
    if (wantedContainer === SectionsTypes.FOURTH_SECTIONS) {
      setContainerToFourthSection()
    }
    const context = gsap.context(() => {
      const tl = timelineRef.current

      tl.to(galleryMainContainerRef.current, {
        transform: 'scale(1)',
        opacity: 1,
        duration: 0.5,
        delay: 0.1,
        ease: 'expo.inOut',
      }).to(
        titleRef.current,
        {
          transform: 'translateY(0%) scale(2.5)',
          opacity: 1,
          duration: 0.5,
          ease: 'expo.inOut',
        },
        '<'
      )
    })
    return () => context.revert()
  }
  const handleContainerChangeFromInside = (selectedSection: SectionsTypes) => {
    const context = gsap.context(() => {
      const tl = gsap.timeline()
      tl.to(backButtonRef.current, {
        xPercent: -100,
        opacity: 0,
        duration: 0.1,
        ease: 'expo.inOut',
        onComplete: () => {
          setSelectedSection(selectedSection)
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
        },
      }).to(backButtonRef.current, {
        xPercent: 25,
        opacity: 1,
        delay: 2,
        duration: 1.2,
        ease: 'expo.inOut',
      })
    })
    return () => context.revert()
  }
  const handleContainerClick = () => {
    const context = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => setSelectedSection(currentSection),
      })
      tl.to(
        titleRef.current,
        {
          transform: 'translateY(350%) scale(2.5)',
          duration: 1.2,
          ease: 'expo.inOut',
        },
        '<'
      )
        .to(
          rightArrowRef.current,
          {
            transform: 'translateX(400%)',
            duration: 1.2,
            ease: 'expo.inOut',
          },
          '<'
        )
        .to(
          leftArrowRef.current,
          {
            transform: 'translateX(-400%)',
            duration: 1.2,
            ease: 'expo.inOut',
          },
          '<'
        )
        .to(
          [rightArrowContainerRef.current, leftArrowContainerRef.current],
          {
            transform: 'translateY(100%)',
            opacity: 1,
            duration: 1.2,
            ease: 'expo.inOut',
          },
          '<50%'
        )
        .to(
          imageRef.current,
          {
            opacity: 0,
            duration: 1.2,
            ease: 'expo.inOut',
          },
          '<20%'
        )
        .to(
          [navbarTitleRef.current, infoIconRef.current],
          {
            yPercent: -200,
            opacity: 1,
            duration: 0.6,
            ease: 'expo.inOut',
          },
          '<5%'
        )
        .to(
          titleContainerRef.current,
          {
            cursor: 'auto',
            visibility: 'hidden',
          },
          '<'
        )
    })
    return () => context.revert()
  }

  const handleBackPress = useCallback(() => {
    const context = gsap.context(() => {
      const tl = timelineRef.current
      tl.to(
        titleContainerRef.current,
        {
          visibility: 'visible',
          cursor: 'pointer',
        },
        '<'
      )
        .to(backButtonRef.current, {
          xPercent: -100,
          duration: 0.3,
          opacity: 0,
          ease: 'expo.inOut',
          onComplete: () => {
            setSelectedSection(SectionsTypes.NONE)
          },
        })
        .fromTo(
          imageRef.current,
          {
            // transform: 'scale(0.7)',
            opacity: 0,
          },
          {
            // transform: 'scale(1)',
            opacity: 0.2,
            duration: 1,
            ease: 'expo.inOut',
          }
        )
        .to(
          titleRef.current,
          {
            transform: 'translateY(0%) scale(2.5)',
            duration: 1,
            ease: 'expo.inOut',
          },
          '<'
        )
        .to(
          [rightArrowContainerRef.current, leftArrowContainerRef.current],
          {
            transform: 'translateY(0%)',
            duration: 1,
            ease: 'expo.inOut',
          },
          '<'
        )
        .to(
          [rightArrowRef.current, leftArrowRef.current],
          {
            transform: 'translateX(0%)',
            duration: 1,
            ease: 'expo.inOut',
            onComplete: () => {
              setDidMount(true)
            },
          },
          '<80%'
        )
    })
    return () => context.revert()
  }, [])
  const goLeft = useCallback(() => {
    setIsNavigating(true)
    const context = gsap.context(() => {
      const tl = timelineRef.current
      tl.to('.charRef', {
        xPercent: 400,
        opacity: 0,
        stagger: 0.01,
        ease: 'expo.inOut',
      })
        .to(
          imageContainerRef.current,
          {
            xPercent: -100,
            opacity: 0,
            ease: 'expo.inOut',
          },
          '<15%'
        )
        .to(imageContainerRef.current, {
          xPercent: 400,
          duration: 0.00001,
          onComplete: () => {
            if (currentSection === SectionsTypes.FIRST_SECTIONS) {
              setContainerToFourthSection()
            } else if (currentSection === SectionsTypes.FOURTH_SECTIONS) {
              setContainerToThirdSection()
            } else if (currentSection === SectionsTypes.THIRD_SECTIONS) {
              setContainerToSecondSection()
            } else if (currentSection === SectionsTypes.SECOND_SECTIONS) {
              setContainerToFirstSection()
            }
          },
        })
        .to('.charRef', {
          xPercent: 0,
          opacity: 1,
          stagger: 0.01,
          ease: 'expo.inOut',
        })
        .to(
          imageContainerRef.current,
          {
            xPercent: 0,
            opacity: 1,
            ease: 'expo.inOut',
            onComplete: () => setIsNavigating(false),
          },
          '<'
        )
    })

    return () => context.revert()
  }, [
    currentSection,
    setContainerToFirstSection,
    setContainerToSecondSection,
    setContainerToThirdSection,
    setContainerToFourthSection,
  ])
  const goRight = useCallback(() => {
    setIsNavigating(true)
    const context = gsap.context(() => {
      const tl = timelineRef.current
      tl.to('.charRef', {
        xPercent: -400,
        opacity: 0,
        stagger: 0.01,
        ease: 'expo.inOut',
      })
        .to(
          imageContainerRef.current,
          {
            xPercent: 100,
            opacity: 0,
            ease: 'expo.inOut',
          },
          '<15%'
        )
        .to(imageContainerRef.current, {
          xPercent: -400,
          duration: 0.00001,
          onComplete: () => {
            if (currentSection === SectionsTypes.FIRST_SECTIONS) {
              setContainerToSecondSection()
            } else if (currentSection === SectionsTypes.SECOND_SECTIONS) {
              setContainerToThirdSection()
            } else if (currentSection === SectionsTypes.THIRD_SECTIONS) {
              setContainerToFourthSection()
            } else if (currentSection === SectionsTypes.FOURTH_SECTIONS) {
              setContainerToFirstSection()
            }
          },
        })
        .to('.charRef', {
          xPercent: 0,
          opacity: 1,
          stagger: 0.01,
          ease: 'expo.inOut',
        })
        .to(
          imageContainerRef.current,
          {
            xPercent: 0,
            opacity: 1,
            ease: 'expo.inOut',
            onComplete: () => setIsNavigating(false),
          },
          '<'
        )
    })

    return () => context.revert()
  }, [
    currentSection,
    setContainerToFirstSection,
    setContainerToSecondSection,
    setContainerToThirdSection,
    setContainerToFourthSection,
  ])

  useEffect(() => {
    if (selectedSection === SectionsTypes.FIRST_SECTIONS) {
      const context = gsap.context(() => {
        const tl = timelineRef.current
        tl.fromTo(
          backButtonRef.current,
          {
            xPercent: -200,
          },
          {
            xPercent: 25,
            duration: 0.3,
            opacity: 1,
            ease: 'bounce.out',
            delay: 3,
          }
        )
      })
      return () => context.revert()
    } else if (selectedSection === SectionsTypes.SECOND_SECTIONS) {
      const context = gsap.context(() => {
        const tl = timelineRef.current
        tl.fromTo(
          backButtonRef.current,
          {
            xPercent: -200,
          },
          {
            xPercent: 25,
            opacity: 1,
            duration: 0.3,
            ease: 'bounce.out',
            delay: 3,
          }
        )
      })
      return () => context.revert()
    } else if (selectedSection !== SectionsTypes.NONE) {
      const context = gsap.context(() => {
        const tl = timelineRef.current
        tl.fromTo(
          backButtonRef.current,
          {
            xPercent: -200,
          },
          {
            xPercent: 25,
            opacity: 1,
            duration: 0.6,
            ease: 'bounce.out',
          }
        )
      })
      return () => context.revert()
    } else if (selectedSection === SectionsTypes.NONE) {
      const context = gsap.context(() => {
        const tl = timelineRef.current
        tl.fromTo(
          [navbarTitleRef.current, infoIconRef.current],
          {
            yPercent: -40,
          },
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.4,
            delay: 0.4,
            ease: 'expo.inOut',
          },
          '<'
        )
      })
      return () => context.revert()
    }
  }, [selectedSection])
  useEffect(() => {
    const context = gsap.context(() => {
      const tl = timelineRef.current

      tl.to([lowerBorderRef.current, upperBorderRef.current], {
        scaleX: 1,
        opacity: 1,
        duration: 0.6,
        ease: 'expo.inOut',
      })
        .to(
          [upperContainerOverlayRef.current, lowerContainerOverlayRef.current],
          {
            height: '0%',
          }
        )
        .to(
          [lowerBorderRef.current, upperBorderRef.current],
          {
            top: '0%',
            opacity: 0,
          },
          '<'
        )
        // .fromTo(
        //   imageRef.current,
        //   {
        //     transform: 'scale(0.7)',
        //     opacity: 0,
        //   },
        //   {
        //     transform: 'scale(1)',
        //     opacity: 0.2,
        //     duration: 1,
        //     ease: 'expo.inOut',
        //   }
        // )
        .fromTo(
          titleRef.current,
          {
            transform: 'translateY(350%) scale(2.5)',
          },
          {
            transform: 'translateY(0%) scale(2.5)',
            duration: 1,
            ease: 'expo.inOut',
          },
          '<'
        )
        .fromTo(
          [rightArrowContainerRef.current, leftArrowContainerRef.current],
          {
            transform: 'translateY(100%)',
            duration: 1,
            ease: 'expo.inOut',
          },
          {
            transform: 'translateY(0%)',
            duration: 1,
            ease: 'expo.inOut',
          },
          '<'
        )
        .fromTo(
          leftArrowRef.current,
          {
            transform: 'translateX(-400%)',
          },
          {
            transform: 'translateX(0%)',
            duration: 1,
            ease: 'expo.inOut',
          },
          '<20%'
        )
        .fromTo(
          rightArrowRef.current,
          {
            transform: 'translateX(400%)',
          },
          {
            transform: 'translateX(0%)',
            duration: 1,
            ease: 'expo.inOut',
          },
          '<'
        )
        .fromTo(
          [navbarTitleRef.current, infoIconRef.current],
          {
            yPercent: -200,
          },
          {
            yPercent: 0,
            opacity: 1,
            duration: 1,
            ease: 'expo.inOut',
            onComplete: () => {
              setDidMount(true)
              const value = localStorage.getItem('shouldPresentIntroduction')
              if (typeof value === 'string') {
                if (value === 'true') {
                  setShouldPresentIntroduction(true)
                } else if (value === 'false') {
                  setShouldPresentIntroduction(false)
                }
              } else {
                setShouldPresentIntroduction(true)
              }
            },
          },
          '<-2%'
        )
    })
    return () => context.revert()
  }, [])
  useEffect(() => {
    const left: any = leftArrowContainerRef.current
    const right: any = rightArrowContainerRef.current

    right.addEventListener('mouseenter', () => {
      setIsHoveringScrollPanel(true)
      gsap.to(right, {
        opacity: 1,
        borderTopWidth: 1,
        borderTopColor: 'white',
        ease: 'power2.out',
        duration: 0.3,
      })
    })

    right.addEventListener('mouseenter', () => {
      setIsHoveringScrollPanel(true)
      gsap.to(rightArrowRef.current, {
        scale: 1.5,
        color: 'white',
        ease: 'bounce.out',
        duration: 0.3,
      })
    })

    right.addEventListener('mouseleave', () => {
      setIsHoveringScrollPanel(false)
      gsap.to(right, {
        opacity: 0.5,
        borderTopWidth: 1,
        borderTopColor: 'white',
        ease: 'power2.out',
        duration: 0.3,
        x: 0,
      })
    })
    right.addEventListener('mouseleave', () => {
      setIsHoveringScrollPanel(false)
      gsap.to(rightArrowRef.current, {
        scale: 1,
        color: 'white',
        ease: 'bounce.out',
        duration: 0.3,
      })
    })
    left.addEventListener('mouseenter', () => {
      setIsHoveringScrollPanel(true)
      gsap.to(left, {
        opacity: 1,
        borderTopWidth: 1,
        borderTopColor: 'white',
        ease: 'power2.out',
        duration: 0.3,
      })
    })
    left.addEventListener('mouseenter', () => {
      setIsHoveringScrollPanel(true)
      gsap.to(leftArrowRef.current, {
        scale: 1.5,
        color: 'white',
        ease: 'bounce.out',
        duration: 0.3,
      })
    })

    left.addEventListener('mouseleave', () => {
      setIsHoveringScrollPanel(false)
      gsap.to(left, {
        opacity: 0.5,
        borderTopWidth: 1,
        borderTopColor: 'white',
        ease: 'power2.out',
        duration: 0.3,
        x: 0,
      })
    })
    left.addEventListener('mouseleave', () => {
      setIsHoveringScrollPanel(false)
      gsap.to(leftArrowRef.current, {
        scale: 1,
        color: 'white',
        ease: 'bounce.out',
        duration: 0.3,
        x: 0,
      })
    })

    return () => {
      right.removeEventListener('mouseenter', null)
      left.removeEventListener('mouseleave', null)
      right.removeEventListener('mouseleave', null)
      left.removeEventListener('mouseenter', null)
    }
  }, [])

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (
        (!isNavigating && selectedSection === SectionsTypes.NONE) ||
        (!isNavigating && selectedSection === null)
      ) {
        if (event.key === 'ArrowLeft') {
          goLeft()
        } else if (event.key === 'ArrowRight') {
          goRight()
        }
      }
    }

    document.addEventListener('keydown', handleKeyPress)

    return () => {
      document.removeEventListener('keydown', handleKeyPress)
    }
  }, [isNavigating, selectedSection, goLeft, goRight])
  return (
    <Box overflow='hidden' bg={'#121212'} h={'100%'}>
      {selectedSection === SectionsTypes.FIRST_SECTIONS && (
        <HeroContainer
          handleContainerChangeFromInside={handleContainerChangeFromInside}
          containerRef={firstSectionMainContainerRef}
        />
      )}
      {selectedSection === SectionsTypes.SECOND_SECTIONS && (
        <SkillsMainContainer
          handleContainerChangeFromInside={handleContainerChangeFromInside}
          containerRef={secondSectionMainContainerRef}
        />
      )}
      {selectedSection === SectionsTypes.THIRD_SECTIONS && (
        <AboutMeMainContainer
          handleContainerChangeFromInside={handleContainerChangeFromInside}
          containerRef={thirdSectionMainContainerRef}
        />
      )}
      {selectedSection === SectionsTypes.FOURTH_SECTIONS && (
        <ContactMeMainContainer
          handleContainerChangeFromInside={handleContainerChangeFromInside}
          containerRef={fourthSectionMainContainerRef}
        />
      )}

      <Box
        pos={'absolute'}
        w={'100%'}
        h={'50%'}
        bg={'white'}
        zIndex={9999}
        ref={upperContainerOverlayRef}
      ></Box>
      {didMount && shouldPresentIntroduction && (
        <IntroductionLayout
          setShouldPresentIntroduction={setShouldPresentIntroduction}
        />
      )}
      <Box
        pos={'absolute'}
        w={'100%'}
        h={'50%'}
        bg={'white'}
        bottom={0}
        zIndex={9999}
        ref={lowerContainerOverlayRef}
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
        ref={upperBorderRef}
        bg={'#121212'}
        zIndex={9999}
        top={'50%'}
        pos={'absolute'}
      ></Box>
      <Box w={'100vw'} h={'100vh'} ref={galleryMainContainerRef}>
        <Flex
          display={'flex'}
          opacity={1}
          height={'100vh'}
          width={'100vw'}
          pos={'relative'}
          overflow={'hidden'}
          ref={imageContainerRef}
          cursor={'pointer'}
          onClick={handleContainerClick}
        >
          <Image
            ref={imageRef}
            src={currentImage}
            alt='Image 2'
            opacity={0.2}
            w={'100%'}
            h={'100%'}
            objectFit={{
              base: 'contain',
              lg:
                currentImage === './portfolioSection.png' ? 'cover' : 'contain',
            }}
          />
          <Box
            w={'100%'}
            h={'50%'}
            pos={'absolute'}
            top={0}
            ref={upperContainerCoverRef}
          ></Box>
          <Box
            w={'100%'}
            h={'50%'}
            pos={'absolute'}
            bottom={0}
            ref={lowerContainerCoverRef}
          ></Box>
        </Flex>
      </Box>
      <Box
        overflow={'hidden'}
        w={'100%'}
        display={'flex'}
        pos={'absolute'}
        zIndex={999}
        top={'50%'}
        left={'50%'}
        p={{ base: 4, lg: 10 }}
        transform={{ base: 'translate(-50%,-20%)', lg: 'translate(-50%,-20%)' }}
        justifyContent={'center'}
        alignItems={'center'}
        ref={titleContainerRef}
        onClick={handleContainerClick}
        cursor={'pointer'}
      >
        <Text
          fontSize={{ base: 24, md: 40, lg: 96 }}
          color={'white'}
          ref={titleRef}
          display={'flex'}
          fontFamily={'Six Caps'}
          transform={'scale(2.5)'}
          letterSpacing={'widest'}
        >
          {currentTitle.split('').map((letter, index) => (
            <span key={index}>
              <div className='charRef' style={{ opacity: 1 }}>
                {letter}
              </div>
            </span>
          ))}
        </Text>
      </Box>
      <Flex
        w={'100%'}
        h={{ base: '8%', lg: '10%' }}
        pos={'absolute'}
        flexDir={'row'}
        alignItems={'center'}
        bottom={0}
        overflow={'hidden'}
      >
        <Box
          w={'50%'}
          h={'100%'}
          alignItems={'center'}
          display={'flex'}
          fontSize={{ base: 28, lg: 44 }}
          pl={{ base: 8, lg: 20 }}
          opacity={0.5}
          onClick={goLeft}
          cursor={'pointer'}
          borderTopWidth={1}
          ref={leftArrowContainerRef}
          color={'white'}
          as='button'
          disabled={isNavigating}
        >
          <Box ref={leftArrowRef}>
            <HiArrowNarrowLeft />
          </Box>
        </Box>
        {/* {isHoveringScrollPanel && <Box h={'100%'} w={'1px'} bg={'white'}></Box>} */}
        <Box
          w={'50%'}
          h={'100%'}
          alignItems={'center'}
          justifyContent={'flex-end'}
          display={'flex'}
          opacity={0.5}
          fontSize={{ base: 28, lg: 44 }}
          pr={{ base: 8, lg: 20 }}
          onClick={() => !isNavigating && goRight()}
          borderTopWidth={1}
          cursor={'pointer'}
          ref={rightArrowContainerRef}
          textColor={'white'}
          as='button'
          disabled={isNavigating}
        >
          <Box ref={rightArrowRef}>
            <HiArrowNarrowRight />
          </Box>
        </Box>
      </Flex>

      <Box
        pos={'absolute'}
        zIndex={999}
        top={0}
        left={0}
        w={'100%'}
        h={'60px'}
        fontWeight={800}
        color={'white'}
        fontSize={20}
        fontFamily={'Brush Script, cursive'}
      >
        <UpperNavigator
          currentSection={currentSection}
          selectedSection={selectedSection}
          containerSetter={containerSetter}
          handleContainerChangeFromInside={handleContainerChangeFromInside}
          firstSectionMainContainerRef={firstSectionMainContainerRef}
          secondSectionMainContainerRef={secondSectionMainContainerRef}
          thirdSectionMainContainerRef={thirdSectionMainContainerRef}
          fourthSectionMainContainerRef={fourthSectionMainContainerRef}
          galleryMainContainerRef={galleryMainContainerRef}
          currentTitleRef={titleRef}
        />
        {selectedSection !== SectionsTypes.NONE && selectedSection !== null ? (
          <Box h={'100%'} overflow={'hidden'} w={44} pt={2} zIndex={99999999}>
            <Box
              ref={backButtonRef}
              w={10}
              borderWidth={1}
              opacity={0}
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}
              borderRadius={'lg'}
              onClick={() => handleBackPress()}
              zIndex={99999999}
              cursor={'pointer'}
            >
              <Text alignSelf={'center'} color={'white'} fontSize={28}>
                <HiArrowNarrowLeft />
              </Text>
            </Box>
          </Box>
        ) : (
          <Flex
            h={'100%'}
            p={{ base: 4, lg: 8 }}
            overflow={'hidden'}
            justifyContent={'space-between'}
            alignItems={'center'}
          >
            <Text
              alignSelf={'center'}
              ref={navbarTitleRef}
              opacity={0}
              fontSize={{ base: 16, lg: 20 }}
            >
              David Botros
            </Text>
            <Box
              w={8}
              h={'100%'}
              ref={infoIconRef}
              opacity={0}
              zIndex={99999999999}
              pos={'absolute'}
              right={10}
              display={'flex'}
              as='button'
              _hover={{
                opacity: 0.1,
              }}
              justifyContent={'center'}
              alignItems={'center'}
              onClick={() => {
                localStorage.setItem('shouldPresentIntroduction', 'true')
                setShouldPresentIntroduction(true)
              }}
            >
              <TfiInfoAlt />
            </Box>
          </Flex>
        )}
      </Box>
    </Box>
  )
}

export default MainContainer
