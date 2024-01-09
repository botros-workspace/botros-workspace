import { Box, Flex, Show, Text, Image, Center } from '@chakra-ui/react'
import React, { FunctionComponent, useEffect, useRef, useState } from 'react'
import { Element } from 'react-scroll'
import { AboutMeIndexTypes } from '../../../shared/enums/about-me-index-types.enum'
import { Variants, motion } from 'framer-motion'
type Props = {
  setSelectedIndex: (value: AboutMeIndexTypes) => void
}
const ProgrammingLanguagesContainer: FunctionComponent<Props> = ({
  setSelectedIndex,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [show, setShow] = useState(false)
  const appearingVariants: Variants = {
    offscreen: {
      y: 100,
      skewY: 10,
      skewX: 10,
    },
    onscreen: {
      y: 0,
      transition: {
        type: 'spring',
        bounce: 0.8,
        duration: 0.8,
      },
      skewY: 0,
      skewX: 0,
    },
  }
  useEffect(() => {
    const handleScroll = () => {
      const containerElement = containerRef.current

      if (containerElement) {
        const containerrect = containerElement.getBoundingClientRect()
        if (
          window.innerHeight >= containerrect.top &&
          window.innerHeight <= containerrect.bottom + 250
        ) {
          setSelectedIndex(AboutMeIndexTypes.PROGRAMING_LANGUAGES)
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [setSelectedIndex])
  useEffect(() => {
    const handleScroll = () => {
      const containerElement = containerRef.current

      if (containerElement) {
        const containerrect = containerElement.getBoundingClientRect()
        if (window.innerHeight >= containerrect.top + 350) {
          setShow(true)
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [setSelectedIndex])
  return (
    <Element name='programmingLanguagesComponent'>
      <Box w={'90%'} ref={containerRef}>
        <Show below='lg'>
          <Text
            fontSize={{ base: 20, xl: 14 }}
            color={'white'}
            fontWeight={700}
            pt={12}
            pl={{ base: 5, md: 12, lg: 8 }}
          >
            PROGRAMMING LANGUAGES
          </Text>
        </Show>
        <Box mt={4}>
          <Flex flexDir={'row'} pl={{ base: 5, md: 12, lg: 8 }}>
            <Flex w={'15%'}>
              <Image src={'./javascript.png'} alt={'javascript'} />
            </Flex>
            <Flex w={'40%'}>
              <Center w={'100%'}>
                <Text
                  color={'white'}
                  fontSize={{ base: 20, xl: 14 }}
                  fontWeight={700}
                  transform={{
                    base: 'scaleY(1) scaleX(1)',
                    md: 'scaleY(1.3) scaleX(1.3)',
                    xl: 'scaleY(2) scaleX(2)',
                  }}
                >
                  Javascript
                </Text>
              </Center>
            </Flex>
            <Flex w={'40%'}>
              <Center w={'100%'}>
                {show && (
                  <motion.div
                    initial='offscreen'
                    animate={'onscreen'}
                    viewport={{ once: true, amount: 0.8 }}
                    variants={appearingVariants}
                  >
                    <Text
                      color={'white'}
                      fontSize={{ base: 20, xl: 14 }}
                      fontWeight={700}
                      transform={{
                        base: 'scaleY(1) scaleX(1)',
                        md: 'scaleY(1.3) scaleX(1.3)',
                        xl: 'scaleY(2) scaleX(2)',
                      }}
                    >
                      Advanced
                    </Text>
                  </motion.div>
                )}
              </Center>
            </Flex>
          </Flex>
          <Flex flexDir={'row'} pl={{ base: 5, md: 12, lg: 8 }} mt={10}>
            <Flex w={'15%'}>
              <Image src={'./typescript.svg'} alt={'javascript'} />
            </Flex>
            <Flex w={'40%'}>
              <Center w={'100%'}>
                <Text
                  color={'white'}
                  fontSize={{ base: 20, xl: 14 }}
                  fontWeight={700}
                  transform={{
                    base: 'scaleY(1) scaleX(1)',
                    md: 'scaleY(1.3) scaleX(1.3)',
                    xl: 'scaleY(2) scaleX(2)',
                  }}
                >
                  Typescript
                </Text>
              </Center>
            </Flex>
            <Flex w={'40%'}>
              <Center w={'100%'}>
                {show && (
                  <motion.div
                    initial='offscreen'
                    animate={'onscreen'}
                    viewport={{ once: true, amount: 0.8 }}
                    variants={appearingVariants}
                  >
                    <Text
                      color={'white'}
                      fontSize={{ base: 20, xl: 14 }}
                      fontWeight={700}
                      transform={{
                        base: 'scaleY(1) scaleX(1)',
                        md: 'scaleY(1.3) scaleX(1.3)',
                        xl: 'scaleY(2) scaleX(2)',
                      }}
                    >
                      Advanced
                    </Text>
                  </motion.div>
                )}
              </Center>
            </Flex>
          </Flex>
          <Flex flexDir={'row'} pl={{ base: 5, md: 12, lg: 8 }} mt={10}>
            <Flex w={'15%'}>
              <Image src={'./python.webp'} alt={'javascript'} />
            </Flex>
            <Flex w={'40%'}>
              <Center w={'100%'}>
                <Text
                  color={'white'}
                  fontSize={{ base: 20, xl: 14 }}
                  fontWeight={700}
                  transform={{
                    base: 'scaleY(1) scaleX(1)',
                    md: 'scaleY(1.3) scaleX(1.3)',
                    xl: 'scaleY(2) scaleX(2)',
                  }}
                >
                  Python
                </Text>
              </Center>
            </Flex>
            <Flex w={'40%'}>
              <Center w={'100%'}>
                {show && (
                  <motion.div
                    initial='offscreen'
                    animate={'onscreen'}
                    viewport={{ once: true, amount: 0.8 }}
                    variants={appearingVariants}
                  >
                    <Text
                      color={'white'}
                      fontSize={{ base: 20, xl: 14 }}
                      fontWeight={700}
                      transform={{
                        base: 'scaleY(1) scaleX(1)',
                        md: 'scaleY(1.3) scaleX(1.3)',
                        xl: 'scaleY(2) scaleX(2)',
                      }}
                    >
                      Advanced
                    </Text>
                  </motion.div>
                )}
              </Center>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </Element>
  )
}

export default ProgrammingLanguagesContainer
