import { Box, Button, Flex, Text } from '@chakra-ui/react'
import { Player } from '@lottiefiles/react-lottie-player'
import React, { FunctionComponent, useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
type Props = {
  setShouldPresentIntroduction: (value: boolean) => void
}
const IntroductionLayout: FunctionComponent<Props> = ({
  setShouldPresentIntroduction,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const titleRef = useRef<HTMLDivElement | null>(null)
  const timelineRef = useRef(gsap.timeline())
  const [isFirstPointerDone, setIsFirstPointerDone] = useState(false)
  const [isSecondPointerDone, setIsSecondPointerDone] = useState(false)
  const [isThirdPointerDone, setIsThirdPointerDone] = useState(false)
  const [isSecondPointerIsBeingDisplayed, setIsSecondPointerIsBeingDisplayed] =
    useState(false)
  const [isThirdPointerIsBeingDisplayed, setIsThirdPointerIsBeingDisplayed] =
    useState(false)
  const [textToDisplay, setTextToDisplay] = useState<string>(
    'Press for section details'
  )
  const handleFinishIntroduction = () => {
    setIsThirdPointerDone(true)
    localStorage.setItem('shouldPresentIntroduction', 'false')
    setShouldPresentIntroduction(false)
  }
  const handleNextClick = () => {
    if (!isFirstPointerDone) {
      const context = gsap.context(() => {
        const tl = timelineRef.current

        tl.to(titleRef.current, {
          transform: 'translateY(150%)',
          opacity: 0,
          duration: 0.3,
          ease: 'expo.inOut',
          onComplete: () => {
            setTextToDisplay('Navigate through sections')
            setIsFirstPointerDone(true)
            setIsSecondPointerIsBeingDisplayed(true)
          },
        }).to(titleRef.current, {
          transform: 'translateY(0%)',
          opacity: 1,
          duration: 0.3,
          ease: 'expo.inOut',
        })
      })
      return () => context.revert()
    }
    if (isFirstPointerDone && !isSecondPointerDone) {
      const context = gsap.context(() => {
        const tl = timelineRef.current

        tl.to(titleRef.current, {
          transform: 'translateY(150%)',
          opacity: 0,
          duration: 0.3,
          ease: 'expo.inOut',
          onComplete: () => {
            setTextToDisplay('Skip through sections')
            setIsSecondPointerDone(true)
            setIsThirdPointerIsBeingDisplayed(true)
          },
        }).to(titleRef.current, {
          transform: 'translateY(0%)',
          opacity: 1,
          duration: 0.3,
          ease: 'expo.inOut',
        })
      })
      return () => context.revert()
    }
    if (isFirstPointerDone && isSecondPointerDone && !isThirdPointerDone) {
      const context = gsap.context(() => {
        const tl = timelineRef.current

        tl.to(titleRef.current, {
          transform: 'translateY(150%)',
          opacity: 0,
          duration: 0.5,
          ease: 'expo.inOut',
          onComplete: handleFinishIntroduction,
        }).to(containerRef.current, {
          transform: 'scale(0)',
          opacity: 0,
          duration: 1,
          ease: 'expo.inOut',
        })
      })
      return () => context.revert()
    }
  }

  useEffect(() => {
    const context = gsap.context(() => {
      const tl = timelineRef.current

      tl.to(titleRef.current, {
        transform: 'translateY(0%) ',
        opacity: 1,
        duration: 0.3,
        ease: 'expo.inOut',
      })
    })
    return () => context.revert()
  }, [])
  return (
    <Box ref={containerRef}>
      <Box
        pos={'absolute'}
        zIndex={99999999999999}
        h={'100vh'}
        w={'100vw'}
        bg={'#121212'}
        opacity={0.7}
      ></Box>
      <Box
        w={'100%'}
        h={44}
        pos={'absolute'}
        top={'25%'}
        left={0}
        zIndex={999999999999999}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Box overflow={'hidden'}>
          <Text
            fontWeight={700}
            fontSize={{ base: 20, md: 40 }}
            letterSpacing={'widest'}
            opacity={0}
            transform={'translateY(150%)'}
            color={'white'}
            ref={titleRef}
          >
            {textToDisplay}
          </Text>
        </Box>
      </Box>
      <Box
        pos={'absolute'}
        top={8}
        right={16}
        zIndex={999999999999999}
        color={'white'}
        fontSize={'3xl'}
        fontWeight={600}
        borderWidth={1}
        px={3}
        as='button'
        _hover={{
          borderColor: 'red.500',
          color: 'red.500',
        }}
        borderRadius={'50%'}
        onClick={handleFinishIntroduction}
      >
        X
      </Box>
      <Box
        pos={'absolute'}
        bottom={15}
        w={'100%'}
        zIndex={999999999999999}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        borderRadius={'lg'}
        flexDir={'column'}
        gap={4}
      >
        <Button
          colorScheme='whiteAlpha'
          w={{ base: 20, md: 40 }}
          onClick={handleNextClick}
        >
          {isFirstPointerDone && isSecondPointerDone ? 'Done' : 'Next'}
        </Button>

        <Flex flexDir={'row'} gap={2}>
          <Box w={2} h={2} bg={'white'} borderRadius={'50%'} opacity={1}></Box>
          <Box
            w={2}
            h={2}
            bg={'white'}
            borderRadius={'50%'}
            opacity={
              isSecondPointerIsBeingDisplayed || isSecondPointerDone ? 1 : 0.2
            }
          ></Box>
          <Box
            w={2}
            h={2}
            bg={'white'}
            borderRadius={'50%'}
            opacity={isThirdPointerIsBeingDisplayed ? 1 : 0.2}
          ></Box>
        </Flex>
      </Box>
      {!isFirstPointerDone && !isSecondPointerDone && !isThirdPointerDone && (
        <Player
          autoplay={true}
          loop={true}
          src='/animation/pointer.json'
          style={{
            transition: 'ease-in-out 0.4s',
            height: window.innerWidth < 1100 ? `100px` : `400px`,
            width: window.innerWidth < 1100 ? `100px` : `400px`,
            color: 'red',
            position: 'absolute',
            opacity: 1,
            right: window.innerWidth < 700 ? 80 : 180,
            bottom:
              window.innerWidth < 400
                ? 340
                : window.innerWidth < 600
                ? 370
                : window.innerWidth < 800
                ? 420
                : window.innerWidth < 1000
                ? 500
                : window.innerWidth < 1200
                ? 500
                : 50,
            zIndex: 999999999999999,
          }}
        />
      )}
      {isFirstPointerDone && !isSecondPointerDone && !isThirdPointerDone && (
        <>
          <Player
            autoplay={true}
            loop={true}
            src='/animation/pointer.json'
            style={{
              transition: 'ease-in-out 0.4s',
              height: window.innerWidth < 700 ? `50px` : `100px`,
              width: window.innerWidth < 700 ? `50px` : `100px`,
              color: 'red',
              position: 'absolute',
              transform: 'rotateY(180deg)',
              opacity: 1,
              right: 80,
              bottom: 0,
              zIndex: 999999999999999,
            }}
          />
          <Player
            autoplay={true}
            loop={true}
            src='/animation/pointer.json'
            style={{
              transition: 'ease-in-out 0.4s',
              height: window.innerWidth < 700 ? `50px` : `100px`,
              width: window.innerWidth < 700 ? `50px` : `100px`,
              color: 'red',
              position: 'absolute',
              opacity: 1,
              left: 80,
              bottom: 0,
              zIndex: 999999999999999,
            }}
          />
        </>
      )}
      {isFirstPointerDone && isSecondPointerDone && !isThirdPointerDone && (
        <Player
          autoplay={true}
          loop={true}
          src='/animation/pointer.json'
          style={{
            transition: 'ease-in-out 0.4s',
            height: `100px`,
            width: `100px`,
            color: 'red',
            position: 'absolute',
            opacity: 1,
            left: '49%',
            top: -25,
            zIndex: 999999999999999,
          }}
        />
      )}
    </Box>
  )
}

export default IntroductionLayout
