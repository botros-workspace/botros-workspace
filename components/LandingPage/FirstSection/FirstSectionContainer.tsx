import { Box, Flex, Text, Image, Button } from '@chakra-ui/react'
import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import HeroCover from './HeroCover'
import { gsap } from 'gsap'
import ProductsContainer from './ProductsContainer'
type Props = {
  setContainerToFourthSection: () => void
}
const FirstSectionContainer: FunctionComponent<Props> = ({
  setContainerToFourthSection,
}) => {
  const creativeTextRef = useRef(null)
  const frontendTextRef = useRef(null)
  const developerTextRef = useRef(null)
  const contactButtonRef = useRef(null)
  const textRef = useRef<any>([])
  const [heroCoverSmallScale, setSHeroCoverSmallScale] = useState<number>(740)
  const [heroCoverBigScale, setSHeroCoverBigScale] = useState<number>(2000)
  const [heroWidthScale, setHeroWidthScale] = useState(450)
  const [isHeroVisible, setIsHeroVisible] = useState(false)
  const timelineRef = useRef(gsap.timeline())
  const [showProducts, setShowProducts] = useState(false)

  const handleMouseEnter = useCallback(() => {
    setShowProducts(false)
    setSHeroCoverSmallScale(0)
    setSHeroCoverBigScale(0)
    setHeroWidthScale(0)
  }, [])
  const handleMouseLeave = useCallback(() => {
    setShowProducts(true)
    setSHeroCoverSmallScale(740)
    setSHeroCoverBigScale(2000)
    setHeroWidthScale(450)
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setIsHeroVisible(true)
    }, 1750)
    setTimeout(() => {
      handleMouseEnter()
    }, 1751)
  }, [handleMouseEnter])
  useEffect(() => {
    const context = gsap.context(() => {
      const tl = timelineRef.current

      tl.to(creativeTextRef.current, {
        opacity: 1,
        duration: 0.7,
        delay: 0.2,
        ease: 'expo.inOut',
      })
        .fromTo(
          frontendTextRef.current,
          {
            top: 1000,
            skewY: 70,
          },
          {
            top:
              window.innerWidth < 768
                ? -55
                : window.innerWidth < 992
                ? -70
                : -85,
            opacity: 1,
            skewY: 0,
            duration: 0.8,
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
            top:
              window.innerWidth < 768
                ? -55
                : window.innerWidth < 992
                ? -70
                : -85,
            opacity: 1,
            skewY: 0,
            duration: 0.8,
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
            duration: 1.2,
            ease: 'expo.inOut',
          }
        )
        .fromTo(
          contactButtonRef.current,
          {
            bottom: -80,
            opacity: 0,
          },
          {
            bottom: window.innerWidth < 992 ? -10 : -20,
            opacity: 1,
            duration: 1.3,
            ease: 'expo.inOut',
          },
          '<'
        )
    })
    return () => context.revert()
  }, [])
  return (
    <Box bg={'#121212'} h={'100%'} w={'100%'}>
      <Flex
        w={'100vw'}
        h={'100vh'}
        bgImage={'./Hero.jpeg'}
        backgroundRepeat={'no-repeat'}
        backgroundSize={'contain'}
        overflow={'hidden'}
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
        <Flex
          w={'100%'}
          h={'100%'}
          direction={{ base: 'column', xl: 'row' }}
          pos={'absolute'}
        >
          <Flex
            w={{ base: '100%', xl: '50%' }}
            h={{ base: '50%', xl: '100%' }}
            bg={'transparent'}
          >
            <Box
              h={{ base: '85%', xl: '70%' }}
              w={'100%'}
              alignSelf={'end'}
              pl={{ base: 3, xl: 6 }}
              zIndex={3}
            >
              <Box
                fontSize={{ base: 24, md: 40 }}
                color={'#E9DAC4'}
                w={'100%'}
                h={{ base: 8, md: 12 }}
                fontFamily={'cursive'}
                overflow={'hidden'}
              >
                <Text opacity={0} ref={creativeTextRef}>
                  creative
                </Text>
              </Box>
              <Box
                w={'100%'}
                color={'white'}
                fontFamily={'Six Caps'}
                overflow={'hidden'}
                h={{ base: 40, md: 56, lg: 64 }}
                pos={'relative'}
              >
                <Text
                  ref={frontendTextRef}
                  fontWeight={100}
                  opacity={0}
                  h={'100%'}
                  fontSize={{ base: '1100%', md: '1500%', lg: '1700%' }}
                  pos={'absolute'}
                  left={{ base: -1, lg: -2 }}
                  top={-90}
                >
                  FRONTEND
                </Text>
              </Box>
              <Box
                w={'100%'}
                color={'white'}
                fontFamily={'Six Caps'}
                overflow={'hidden'}
                h={{ base: 40, md: 56, lg: 64 }}
                pos={'relative'}
              >
                <Text
                  ref={developerTextRef}
                  fontWeight={100}
                  opacity={0}
                  h={'100%'}
                  fontSize={{ base: '1100%', md: '1500%', lg: '1700%' }}
                  pos={'absolute'}
                  left={{ base: -1, lg: -2 }}
                  top={-90}
                >
                  DEVELOPER
                </Text>
              </Box>
            </Box>
          </Flex>
          <Flex
            w={{ base: '100%', xl: '50%' }}
            h={{ base: '50%', xl: '100%' }}
            direction={'column'}
          >
            <Box w={'100%'} h={'100%'} zIndex={3}>
              <Box
                fontSize={{ base: 16, md: 24 }}
                fontWeight={600}
                mt={{ base: '25%', xl: 12 }}
                w={'100%'}
                textColor={'whitesmoke'}
                fontFamily={'Geneva, sans-serif'}
                textAlign={'right'}
              >
                <Box
                  overflow={'hidden'}
                  pr={{ base: 6, md: 8 }}
                  w={{ base: '90%', sm: '80%', md: '90%' }}
                  float={'right'}
                >
                  <Box ref={textRef} opacity={0} textIndent={'4em'}>
                    Are you in search of a skilled developer who can bring your
                    web vision to life? Look no further!
                    <br /> I am a dedicated React and TypeScript developer with
                    a passion for creating seamless, responsive, animated and
                    visually stunning websites.
                  </Box>
                </Box>
              </Box>

              <Box
                h={{ base: 20, lg: 28 }}
                w={{ base: '100%', xl: '50%' }}
                pos={'absolute'}
                bottom={0}
              >
                <Button
                  ref={contactButtonRef}
                  opacity={0}
                  cursor={'pointer'}
                  variant={'outline'}
                  borderRadius={'full'}
                  float={'right'}
                  mr={{ base: 6, md: 8 }}
                  w={{ base: 44, md: 72 }}
                  fontSize={{ base: 20, md: 32 }}
                  onClick={setContainerToFourthSection}
                  px={-1}
                  py={{ base: 2, md: 6 }}
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
              </Box>
              <ProductsContainer show={showProducts} />
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  )
}

export default FirstSectionContainer
