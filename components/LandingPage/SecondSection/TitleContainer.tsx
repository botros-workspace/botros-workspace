import { Box, Flex, Link, Text } from '@chakra-ui/react'
import { gsap } from 'gsap'
import React, { FunctionComponent, useEffect, useRef } from 'react'

const TitleContainer: FunctionComponent = () => {
  const quateRef = useRef(null)
  const titleRef = useRef(null)
  const indexRef = useRef(null)
  const connectRef = useRef(null)
  const linkedInRef = useRef(null)
  const textRef = useRef<any>([])
  const frontEndRef = useRef(null)
  const frontEndContainerRef = useRef(null)
  const timelineRef = useRef(gsap.timeline())

  useEffect(() => {
    const context = gsap.context(() => {
      const tl = timelineRef.current

      tl.to([indexRef.current, connectRef.current], {
        opacity: 1,
        duration: 0.5,
        ease: 'expo.inOut',
      })
        .fromTo(
          [titleRef.current, quateRef.current, textRef.current],
          {
            transform: 'translateY(100%)',
          },
          {
            transform: 'translateY(0%)',
            opacity: 1,
            duration: 1.5,
            ease: 'expo.inOut',
          }
        )
        .to(frontEndContainerRef.current, {
          width: 'auto',
          duration: 0.8,
          ease: 'expo.inOut',
        })
        .to([frontEndRef.current, linkedInRef.current], {
          transform: 'translateY(0%)',
          duration: 0.8,
          ease: 'expo.inOut',
        })
    })
    return () => context.revert()
  }, [])
  return (
    <Box w={'100%'} color={'white'} pt={12} h={{ base: '30%', lg: '45%' }}>
      <Flex w={'100%'} justifyContent={'center'} overflow={'hidden'}>
        <Text
          fontFamily={'monospace'}
          fontSize={{ base: 8, sm: 16, lg: 16 }}
          ref={quateRef}
          opacity={0}
        >
          IF NOT WITH PASSION, THEN WHY?
        </Text>
      </Flex>
      <Flex
        w={'100%'}
        justifyContent={'center'}
        fontSize={{ base: 24, sm: 36, lg: '52px' }}
        scaleY={1.1}
        fontWeight={'800'}
        mt={-1}
        overflow={'hidden'}
      >
        <Text letterSpacing={'wider'} ref={titleRef} opacity={0}>
          Skills & Experience
        </Text>
      </Flex>
      <Flex
        w={'100%'}
        justifyContent={'center'}
        fontWeight={{ base: 700, md: 600 }}
        fontSize={{ base: 10, md: 20 }}
        mt={2}
        flexDir={'row'}
        textAlign={'center'}
        gap={{ base: 1, sm: 1.5 }}
        ref={indexRef}
        opacity={0}
      >
        The main area of expertise is
        <Box
          overflow={'hidden'}
          ref={frontEndContainerRef}
          w={0}
          h={{ base: 4, sm: 6 }}
        >
          <Box
            ref={frontEndRef}
            opacity={1}
            w={'100%'}
            transform={'translateY(300%)'}
          >
            front end
          </Box>
        </Box>
        development
      </Flex>
      <Flex
        w={'100%'}
        justifyContent={'center'}
        fontWeight={{ base: 500, sm: 400 }}
        fontSize={{ base: 8, sm: 12, md: 16, lg: 20 }}
        py={2}
        textAlign={'center'}
        alignItems={'center'}
      >
        <Box w={'95%'}>
          <Box overflow={'hidden'}>
            <Box ref={(text: any) => textRef.current.push(text)} opacity={0}>
              Specialized in building customized complex web applications and
              mobile applications with
            </Box>
          </Box>
          <Box overflow={'hidden'}>
            <Box ref={(text: any) => textRef.current.push(text)} opacity={0}>
              React, React Native, Typescript, custom plugins, features,
              animations
            </Box>
          </Box>
          <Box overflow={'hidden'}>
            <Box ref={(text: any) => textRef.current.push(text)} opacity={0}>
              and coding interactive layouts. I have also full-stackdeveloper
            </Box>
          </Box>
          <Box overflow={'hidden'}>
            <Box ref={(text: any) => textRef.current.push(text)} opacity={0}>
              experience with one of the most reliable
            </Box>
          </Box>
          <Box overflow={'hidden'}>
            <Box ref={(text: any) => textRef.current.push(text)} opacity={0}>
              Frameworks- Django API
            </Box>
          </Box>
          <Box
            w={'100%'}
            fontWeight={{ base: 700, md: 600 }}
            fontSize={{ base: 10, md: 20 }}
            mt={2}
            display={'flex'}
            gap={1}
            alignItems={'center'}
            justifyContent={'center'}
            flexDir={'row'}
            ref={connectRef}
            opacity={0}
          >
            <Box>Fancy a project? Connect with me on</Box>
            <Box overflow={'hidden'} zIndex={99}>
              <Box
                color={'linkedin.300'}
                transform={'translateY(300%)'}
                ref={linkedInRef}
                zIndex={99}
              >
                <Link
                  zIndex={99}
                  href={'https://www.linkedin.com/in/david-botros-967ba4211/'}
                  target='_blank'
                  _hover={{
                    color: 'linkedin.700',
                    textDecor: 'none',
                  }}
                >
                  Linkedin
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
      </Flex>
    </Box>
  )
}

export default TitleContainer
