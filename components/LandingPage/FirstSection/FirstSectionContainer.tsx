import { Box, Flex, Text, Button } from '@chakra-ui/react'
import React, { FunctionComponent, useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { SectionsTypes } from '../../../shared/enums/sections-types.enum'
import { FaAngleRight } from 'react-icons/fa6'
import { NavigationArrow } from '../../shared/NavigationArrow'

type Props = {
  setContainerToFourthSection: () => void
  setCurrentSection: (value: SectionsTypes) => void
}
const FirstSectionContainer: FunctionComponent<Props> = ({
  setContainerToFourthSection,
  setCurrentSection,
}) => {
  const creativeTextRef = useRef(null)
  const frontendTextRef = useRef(null)
  const developerTextRef = useRef(null)
  const contactButtonRef = useRef(null)
  const contactButtonBackgroundRef = useRef(null)
  const text1Ref = useRef<any>([])
  const text2Ref = useRef<any>([])
  const timelineRef = useRef(gsap.timeline())

  useEffect(() => {
    const context = gsap.context(() => {
      const tl = timelineRef.current

      tl.to(creativeTextRef.current, {
        opacity: 1,
        duration: 0.7,
        delay: 0.05,
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
          [text1Ref.current, text2Ref.current],
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
            bottom: window.innerWidth < 992 ? 70 : -20,
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
    <Box bg={'#121212'} h={'100%'} w={'100%'} pos={'relative'}>
      <NavigationArrow
        direction='right'
        onClick={() => setCurrentSection(SectionsTypes.SECOND_SECTIONS)}
      />
      <Flex w={'100vw'} h={'100vh'} overflow={'hidden'} pos={'absolute'}>
        <Box
          w={'100vw'}
          h={'100vh'}
          position='absolute'
          top='0'
          left='0'
          zIndex={2}
          bg={'rgba(0,0,0,0.3)'}
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
                pt={{ base: '12%', xl: 12 }}
                fontFamily={'Geneva, sans-serif'}
                textAlign={'right'}
                pr={{ base: 6, md: 8 }}
                w={{ base: '90%', sm: '80%', md: '90%' }}
                float={'right'}
                textColor={'whitesmoke'}
                overflow={'hidden'}
              >
                <Text w={'100%'} ref={text1Ref} opacity={0}>
                  Senior Frontend Engineer specializing in React and TypeScript,
                  building scalable, high-performance SaaS and startup products.
                </Text>
                <Text
                  w={'100%'}
                  ref={text2Ref}
                  opacity={0}
                  mt={{ base: 3, md: 8 }}
                >
                  I design and own frontend systems end-to-end — from
                  architecture and implementation to performance optimization
                  and production delivery.
                </Text>
              </Box>

              <Box
                h={{ base: 20, lg: 28 }}
                w={{ base: '100%', xl: '50%' }}
                pos={'absolute'}
                bottom={0}
              >
                <Button
                  ref={contactButtonRef}
                  position='relative'
                  overflow='hidden'
                  cursor='pointer'
                  variant='outline'
                  borderRadius='full'
                  float='right'
                  mr={{ base: 6, md: 8 }}
                  w={{ base: 44, md: 72 }}
                  fontSize={{ base: 20, md: 32 }}
                  onClick={setContainerToFourthSection}
                  py={{ base: 2, md: 6 }}
                  textAlign='center'
                  color='white'
                  fontWeight={500}
                  zIndex={4}
                  bg='transparent'
                  _before={{
                    content: '""',
                    position: 'absolute',
                    inset: 0,
                    bg: 'white',
                    borderRadius: 'full',
                    transform: 'translateX(-100%)',
                    transition: 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
                    willChange: 'transform',
                    zIndex: 0,
                  }}
                  _hover={{
                    color: '#121212',
                    _before: {
                      transform: 'translateX(0)',
                    },
                  }}
                >
                  <Flex position='relative' zIndex={1}>
                    CONTACT ME
                  </Flex>
                </Button>
              </Box>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  )
}

export default FirstSectionContainer
