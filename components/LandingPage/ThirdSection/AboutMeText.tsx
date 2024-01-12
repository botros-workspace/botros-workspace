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
            I am a passionate, ambitious and hardworking developer, always
            trying to learn and improve myself. Furthermore, I consider myself a
            Team Player and creative in my approach to solve problems.
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
            A key strength of mine is communication; building strong
            relationship with people in order to deliver the best results. For
            the last 8 years I have been developing my skills by learning the
            coding standards and concepts, regardless of the language itself.
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
            I worked on different projects using different programming languages
            and frameworks, alone and in teams, in which I have learned how to
            collaborate on code, be consistent in my style of coding and how to
            maintain a code base of a project.
          </Text>
        </Box>
      </Box>
    </Element>
  )
}

export default AboutMeText
