import { Box, Button, Flex, Text, Image } from '@chakra-ui/react'
import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import HeroCover from './HeroCover'
import { gsap } from 'gsap'
import { SectionsTypes } from '../../../shared/enums/sections-types.enum'
import InnerNavigatorContainer from '../../shared/InnerNavigatorContainer'

type Props = {
  handleContainerChangeFromInside: (value: SectionsTypes) => void
}
const HeroContainer: FunctionComponent<Props> = ({
  handleContainerChangeFromInside,
}) => {
  const [heroCoverSmallScale, setSHeroCoverSmallScale] = useState<number>(740)
  const [heroCoverBigScale, setSHeroCoverBigScale] = useState<number>(2000)
  const [heroWidthScale, setHeroWidthScale] = useState(450)
  const [isHeroVisible, setIsHeroVisible] = useState(false)
  const timelineRef = useRef(gsap.timeline())
  const mainContainerRef = useRef(null)
  const textRef = useRef<any>([])
  const creativeTextRef = useRef(null)
  const frontendTextRef = useRef(null)
  const developerTextRef = useRef(null)
  const contactButtonRef = useRef(null)

  const handleMouseEnter = useCallback(() => {
    setSHeroCoverSmallScale(0)
    setSHeroCoverBigScale(0)
    setHeroWidthScale(0)
  }, [])
  const handleMouseLeave = useCallback(() => {
    setSHeroCoverSmallScale(740)
    setSHeroCoverBigScale(2000)
    setHeroWidthScale(450)
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setIsHeroVisible(true)
    }, 1300)
    setTimeout(() => {
      handleMouseEnter()
    }, 1600)
  }, [handleMouseEnter])
  useEffect(() => {
    const context = gsap.context(() => {
      const tl = timelineRef.current

      tl.to(creativeTextRef.current, {
        opacity: 1,
        duration: 0.5,
        ease: 'expo.inOut',
      })
        .fromTo(
          frontendTextRef.current,
          {
            top: 1000,
            skewY: 70,
          },
          {
            top: 30,
            opacity: 1,
            skewY: 0,
            duration: 1,
            ease: 'expo.inOut',
          }
        )

        .fromTo(
          developerTextRef.current,
          {
            top: 1000,
            skewY: 70,
          },
          {
            top: 25,
            opacity: 1,
            skewY: 0,
            duration: 1,
            ease: 'expo.inOut',
          },
          '<'
        )
        .fromTo(
          textRef.current,
          {
            transform: 'translateY(150%)',
            skewY: 5,
          },
          {
            transform: 'translateY(0%)',
            top: 25,
            skewY: 0,
            opacity: 1,
            duration: 1,
            delay: 0.3,
            ease: 'expo.inOut',
          }
        )
        .to(
          contactButtonRef.current,
          {
            bottom: window.innerWidth > 1000 ? 20 : 75,
            opacity: 1,
            ease: 'expo.inOut',
          },
          '<55%'
        )
    })
    return () => context.revert()
  }, [])

  return (
    <Box bg={'#121212'} h={'100%'} w={'100%'} ref={mainContainerRef}>
      <Box
        w={'100vw'}
        h={'100vh'}
        overflow={'hidden'}
        bgImage={'./Hero.jpeg'}
        backgroundRepeat={'no-repeat'}
        backgroundSize={'contain'}
        pos={'absolute'}
      >
        <Box
          w={'100vw'}
          h={'100vh'}
          position='absolute'
          top='0'
          left='0'
          zIndex={2}
          bg={'rgba(0,0,0,0.3)'}
        />
        <Image
          src='./Hero.jpeg'
          alt='Reflection'
          className='reflection-image'
          backgroundSize={'cover'}
        />

        <HeroCover
          heroCoverBigScale={heroCoverBigScale}
          heroCoverSmallScale={heroCoverSmallScale}
          heroWidthScale={heroWidthScale}
          isHeroVisible={isHeroVisible}
        />
        <InnerNavigatorContainer
          containerRef={mainContainerRef}
          handleContainerChangeFromInside={handleContainerChangeFromInside}
          nextSection={SectionsTypes.SECOND_SECTIONS}
          delay={2.5}
        />
        <Flex
          flexDir={{ base: 'column', lg: 'row' }}
          pos={'absolute'}
          top={0}
          left={0}
        >
          <Flex
            h={{ base: '75vh', lg: '100vh' }}
            w={{ base: '100vw', lg: '50vw' }}
            flexDir={'row'}
          >
            <Flex
              fontWeight={'extrabold'}
              mt={{ base: '20%', lg: '34.5%' }}
              ml={{ base: 2, lg: 6 }}
              w={'100%'}
              flexDir={'column'}
              pos={'relative'}
              zIndex={3}
            >
              <Box
                fontSize={{ base: 24, lg: 32, xl: 40 }}
                color={'#E9DAC4'}
                w={'100%'}
                fontFamily={'cursive'}
                overflow={'hidden'}
              >
                <Text ref={creativeTextRef} opacity={0}>
                  creative
                </Text>
              </Box>
              <Box
                fontWeight={{ base: 500, lg: 500 }}
                fontSize={96}
                w={'100%'}
                color={'white'}
                fontFamily={'Six Caps'}
                overflow={'hidden'}
                pos={'relative'}
                h={{ base: '28.5%', md: '35%', lg: '18%', xl: '50%' }}
              >
                <Text
                  pos={'absolute'}
                  left={{ base: 3, xl: 128 }}
                  transform={{
                    base: 'translateY(-22%) translateX(32%) scaleY(1.8) scaleX(1.8)',
                    md: 'translateY(0%) translateX(65%) scaleY(2.5) scaleX(2.5)',
                    xl: 'translateY(7%) scaleY(2.85) scaleX(2.5) ',
                  }}
                  ref={frontendTextRef}
                  opacity={0}
                >
                  FRONTEND
                </Text>
              </Box>
              <Box
                fontWeight={{ base: 500, lg: 500 }}
                fontSize={96}
                w={'100%'}
                color={'white'}
                fontFamily={'Six Caps'}
                pos={'relative'}
                overflow={'hidden'}
                h={{ base: '28%', md: '35%', lg: '18%', xl: '50%' }}
              >
                <Text
                  pos={'absolute'}
                  left={{ base: 3, xl: 133 }}
                  transform={{
                    base: 'translateY(-18%) translateX(32%) scaleY(1.8) scaleX(1.8)',
                    md: 'translateY(2%) translateX(65%) scaleY(2.5) scaleX(2.5)',
                    xl: 'translateY(10%) scaleY(2.85) scaleX(2.5) ',
                  }}
                  ref={developerTextRef}
                  opacity={0}
                >
                  DEVELOPER
                </Text>
              </Box>
            </Flex>
          </Flex>
          <Flex
            h={{ base: '25vh', lg: '100vh' }}
            w={{ base: '100vw', lg: '50vw' }}
            overflow={'hidden'}
            mt={{ base: 12, md: 0 }}
          >
            <Box
              h={'70%'}
              fontSize={24}
              fontWeight={600}
              mt={12}
              pr={'5%'}
              zIndex={3}
              textColor={'whitesmoke'}
              fontFamily={'Geneva, sans-serif'}
              visibility={{ base: 'hidden', xl: 'visible' }}
              w={{ base: '0%', xl: '100%' }}
              textAlign={'right'}
            >
              <Box overflow={'hidden'} textIndent={'4em'}>
                <Box
                  ref={(text: any) => textRef.current.push(text)}
                  opacity={0}
                >
                  I HAVE A PROFOUND APPRECIATION{' '}
                </Box>
              </Box>
              <Box overflow={'hidden'}>
                <Box
                  ref={(text: any) => textRef.current.push(text)}
                  opacity={0}
                >
                  FOR CRAFTING A DIGITAL PRODUCT WITH A
                </Box>
              </Box>
              <Box overflow={'hidden'} w={'100%'}>
                <Box
                  ref={(text: any) => textRef.current.push(text)}
                  opacity={0}
                >
                  TOUCH OF WARMTH AND PRECISION.{' '}
                </Box>
              </Box>
              <Box overflow={'hidden'}>
                <Box
                  ref={(text: any) => textRef.current.push(text)}
                  opacity={0}
                >
                  WITH EXPERIENCE ACROSS MANY DOMAINS,{' '}
                </Box>
              </Box>
              <Box overflow={'hidden'}>
                <Box
                  ref={(text: any) => textRef.current.push(text)}
                  opacity={0}
                >
                  I SEAMLESSLY FUSE MY EGYPTIAN HERITAGE{' '}
                </Box>
              </Box>
              <Box overflow={'hidden'}>
                <Box
                  ref={(text: any) => textRef.current.push(text)}
                  opacity={0}
                >
                  WITH THE DYNAMIC TECH LANDSCAPE{' '}
                </Box>
              </Box>
            </Box>
            <Box
              w={{ base: '100%', xl: '0%' }}
              fontSize={{ base: 16, md: 24, lg: 28, xl: 20 }}
              fontWeight={600}
              pos={'absolute'}
              bottom={{ base: '20%', md: '16%', xl: 0 }}
              right={{ base: 0, xl: '-120%' }}
              pr={{ base: 7, lg: 8 }}
              pl={{ base: 2, lg: 0 }}
              zIndex={3}
              textColor={'whitesmoke'}
              textAlign={'right'}
              fontFamily={'Geneva, sans-serif'}
              visibility={{ base: 'visible', xl: 'hidden' }}
            >
              <Box overflow={'hidden'} textIndent={'4em'}>
                <Box
                  ref={(text: any) => textRef.current.push(text)}
                  opacity={0}
                >
                  I HAVE A PROFOUND APPRECIATION{' '}
                </Box>
              </Box>
              <Box overflow={'hidden'}>
                <Box
                  ref={(text: any) => textRef.current.push(text)}
                  opacity={0}
                >
                  FOR CRAFTING A DIGITAL PRODUCT WITH A
                </Box>
              </Box>
              <Box overflow={'hidden'} w={'100%'}>
                <Box
                  ref={(text: any) => textRef.current.push(text)}
                  opacity={0}
                >
                  TOUCH OF WARMTH AND PRECISION.{' '}
                </Box>
              </Box>
              <Box overflow={'hidden'}>
                <Box
                  ref={(text: any) => textRef.current.push(text)}
                  opacity={0}
                >
                  WITH EXPERIENCE ACROSS MANY DOMAINS,{' '}
                </Box>
              </Box>
              <Box overflow={'hidden'}>
                <Box
                  ref={(text: any) => textRef.current.push(text)}
                  opacity={0}
                >
                  I SEAMLESSLY FUSE MY EGYPTIAN HERITAGE{' '}
                </Box>
              </Box>
              <Box overflow={'hidden'}>
                <Box
                  ref={(text: any) => textRef.current.push(text)}
                  opacity={0}
                >
                  WITH THE DYNAMIC TECH LANDSCAPE{' '}
                </Box>
              </Box>
            </Box>
            <Button
              pos={'absolute'}
              bottom={-30}
              right={7}
              ref={contactButtonRef}
              cursor={'pointer'}
              variant={'outline'}
              borderRadius={'full'}
              w={{ base: 44, lg: 72 }}
              fontSize={{ base: 20, lg: 32 }}
              px={-1}
              opacity={0}
              py={{ base: 2, lg: 6 }}
              textAlign={'center'}
              color={'white'}
              _hover={{
                color: '#121212',
                bg: 'gray.300',
              }}
              fontWeight={500}
              onMouseEnter={handleMouseLeave}
              onMouseLeave={handleMouseEnter}
              zIndex={4}
            >
              CONTACT ME
            </Button>
          </Flex>
        </Flex>
      </Box>
    </Box>
  )
}

export default HeroContainer