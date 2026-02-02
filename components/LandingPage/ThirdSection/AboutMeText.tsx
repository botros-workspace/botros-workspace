import React, { FunctionComponent, useEffect, useRef } from 'react'
import { Box, Center, Show, Text } from '@chakra-ui/react'
import { Element } from 'react-scroll'
import { AboutMeIndexTypes } from '../../../shared/enums/about-me-index-types.enum'
import ContentSeparator from '../../shared/ContentSeparator'
import { gsap } from 'gsap'

type Props = {
  setSelectedIndex: (value: AboutMeIndexTypes) => void
}
const AboutMeText: FunctionComponent<Props> = ({ setSelectedIndex }) => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const textRef = useRef<any>([])
  const titleRef = useRef(null)
  const timelineRef = useRef(gsap.timeline())

  useEffect(() => {
    const context = gsap.context(() => {
      const tl = timelineRef.current

      tl.to(titleRef.current, {
        opacity: window.innerWidth > 1000 ? 0 : 1,
        duration: 2,
        ease: 'expo.inOut',
      }).fromTo(
        textRef.current,
        {
          transform: 'translateY(150%)',
        },
        {
          transform: 'translateY(0%)',
          opacity: 1,
          duration: 1,
          stagger: 0.03,
          ease: 'expo.inOut',
        },
        '<30%'
      )
    })
    return () => context.revert()
  }, [])
  useEffect(() => {
    const handleScroll = () => {
      const containerElement = containerRef.current

      if (containerElement) {
        const containerrect = containerElement.getBoundingClientRect()
        if (containerrect.top >= 0) {
          setSelectedIndex(AboutMeIndexTypes.ABOUT_ME)
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [setSelectedIndex])

  return (
    <Element name='aboutMeComponent'>
      <Box
        w={{ base: '100%', xl: '86%' }}
        ref={containerRef}
        p={{ base: 5, sm: 7, md: 12, lg: 8 }}
        pt={14}
        h={'70%'}
      >
        <Text
          fontSize={20}
          color={'white'}
          mb={3}
          fontWeight={700}
          ref={titleRef}
          opacity={0}
        >
          ABOUT
        </Text>

        <Box overflow={'hidden'}>
          <Text
            fontSize={18}
            fontWeight={500}
            color={'white'}
            opacity={0}
            ref={(text: any) => textRef.current.push(text)}
          >
            I’m a Senior Frontend Engineer with 8+ years of experience building
            and scaling web and mobile applications using React and TypeScript.
          </Text>
        </Box>
        <Box overflow={'hidden'}>
          <Text
            fontSize={18}
            fontWeight={500}
            color={'white'}
            mt={4}
            opacity={0}
            ref={(text: any) => textRef.current.push(text)}
          >
            I specialize in owning frontend systems end-to-end — from
            architecture and implementation to performance optimization,
            testing, and production delivery.
          </Text>
        </Box>
        <Box overflow={'hidden'}>
          <Text
            fontSize={18}
            fontWeight={500}
            color={'white'}
            mt={4}
            opacity={0}
            ref={(text: any) => textRef.current.push(text)}
          >
            I’ve worked in startup and product-driven environments,
            collaborating directly with founders, designers, and backend
            engineers to ship production-ready features under tight timelines.
          </Text>
        </Box>
        <Box overflow={'hidden'}>
          <Text
            fontSize={18}
            fontWeight={500}
            color={'white'}
            mt={4}
            opacity={0}
            ref={(text: any) => textRef.current.push(text)}
          >
            I care about clean architecture, maintainability, and performance,
            and I enjoy mentoring developers and raising frontend standards
            within teams.
          </Text>
        </Box>
      </Box>
    </Element>
  )
}

export default AboutMeText
