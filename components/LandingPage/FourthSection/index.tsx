import { Box, Image } from '@chakra-ui/react'
import React, { FunctionComponent, LegacyRef, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { SectionsTypes } from '../../../shared/enums/sections-types.enum'
import LeftCardContainer from './LeftCardContainer'
import RightCardContainer from './RightCardContainer'

const ContactMeMainContainer: FunctionComponent = () => {
  const leftcardContainerRef = useRef(null)
  const rightcardContainerRef = useRef(null)
  const timelineRef = useRef(gsap.timeline())

  useEffect(() => {
    const context = gsap.context(() => {
      const tl = timelineRef.current
      if (window.innerWidth > 750) {
        tl.to(leftcardContainerRef.current, {
          transform: 'translateX(50%) skewY(10deg)',
          duration: 1,
          ease: 'power3.inOut',
        })
          .to(leftcardContainerRef.current, {
            transform: 'translateX(50%) skewY(0deg)',
            borderRadius: '20px 20px 20px 20px',
            duration: 0.1,
            ease: 'power3.inOut',
          })
          .to(rightcardContainerRef.current, {
            transform: 'translateX(60%) skewY(-10deg)',
            borderRadius: '20px 50px 20px 20px',
            duration: 1,
            ease: 'power3.inOut',
          })
          .to(rightcardContainerRef.current, {
            transform: 'translateX(60%) ',
            borderRadius: '20px 20px 20px 20px',
            duration: 0.5,
            ease: 'power3.inOut',
          })
          .to(rightcardContainerRef.current, {
            transform: 'skewY(-20deg) skewX(10deg) translateX(50%)',
            borderRadius: '20px 50px 20px 20px',
            duration: 0.1,
            ease: 'expo.inOut',
          })
          .to(
            leftcardContainerRef.current,
            {
              transform: 'skewY(-20deg) skewX(10deg) translateX(50%)',
              duration: 0.1,
              ease: 'expo.inOut',
            },
            '<30%'
          )
          .to(rightcardContainerRef.current, {
            transform: 'skewY(0deg) skewX(0deg) translateX(50%)',
            borderRadius: '20px 20px 20px 20px',
            duration: 0.1,
            ease: 'expo.inOut',
          })
          .to(
            leftcardContainerRef.current,
            {
              transform: 'skewY(0deg) skewX(0deg) translateX(50%)',
              duration: 0.1,
              ease: 'expo.inOut',
            },
            '<'
          )
          .to(rightcardContainerRef.current, {
            transform: 'skewY(-20deg) skewX(10deg) translateX(50%)',
            borderRadius: '20px 50px 20px 20px',
            duration: 0.1,
            ease: 'expo.inOut',
          })
          .to(
            leftcardContainerRef.current,
            {
              transform: 'skewY(-20deg) skewX(10deg) translateX(50%)',
              duration: 0.1,
              ease: 'expo.inOut',
            },
            '<30%'
          )
          .to(rightcardContainerRef.current, {
            transform: 'skewY(0deg) skewX(0deg) translateX(60%)',
            borderRadius: '20px 20px 20px 20px',
            duration: 0.1,
            ease: 'expo.inOut',
          })
          .to(
            leftcardContainerRef.current,
            {
              transform: 'skewY(0deg) skewX(0deg) translateX(50%)',
              duration: 0.1,
              ease: 'expo.inOut',
            },
            '<'
          )
          .to(leftcardContainerRef.current, {
            transform: ' translateX(-5%)',
            delay: 0.2,
            duration: 0.6,
            ease: 'expo.inOut',
          })
          .to(rightcardContainerRef.current, {
            transform: 'translateX(5%)',
            duration: 0.6,
            ease: 'expo.inOut',
          })
          .to(rightcardContainerRef.current, {
            transform: 'skewY(-20deg) skewX(10deg) translateX(-20%)',
            borderRadius: '20px 50px 20px 20px',
            duration: 0.1,
            ease: 'expo.inOut',
          })
          .to(
            leftcardContainerRef.current,
            {
              transform: 'skewY(-20deg) skewX(10deg) translateX(-20%)',
              duration: 0.1,
              ease: 'expo.inOut',
            },
            '<50%'
          )
          .to(
            rightcardContainerRef.current,
            {
              transform: 'skewY(0deg) skewX(0deg) translateX(5%)',
              borderRadius: '20px 20px 20px 20px',
              duration: 0.1,
              ease: 'expo.inOut',
            },
            '<'
          )
          .to(leftcardContainerRef.current, {
            transform: 'skewY(0deg) skewX(0deg) translateX(-5%)',
            duration: 0.1,
            ease: 'expo.inOut',
          })
          .to(leftcardContainerRef.current, {
            transform: 'skewY(-20deg) skewX(10deg) translateX(-5%)',
            duration: 0.1,
            ease: 'expo.inOut',
          })
          .to(leftcardContainerRef.current, {
            transform: 'skewY(0deg) skewX(0deg) translateX(-5%)',
            duration: 0.1,
            ease: 'expo.inOut',
          })

          .to(
            leftcardContainerRef.current,
            {
              transform: 'skewY(0deg) skewX(0deg) translateX(-5%)',
              duration: 0.1,
              ease: 'expo.inOut',
            },
            '<'
          )
      } else {
        tl.to(leftcardContainerRef.current, {
          transform: 'translateY(50%) ',
          duration: 1,
          ease: 'power3.inOut',
        })
          .to(leftcardContainerRef.current, {
            transform: 'translateY(50%) ',
            borderRadius: '20px 20px 20px 20px',
            duration: 0.1,
            ease: 'power3.inOut',
          })
          .to(rightcardContainerRef.current, {
            transform: 'translateY(60%) ',
            borderRadius: '50px 50px 20px 20px',
            duration: 1,
            ease: 'power3.inOut',
          })
          .to(rightcardContainerRef.current, {
            transform: 'translateY(60%) ',
            borderRadius: '20px 20px 20px 20px',
            duration: 0.5,
            ease: 'power3.inOut',
          })
          .to(rightcardContainerRef.current, {
            transform: 'skewY(-20deg) skewX(10deg) translateY(50%)',
            borderRadius: '20px 50px 20px 20px',
            duration: 0.1,
            ease: 'expo.inOut',
          })
          .to(
            leftcardContainerRef.current,
            {
              transform: 'skewY(-20deg) skewX(10deg) translateY(50%)',
              duration: 0.1,
              ease: 'expo.inOut',
            },
            '<30%'
          )
          .to(rightcardContainerRef.current, {
            transform: 'skewY(0deg) skewX(0deg) translateY(50%)',
            borderRadius: '20px 20px 20px 20px',
            duration: 0.1,
            ease: 'expo.inOut',
          })
          .to(
            leftcardContainerRef.current,
            {
              transform: 'skewY(0deg) skewX(0deg) translateY(50%)',
              duration: 0.1,
              ease: 'expo.inOut',
            },
            '<'
          )
          .to(rightcardContainerRef.current, {
            transform: 'skewY(-20deg) skewX(10deg) translateY(50%)',
            borderRadius: '20px 50px 20px 20px',
            duration: 0.1,
            ease: 'expo.inOut',
          })
          .to(
            leftcardContainerRef.current,
            {
              transform: 'skewY(-20deg) skewX(10deg) translateY(50%)',
              duration: 0.1,
              ease: 'expo.inOut',
            },
            '<30%'
          )
          .to(rightcardContainerRef.current, {
            transform: 'skewY(0deg) skewX(0deg) translateY(60%)',
            borderRadius: '20px 20px 20px 20px',
            duration: 0.1,
            ease: 'expo.inOut',
          })
          .to(
            leftcardContainerRef.current,
            {
              transform: 'skewY(0deg) skewX(0deg) translateY(50%)',
              duration: 0.1,
              ease: 'expo.inOut',
            },
            '<'
          )
          .to(leftcardContainerRef.current, {
            transform: ' translateY(-5%)',
            delay: 0.2,
            duration: 0.6,
            ease: 'expo.inOut',
          })
          .to(rightcardContainerRef.current, {
            transform: 'translateY(5%)',
            duration: 0.6,
            ease: 'expo.inOut',
          })
          .to(rightcardContainerRef.current, {
            transform: 'skewY(-20deg) skewX(10deg) translateY(-20%)',
            borderRadius: '20px 50px 20px 20px',
            duration: 0.1,
            ease: 'expo.inOut',
          })
          .to(
            leftcardContainerRef.current,
            {
              transform: 'skewY(-20deg) skewX(10deg) translateY(-20%)',
              duration: 0.1,
              ease: 'expo.inOut',
            },
            '<50%'
          )
          .to(
            rightcardContainerRef.current,
            {
              transform: 'skewY(0deg) skewX(0deg) translateY(5%)',
              borderRadius: '20px 20px 20px 20px',
              duration: 0.1,
              ease: 'expo.inOut',
            },
            '<'
          )
          .to(leftcardContainerRef.current, {
            transform: 'skewY(0deg) skewX(0deg) translateY(-5%)',
            duration: 0.1,
            ease: 'expo.inOut',
          })
          .to(leftcardContainerRef.current, {
            transform: 'skewY(-20deg) skewX(10deg) translateY(-5%)',
            duration: 0.1,
            ease: 'expo.inOut',
          })
          .to(leftcardContainerRef.current, {
            transform: 'skewY(0deg) skewX(0deg) translateY(-5%)',
            duration: 0.1,
            ease: 'expo.inOut',
          })

          .to(
            leftcardContainerRef.current,
            {
              transform: 'skewY(0deg) skewX(0deg) translateY(-5%)',
              duration: 0.1,
              ease: 'expo.inOut',
            },
            '<'
          )
      }
    })
    return () => context.revert()
  }, [])
  return (
    <Box bg={'#121212'} h={'100vh'} maxH={'100vh'} w={'100vw'} pos={'absolute'}>
      <Box
        w={'100%'}
        h={'100vh'}
        maxH={'100vh'}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        flexDir={{ base: 'column', md: 'row' }}
      >
        <Box
          w={72}
          h={{ base: 72, md: 96 }}
          ref={leftcardContainerRef}
          borderColor={'white'}
          transform={{ base: 'translateY(-600%)', md: 'translateX(-600%)' }}
          borderRadius={{
            base: '20px 20px 50px 50px',
            md: '50px 20px 20px 20px',
          }}
          borderWidth={1}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <LeftCardContainer />
        </Box>
        <Box
          w={72}
          h={{ base: 72, md: 96 }}
          ref={rightcardContainerRef}
          borderColor={'white'}
          transform={{ base: 'translateY(600%)', md: 'translateX(600%)' }}
          borderRadius={{
            base: '50px 50px 20px 20px',
            md: '20px 20px 20px 20px',
          }}
          borderWidth={1}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          bg={'white'}
        >
          <RightCardContainer />
        </Box>
      </Box>
    </Box>
  )
}

export default ContactMeMainContainer
